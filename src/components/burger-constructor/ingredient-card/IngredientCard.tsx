import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ScIngredientItem } from './IngredientCard.styled';
import { useRef, FC  } from 'react';
import { useDrop, useDrag, DropTargetMonitor } from 'react-dnd';
import { TItem } from '../../../utils/types';

type IProps = {
  data: TItem;
  deleteItem: (() => void) | undefined;
  moveElement: (dragIndex: number, hoverIndex: number) => void;
  index: number;
  id: string;
}

type DragElement = {
  index: number;
  id?: string ;
  type: string;

}

export const IngredientCard: FC <IProps> =  ({
  data,
  deleteItem,
  moveElement,
  index,
  id,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [{ handlerId }, drop]: any = useDrop<TItem, void>({
    accept: 'ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover:(item: DragElement, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex: number = item.index;
      const hoverIndex: number = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset()!
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{}, drag] = useDrag({
    type: 'ingredient',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  // const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <ScIngredientItem data-handler-id={handlerId} ref={ref}>
      <div>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={data.name}
        price={data.price}
        thumbnail={data.image_mobile}
        handleClose={deleteItem}
      />
    </ScIngredientItem>
  );
};

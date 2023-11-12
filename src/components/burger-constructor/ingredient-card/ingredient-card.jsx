import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ScIngredientItem } from './ingredient-card.styled';
import { useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';

export const IngredientCard = ({
  data,
  deleteItem,
  moveElement,
  index,
  id,
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
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
    <>
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
    </>
  );
};

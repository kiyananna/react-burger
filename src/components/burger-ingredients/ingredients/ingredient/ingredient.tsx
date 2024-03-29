import { useState, useMemo, FC } from 'react';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  Card,
  CardImage,
  CardCost,
  CardTitle,
  ScCounter,
} from './ingredient.styled';
import { IngredientDetail } from '../ingredient-detail/ingredient-detail';
import { Modal } from '../../../modal/modal';
import { useDrag } from 'react-dnd';
import { TItem, TItemState } from '../../../../utils/types';
import {
  getIngredientDescription,
  clearIngredientDescription,
} from '../../../../services/ingredient-detail/actions';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch  } from '../../../../hooks/index';



type IProps = {
  data: TItem;
}

export const Ingredient: FC <IProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalClose = () => {
    setIsOpen(false);
    dispatch(clearIngredientDescription());
  };

  const location = useLocation();

  const dispatch = useAppDispatch();

  const handleModalOpen = () => {
    setIsOpen(true);

    dispatch(getIngredientDescription(data));
  };

  const [didDrop, dragRef] = useDrag(
    () => ({
      type: 'item',
      item: {
        id: data._id,
        data: data,
        type: data.type,
      },
      collect: (monitor) => ({
        didDrop: !!monitor.didDrop(),
      }),
    }),
    [],
  );

  const constructorList = useAppSelector(
    (state) => state.ingredientsConstructor.constructorList,
  );

  const count = useMemo(() => {
    return constructorList.reduce((count: number, item: TItemState) => {
      if (item.data._id === data._id) {
        return item.type === 'bun' ? count + 2 : count + 1;
      }
      return count;
    }, 0);
  }, [constructorList, data]);

  return (
    <>
      <Link
        to={`ingredients/${data._id}`}
        state={{ backgroundLocation: location }}
        className="card-link"
      >
        <Card onClick={handleModalOpen}>
          {count > 0 && (
            <ScCounter>
              <Counter count={count} size="default" />
            </ScCounter>
          )}
          <CardImage
            ref={dragRef}
            style={{ cursor: didDrop ? 'grab' : 'default' }}
            src={data.image}
            alt="Картинка ингредиента"
          />

          <CardCost>
            <CurrencyIcon type="primary" />
            {data.price}
          </CardCost>
          <CardTitle>{data.name}</CardTitle>
        </Card>
      </Link>
      {isOpen && (
        <Modal
          handleModalClose={handleModalClose}
          modalTitle="Детали Ингредиента"
        >
          <IngredientDetail data={data} />
        </Modal>
      )}
    </>
  );
};



import { useCallback, useState, useMemo, useEffect } from 'react';
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {
  ScBurgerConstructorWrapper,
  ScIngredientItem,
  ScIngredients,
  PriceWrapper,
  ScIngredient,
} from './BurgerConstructor.styled';
import { IngredientCard } from './ingredient-card/ingredient-card';
import { itemType } from '../../utils/prop-types';
import { Modal } from '../modal/modal';
import { OrderDetails } from './order-description/order-description';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
  getConstructorElement,
  deleteConstructorElement,
  getBun,
  moveConstructorElement,
} from '../../services/constructor-ingredients/actions';
import { v4 as uuidv4 } from 'uuid';
import {
  getOrderDetail,
  getOrderRequest,
} from '../../services/order-detail/actions';
import { postOrder } from '../../utils/utils';
import { nanoid } from 'nanoid';

export const BurgerConstructor = () => {
  const [isOpen, setIsOpen] = useState(true);
  const data = useSelector(
    (state) => state.ingredientsConstructor.constructorList,
  );
  const dispatch = useDispatch();

  const handleOpen = () => {
    setIsOpen(true);
    const orderIds = data.map((item) => item.data._id);
    dispatch(getOrderRequest());
    postOrder(orderIds).then((data) => {
      dispatch(getOrderDetail(data.order.number));
    });
  };

  const moveElement = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch(moveConstructorElement(dragIndex, hoverIndex));
    },
    [dispatch],
  );

  const totalPrice = useMemo(() => {
    const sum = data
      .map((item) => {
        if (item.data.type === 'bun') {
          return item.data.price * 2;
        }
        return item.data.price;
      })
      .reduce((acc, curr) => acc + curr, 0);

    return sum;
  }, [data]);

  const [{}, dropRef] = useDrop(() => ({
    accept: 'item',
    drop: (item) => addItem(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const addItem = (element) => {
    element = { ...element, id: nanoid() };
    dispatch(getConstructorElement(element));
    dispatch(getBun(element));
  };
  const deleteItem = (element) => {
    dispatch(deleteConstructorElement(element));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <ScBurgerConstructorWrapper>
      <div ref={dropRef}>
        <ScIngredientItem className="mb-4">
          {data.length === 0 ? (
            <div className="EmptyIngredient">
              <ConstructorElement type="top" text="Булка" />
            </div>
          ) : (
            data.map((element, index) => {
              return (
                element.type === 'bun' && (
                  <ConstructorElement
                    key={index}
                    type="top"
                    isLocked={true}
                    text={`${element.data.name} (верх)`}
                    price={element.data.price}
                    thumbnail={element.data.image_mobile}
                  />
                )
              );
            })
          )}
        </ScIngredientItem>

        <ScIngredients className="custom-scroll">
          {data.length === 0 ? (
            <ScIngredient>
              <div className="EmptyIngredient">
                <ConstructorElement text="Начинка" />
              </div>
            </ScIngredient>
          ) : (
            data
              .filter((item) => item.type !== 'bun')
              .map((item, index) => (
                <IngredientCard
                  index={index}
                  id={item.id}
                  key={item.id}
                  data={item.data}
                  moveElement={moveElement}
                  deleteItem={() => deleteItem(item)}
                />
              ))
          )}
        </ScIngredients>

        <ScIngredientItem className="mt-4">
          {data.length === 0 ? (
            <div className="EmptyIngredient">
              <ConstructorElement type="bottom" text="Булка" />
            </div>
          ) : (
            data.map((element, index) => {
              return (
                element.type === 'bun' && (
                  <ConstructorElement
                    key={index}
                    type="bottom"
                    isLocked={true}
                    text={`${element.data.name} (низ)`}
                    price={element.data.price}
                    thumbnail={element.data.image_mobile}
                  />
                )
              );
            })
          )}
        </ScIngredientItem>
      </div>

      <PriceWrapper>
        <p className="mr-2">{totalPrice}</p>
        <span className="mr-10">
          <CurrencyIcon type="primary" />
        </span>

        <Button
          onClick={handleOpen}
          htmlType="button"
          type="primary"
          size="medium"
        >
          Оформить заказ
        </Button>
      </PriceWrapper>
      {isOpen && (
        <Modal handleModalClose={() => setIsOpen(false)}>
          <OrderDetails />
        </Modal>
      )}
    </ScBurgerConstructorWrapper>
  );
};

// BurgerConstructor.propTypes = {
//   data: PropTypes.arrayOf(itemType.isRequired).isRequired,
// };

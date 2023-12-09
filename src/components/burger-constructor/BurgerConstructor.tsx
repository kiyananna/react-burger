import { useCallback, useState, useMemo, useEffect,  FC } from 'react';
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  ScBurgerConstructorWrapper,
  ScIngredientItem,
  ScIngredients,
  PriceWrapper,
  ScIngredient,
} from './BurgerConstructor.styled';
import { IngredientCard } from './ingredient-card/IngredientCard';
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
// import { getOrderRequest } from '../../services/order-detail/actions';
// import { postOrder } from '../../utils/utils';
import { nanoid } from 'nanoid';
import { TItem } from '../../utils/types'
import { sendOrder } from '../../services/order-detail/actions';


type ConstructorProps = {
  index?: number,
  element?: TItem,
  topOrBottom?: "top" | "bottom",
  extraName?: string
};

export const BurgerConstructor : FC<ConstructorProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const data: any = useSelector(
    (state: any) => state.ingredientsConstructor.constructorList,
  );
  
  const dispatch: any = useDispatch();

  const handleOpen = () => {
    setIsOpen(true);
    const orderIds = data.map((item: any) => item.data._id);
    // dispatch(getOrderRequest());
    dispatch(sendOrder(orderIds));
  };

  const moveElement = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(moveConstructorElement(dragIndex, hoverIndex));
    },
    [dispatch],
  );

  const totalPrice = useMemo(() => {
    const sum = data
      .map((item: any) => {
        if (item.data.type === 'bun') {
          return item.data.price * 2;
        }
        return item.data.price;
      })
      .reduce((acc: number, curr: any) => acc + curr, 0);

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

  const addItem = (element: any) => {
    element = { ...element, id: nanoid() };
    dispatch(getConstructorElement(element));
    dispatch(getBun(element));
  };
  const deleteItem = (element: any) => {
    dispatch(deleteConstructorElement(element));
  };

  useEffect(() => {
    // console.log(data);
  }, [data]);
  return (
    <ScBurgerConstructorWrapper>
      <div ref={dropRef}>
        <ScIngredientItem className="mb-4">
          {data.length === 0 ? (
            <div className="EmptyIngredient">
              <ConstructorElement type="top" text="Булка" price={0} thumbnail={''} />
            </div>
          ) : (
            data.map((element: any, index: number) => {
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
                <ConstructorElement text="Начинка" price={0}
                thumbnail={''}/>
              </div>
            </ScIngredient>
          ) : (
            data
              .filter((item: any) => item.type !== 'bun')
              .map((item: any, index: number) => (
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
              <ConstructorElement   price={0}
                thumbnail={''} type="bottom" text="Булка" />
            </div>
          ) : (
            data.map((element: any, index: number) => {
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


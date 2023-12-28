import { FC, useEffect } from 'react';
import { OrderCards } from './order-cards/OrderCards';
import { OrderInfo } from './order-info/OrderInfo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { orderFeedClose, orderFeedStart } from '../../services/order-feed/actions';
import { ScOrderListWrapper } from './OrderItems.styled';

export const OrderItems: FC = () => {
  const dispatch = useAppDispatch()
  const { orderFeed } = useAppSelector(state => state.feedSocket)

  useEffect(() => {
      dispatch(orderFeedStart('wss://norma.nomoreparties.space/orders/all'))
      return () => {
          dispatch(orderFeedClose('closed'))
      }
  }, [])

  return (
    <div>
      <h1 className="text text_type_main-large mb-5">
        Лента заказов
      </h1>
      { orderFeed ?
        (<ScOrderListWrapper >
          <OrderCards />
          <OrderInfo/>
      
        </ScOrderListWrapper>) 
        : 
        <></>
      }
    </div>
  )
}
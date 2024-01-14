import { FC } from 'react';
import { OrderCard } from './order-card/order-card';
import { useAppSelector } from '../../../hooks';
import { useLocation } from 'react-router-dom';
import { ScOrderCards, ScLink } from './OrderCards.styled';

export const OrderCards: FC = () => {
  const { orderFeed } = useAppSelector(state => state.feedSocket);
  const location = useLocation();

  return (
    <ScOrderCards className='custom-scroll'>
      { orderFeed?.orders.map((item, index) => { 
          return (
            <ScLink
              key={item._id}
              to={`/feed/${item._id}`}
              state={{ backgroundLocation: location, orderNumber: item.number }}>
            <OrderCard data={item} key={index} />
            </ScLink>
          )
        })
      }
    </ScOrderCards>
  )
}
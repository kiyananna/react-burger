import { FC } from 'react';
import { OrdersNumber } from './orders-number/orders-number';
import { ScWrapper } from './orders-status.styled';
import { DoneQuantity } from './done/done';
import { useAppSelector } from '../../../../hooks';

export const OrdersStatus: FC = () => {
  const { orderFeed } = useAppSelector(state => state.feedSocket)

  return (
    <div>
      <ScWrapper className='mb-15'>
        <OrdersNumber type='done' title='Готовы:' data={orderFeed?.orders} style={'#0CC'} />
        <OrdersNumber type='pending' title='В работе:' data={orderFeed?.orders} style='#FFF' />
      </ScWrapper>
      <DoneQuantity title='Выполнено за все время:' quantity={orderFeed?.total} />
      <DoneQuantity title='Выполнено за сегодня:' quantity={orderFeed?.totalToday} />
    </div>
  )
}
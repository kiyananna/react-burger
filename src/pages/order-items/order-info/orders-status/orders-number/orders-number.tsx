import { FC } from 'react';
import { TOrderFeedOptions } from '../../../../../utils/types';
import { ScList, ScItem } from './orders-number.styled';


export const OrdersNumber: FC<IOrders> = ({ title, data, type, style }) => {
  return (
    <div>
      <p className="text text_type_main-medium mb-6">
        {title}
      </p>
      <ScList style={{ color: style}}>
        {
          data && 
          data.map((order, index) => {
            if (order.status === type && index < 20 ){
              return <ScItem className='text text_type_digits-default' key={index}>{order.number}</ScItem>
            }
          })
        }
      </ScList>
    </div>
  )
}

type IOrders = {
  title: string,
  data?: TOrderFeedOptions[],
  style: string,
  type: string,
}
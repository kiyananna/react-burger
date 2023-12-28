import {
  ScDescription,
  ScTitle,
  ScBottomTitle,
} from './OrderDescription.styled';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../hooks/index';


export const OrderDetails = () => {
  const orderId = useAppSelector((state) => state.orderDetail.orderID);
  // const isLoading = useAppSelector(state => state.orderDetail.isLoading);
  
  return (
    <ScDescription>
      <ScTitle className="text text_type_digits-large mb-8">{orderId}</ScTitle>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src="../done.png" alt="Галочка подтверждения" className="mb-15" />
      <ScBottomTitle className="mb-2">Ваш заказ начали готовить</ScBottomTitle>
      <ScBottomTitle className="mb-20">
        Дождитесь готовности на орбитальной станции
      </ScBottomTitle>
    </ScDescription>
  );
};

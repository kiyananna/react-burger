import PropTypes from 'prop-types';
import {
  ScDescription,
  ScTitle,
  ScBottomTitle,
} from './order-description.styled';
import { useSelector } from 'react-redux';

export const OrderDetails = () => {
  const orderId = useSelector((state) => state.orderDetail.orderID);
  return (
    <ScDescription>
      <ScTitle className="text text_type_digits-large mb-8">{orderId}</ScTitle>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src="../done.png" alt="" className="mb-15" />
      <ScBottomTitle className="mb-2">Ваш заказ начали готовить</ScBottomTitle>
      <ScBottomTitle className="mb-20">
        Дождитесь готовности на орбитальной станции
      </ScBottomTitle>
    </ScDescription>
  );
};

OrderDetails.propTypes = {
  orderId: PropTypes.string,
};

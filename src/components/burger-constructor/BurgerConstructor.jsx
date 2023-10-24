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
} from './BurgerConstructor.styled';
import { IngredientCard } from './ingredient-card/ingredient-card';
import { itemType } from '../../utils/prop-types';

export const BurgerConstructor = ({ data }) => {
  const firstElement = data.filter((item, index) => index === 0)[0];
  const totalPrice = data
    .map((item) => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <ScBurgerConstructorWrapper>
      <ScIngredientItem className="mb-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${data[0]?.name} (верх)`}
          price={firstElement?.price}
          thumbnail={firstElement?.image_mobile}
        />
      </ScIngredientItem>

      <ScIngredients className="custom-scroll">
        {data.map((item) => (
          <IngredientCard key={item._id} data={item} />
        ))}
      </ScIngredients>

      <ScIngredientItem className="mt-4">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${data[0]?.name} (низ)`}
          price={firstElement?.price}
          thumbnail={firstElement?.image_mobile}
        />
      </ScIngredientItem>

      <PriceWrapper>
        <p className="mr-2">{totalPrice}</p>
        <span className="mr-10">
          <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </PriceWrapper>
    </ScBurgerConstructorWrapper>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(itemType.isRequired).isRequired,
};

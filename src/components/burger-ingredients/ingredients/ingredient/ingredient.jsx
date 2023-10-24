import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Card, CardImage, CardCost, CardTitle } from './ingredient.styled';

export const Ingredient = ({ data }) => {
  return (
    <>
      <Card>
        <CardImage src={data.image} alt="" />
        <CardCost>
          <CurrencyIcon type="primary" />
          {data.price}
        </CardCost>
        <CardTitle>{data.name}</CardTitle>
      </Card>
    </>
  );
};

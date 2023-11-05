import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ScIngredientItem } from './ingredient-card.styled';

export const IngredientCard = ({ data }) => {
  return (
    <>
      <ScIngredientItem>
        <div>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          text={data.name}
          price={data.price}
          thumbnail={data.image_mobile}
        />
      </ScIngredientItem>
    </>
  );
};

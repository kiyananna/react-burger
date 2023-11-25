import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IngredientDetail } from '../../components/burger-ingredients/ingredients/ingredient-detail/ingredient-detail';
import { ScWrapper } from './ingredient-page.styled';

export const IngredientPage = () => {
  const { id } = useParams();
  const ingredient = useSelector((state) => state.ingredients.ingredients).find(
    (item) => item._id === id,
  );
  console.log(ingredient);

  return (
    <ScWrapper>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      {ingredient && <IngredientDetail data={ingredient} />}
    </ScWrapper>
  );
};

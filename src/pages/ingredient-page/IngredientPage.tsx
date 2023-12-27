import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IngredientDetail } from '../../components/burger-ingredients/ingredients/ingredient-detail/ingredient-detail';
import { ScWrapper } from './IngredientPage.styled';
import { TItem } from '../../utils/types';
import { FC } from 'react';
import { useAppSelector, useAppDispatch  } from '../../hooks/index';
import { RootState } from '../../services/store';

export const IngredientPage: FC = () => {
  const { id } = useParams();
  const ingredient = useAppSelector((state: RootState ) => state.ingredients.ingredients).find(
    (item: TItem) => item._id === id,
  );
  console.log(ingredient);

  return (
    <ScWrapper>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      {ingredient && <IngredientDetail data={ingredient} />}
    </ScWrapper>
  );
};

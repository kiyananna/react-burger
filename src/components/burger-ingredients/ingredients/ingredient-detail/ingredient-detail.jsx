import { useSelector } from 'react-redux';
import { ScWrapper, ScTitle, ScList, ScItem } from './ingredient-detail.styled';

export const IngredientDetail = () => {
  const data = useSelector((state) => state.ingredientDetail.ingredientDetail);

  return (
    <ScWrapper>
      <img src={data.image_large} alt="ингредиент" />
      <ScTitle>{data.name}</ScTitle>
      <ScList>
        <ScItem>
          <p>
            <span>Калории, ккал</span>
            {data.calories}
          </p>
        </ScItem>
        <ScItem>
          <p>
            <span>Белки, г</span>
            {data.proteins}
          </p>
        </ScItem>
        <ScItem>
          <p>
            <span>Жиры, г</span>
            {data.fat}
          </p>
        </ScItem>
        <ScItem>
          <p>
            <span>Углеводы, г</span>
            {data.carbs}
          </p>
        </ScItem>
      </ScList>
    </ScWrapper>
  );
};

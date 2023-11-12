import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ScWrapper, ScTitle, ScList, ScItem } from './ingredient-detail.styled';

export const IngredientDetail = () => {
  const data = useSelector((state) => state.ingredientDetail.ingredientDetail);

  return (
    <ScWrapper>
      <img src={data.image_large} alt="" />
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

IngredientDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }).isRequired,
};

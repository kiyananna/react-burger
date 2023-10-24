import { ScTabs, ScIngredients } from './BurgerIngredients.styled';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from './ingredients/ingredients';
import PropTypes from 'prop-types';
import { itemType } from '../../utils/prop-types';

export const BurgerIngredients = ({ data }) => {
  return (
    <section>
      <ScTabs>
        <Tab>Булки</Tab>
        <Tab>Соусы</Tab>
        <Tab>Начинки</Tab>
      </ScTabs>
      <ScIngredients className="custom-scroll">
        <Ingredients data={data} title="Булки" />
        <Ingredients data={data} title="Соусы" />
        <Ingredients data={data} title="Начинки" />
      </ScIngredients>
    </section>
  );
};

Ingredients.propTypes = {
  data: PropTypes.arrayOf(itemType.isRequired).isRequired,
};

import { useState, useRef, useEffect } from 'react';
import { ScTabs, ScIngredients } from './BurgerIngredients.styled';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from './ingredients/ingredients';
import PropTypes from 'prop-types';
import { itemType } from '../../utils/prop-types';

export const BurgerIngredients = ({ data }) => {
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handleTabChange = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <ScTabs>
        <Tab onClick={() => handleTabChange(bunRef)}>Булки</Tab>
        <Tab onClick={() => handleTabChange(sauceRef)}>Соусы</Tab>
        <Tab onClick={() => handleTabChange(mainRef)}>Начинки</Tab>
      </ScTabs>
      <ScIngredients className="custom-scroll">
        <Ingredients type={'bun'} ref={bunRef} data={data} title="Булки" />
        <Ingredients type={'sauce'} ref={sauceRef} data={data} title="Соусы" />
        <Ingredients type={'main'} ref={mainRef} data={data} title="Начинки" />
      </ScIngredients>
    </section>
  );
};

// Ingredients.propTypes = {
//   data: PropTypes.arrayOf(itemType.isRequired).isRequired,
// };

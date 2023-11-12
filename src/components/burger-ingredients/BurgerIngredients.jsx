import { useState, useRef, useEffect } from 'react';
import { ScTabs, ScIngredients } from './BurgerIngredients.styled';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from './ingredients/ingredients';
import PropTypes from 'prop-types';
import { itemType } from '../../utils/prop-types';

export const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handleTabChange = (ref, cur) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setCurrent(cur);
  };

  return (
    <section>
      <ScTabs>
        <Tab
          active={current === 'bun'}
          onClick={() => handleTabChange(bunRef, 'bun')}
        >
          Булки
        </Tab>
        <Tab
          active={current === 'sauce'}
          onClick={() => handleTabChange(sauceRef, 'sauce')}
        >
          Соусы
        </Tab>
        <Tab
          active={current === 'main'}
          onClick={() => handleTabChange(mainRef, 'main')}
        >
          Начинки
        </Tab>
      </ScTabs>
      <ScIngredients className="custom-scroll">
        <Ingredients type={'bun'} ref={bunRef} title="Булки" />
        <Ingredients type={'sauce'} ref={sauceRef} title="Соусы" />
        <Ingredients type={'main'} ref={mainRef} title="Начинки" />
      </ScIngredients>
    </section>
  );
};

// Ingredients.propTypes = {
//   data: PropTypes.arrayOf(itemType.isRequired).isRequired,
// };

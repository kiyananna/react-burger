// import styles from './burger-constructor.module.css';
import { BurgerIngredients } from '../../components/burger-ingredients/BurgerIngredients';
import { BurgerConstructor } from '../../components/burger-constructor/BurgerConstructor';

export const BurgerConstructorPage = () => {
  return (
    <>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className="constructor-wrapper">
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  );
};

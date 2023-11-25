import { AppHeader } from './components/app-header/AppHeader';
import { ScWrapper, ScContainer } from './App.styled';
import React, { useEffect } from 'react';
import { BurgerIngredients } from './components/burger-ingredients/BurgerIngredients';
import { BurgerConstructor } from './components/burger-constructor/BurgerConstructor';
import { useDispatch } from 'react-redux';
import { getIngredients } from './services/ingredients/actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <AppHeader />
        <ScWrapper>
          <h1 className="mb-5">Соберите бургер</h1>
          <ScContainer>
            <BurgerIngredients />
            <BurgerConstructor />
          </ScContainer>
        </ScWrapper>
      </div>
    </DndProvider>
  );
}

export default App;

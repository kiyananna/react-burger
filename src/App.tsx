import { AppHeader } from './components/app-header/AppHeader'
import {ScWrapper, ScContainer} from './App.styled';
import React, { useState, useEffect } from 'react';
import { BurgerIngredients } from './components/burger-ingredients/BurgerIngredients';
import { BurgerConstructor } from './components/burger-constructor/BurgerConstructor';




function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setIngredients(data.data);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
   <div>
      <AppHeader/>
      <ScWrapper>
      <h1 className='mb-5'>Соберите бургер</h1>
      <ScContainer>
          <BurgerIngredients data={ingredients}/>
          <BurgerConstructor data={ingredients} />
      </ScContainer>
      </ScWrapper>
    </div>
  );
}

export default App;



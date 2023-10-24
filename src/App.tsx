import { AppHeader } from './components/app-header/AppHeader'
import {ScWrapper, ScContainer} from './App.styled';
import { BurgerIngredients } from './components/burger-ingredients/BurgerIngredients';
import { BurgerConstructor } from './components/burger-constructor/BurgerConstructor';
import { data } from './utils/burger-api';

function App() {
  return (
   <div>
      <AppHeader/>
      <ScWrapper>
      <h1 className='mb-5'>Соберите бургер</h1>
      <ScContainer>
          <BurgerIngredients data={data}/>
          <BurgerConstructor data={data} />
      </ScContainer>
      </ScWrapper>
    </div>
  );
}

export default App;



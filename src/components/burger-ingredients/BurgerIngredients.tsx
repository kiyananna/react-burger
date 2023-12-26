import { FC,useState, useRef, useEffect } from 'react';
import { ScTabs, ScIngredients } from './BurgerIngredients.styled';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from './ingredients/ingredients';


export const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState<string>('bun');
  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    menuRef?.current?.addEventListener('scroll', () => {
      if(!menuRef?.current?.scrollTop) return;

      if (menuRef.current.scrollTop < 250) {
        setCurrent('bun');
      }
      if (menuRef.current.scrollTop > 250 && menuRef.current.scrollTop < 800) {
        setCurrent('sauce');
      }
      if (menuRef.current.scrollTop > 800) {
        setCurrent('main');
      }
    });
  }, []);

  const handleTabChange = (ref: any, cur: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setCurrent(cur);
  };

  return (
    <section>
      <ScTabs>
        <Tab
          value='bun'
          active={current === 'bun'}
          onClick={() => handleTabChange(bunRef, 'bun')}
        >
          Булки
        </Tab>
        <Tab
          value='sauce'
          active={current === 'sauce'}
          onClick={() => handleTabChange(sauceRef, 'sauce')}
        >
          Соусы
        </Tab>
        <Tab
          value='main'
          active={current === 'main'}
          onClick={() => handleTabChange(mainRef, 'main')}
        >
          Начинки
        </Tab>
      </ScTabs>
      <ScIngredients className="custom-scroll" ref={menuRef}>
        <Ingredients type={'bun'} ref={bunRef} title="Булки" />
        <Ingredients type={'sauce'} ref={sauceRef} title="Соусы" />
        <Ingredients type={'main'} ref={mainRef} title="Начинки" />
      </ScIngredients>
    </section>
  );
};



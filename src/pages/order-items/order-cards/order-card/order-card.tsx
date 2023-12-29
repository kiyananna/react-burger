import { FC } from 'react';
import { getIngredientImages } from '../../../../utils/utils';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { TItem, TOrderFeedOptions } from '../../../../utils/types';
import { useAppSelector } from '../../../../hooks';
import { ScOrderCard, ScOrderCardHeader, ScOrderCardIngredients, ScCardIngredientsIcons, ScIconWrapper, ScIconWrapperCount, ScCardIngredientIcon, ScOrderCardPrice } from './order-card.styled';

export const OrderCard: FC<{ data: TOrderFeedOptions}> = ({ data }) => {
  let count = 5;
  const orderDate = new Date(data.createdAt);
  const { ingredients } = useAppSelector(state => state.ingredients);
  let totalPrice: number = 0;
  let orderIngredients: TItem[] = [];
  const images = getIngredientImages(ingredients, data.ingredients);

  if (ingredients.length) {
    data.ingredients.forEach((ingredient: string) => {
      ingredients.forEach((element : any) => {
        if (element._id === ingredient) {
          if (element.type === 'bun') {
            totalPrice = totalPrice + (element.price * 2)
            orderIngredients = [...orderIngredients, element]
          } else {
            totalPrice = totalPrice + element.price
            orderIngredients = [...orderIngredients, element]
          }
        }
      })
    })
  }

  return (
    <ScOrderCard className='p-6 mb-4'>
    <ScOrderCardHeader className='mb-6'>
      <p className="text text_type_digits-default">{data.number}</p>
      <p className="text text_type_main-default text_color_inactive">
        <FormattedDate date={orderDate} />
      </p>
    </ScOrderCardHeader>
    <h2 className='text text_type_main-medium mb-6'>
      { data.name }
    </h2>
    <ScOrderCardIngredients>
      <ScCardIngredientsIcons>
        { 
          images.map((item, index) => {
          if (index >= 5) return;
            return (
              <ScIconWrapper
                  key={item._id}
                  data-contet={data.ingredients.length}
                  style={{ zIndex: count-- }}
                >
                <ScCardIngredientIcon
                  src={item.image_mobile} alt={item.name} 
                  width={64}
                  height={64}
                />
              </ScIconWrapper>
            )
          })
        }
        {
          images.length > 6 && (
          <ScIconWrapper 
            key={images[6]._id}
            data-contet={data.ingredients.length}
          >
            <ScIconWrapperCount className='text text_type_digits-default'>+{images.length - 6}</ScIconWrapperCount>
            <ScCardIngredientIcon
              className='disabled' 
              src={images[6].image_mobile} alt={images[6].name} 
              width={64}
              height={64}
              style={{ zIndex: 1 }}
            />
          </ScIconWrapper >
          )
        }
      </ScCardIngredientsIcons>
      <ScOrderCardPrice className='text text_type_digits-default'>
        { totalPrice }
  
        <CurrencyIcon type="primary" />
      </ScOrderCardPrice>
    </ScOrderCardIngredients>
  </ScOrderCard>
  )
}
import { Ingredient } from './ingredient/ingredient';
import { ScItems } from './ingredients.styled';
import { forwardRef, FC , ForwardedRef} from 'react';
import { TItem } from '../../../utils/types';
import { useAppSelector  } from '../../../hooks/index';

interface IProps {
  title: string,
  type: string,
  ref: ForwardedRef<HTMLDivElement>
}



export const Ingredients: FC<IProps> = forwardRef(({ title, type }, ref) => {
  const data = useAppSelector((state) => state.ingredients.ingredients);
  
  return (
    <>
      <h2 ref={ref} className="mb-6">
        {title}
      </h2>
      <ScItems>
        {data
          .filter((item: TItem) => item.type === type)
          .map((filteredItem: TItem) => (
            <Ingredient key={filteredItem._id} data={filteredItem} />
          ))}
      </ScItems>
    </>
  );
});

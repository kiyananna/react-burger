import { Ingredient } from './ingredient/ingredient';
import { ScItems } from './ingredients.styled';
import { useSelector } from 'react-redux';
import { forwardRef } from 'react';

export const Ingredients = forwardRef(({ title, type }, ref) => {
  const data = useSelector((state) => state.ingredients.ingredients);
  return (
    <>
      <h2 ref={ref} className="mb-6">
        {title}
      </h2>
      <ScItems>
        {data
          .filter((item) => item.type === type)
          .map((filteredItem) => (
            <Ingredient key={filteredItem._id} data={filteredItem} />
          ))}
      </ScItems>
    </>
  );
});

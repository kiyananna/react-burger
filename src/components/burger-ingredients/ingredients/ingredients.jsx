import { Ingredient } from './ingredient/ingredient';
import { ScItems } from './ingredients.styled';

export const Ingredients = ({ data, title }) => {
  return (
    <>
      <h2 className="mb-6">{title}</h2>
      <ScItems>
        {data.map((filteredItem) => (
          <Ingredient key={filteredItem._id} data={filteredItem} />
        ))}
      </ScItems>
    </>
  );
};

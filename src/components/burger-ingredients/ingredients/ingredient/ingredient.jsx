import { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Card, CardImage, CardCost, CardTitle } from './ingredient.styled';
import { IngredientDetail } from '../ingredient-detail/ingredient-detail';
import { Modal } from '../../../modal/modal';

export const Ingredient = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Card onClick={handleModalOpen}>
        <CardImage src={data.image} alt="" />
        <CardCost>
          <CurrencyIcon type="primary" />
          {data.price}
        </CardCost>
        <CardTitle>{data.name}</CardTitle>
      </Card>
      {isOpen && (
        <Modal
          handleModalClose={handleModalClose}
          modalTitle="Детали Ингридиента"
        >
          <IngredientDetail data={data} />
        </Modal>
      )}
    </>
  );
};

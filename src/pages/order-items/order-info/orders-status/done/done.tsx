import { FC } from 'react';
import { ScNumber, ScWrapper } from './done.styled';


export const DoneQuantity: FC<IDone> = ({title, quantity}) => {
  return (
    <ScWrapper>
      <p className="text text_type_main-medium">
        {title}
      </p>
      <ScNumber className='text text_type_digits-large'>
        {quantity}
      </ScNumber>
    </ScWrapper>
  )
}


type IDone = {
  title?: string,
  quantity?: number,
}

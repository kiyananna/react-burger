/* eslint-disable no-loop-func */
import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScContainer, ScIngredientsWrapper, ScIngredient, ScDescription, ScPrice, ScPicture, ScFooter, ScNumber, ScDone, ScIcon } from "./OrderInfo.styled";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { TItem, TOrderFeedOptions,  } from "../../utils/types";
import { orderFeedClose, orderFeedStart } from "../../services/order-feed/actions";
import uuid from 'react-uuid';
import { getCookie } from "../../utils/utils";
import { orderHistoryClose, orderHistoryStart } from "../../services/order-history/actions";

export const OrderInfo: FC = () => {
  const { ingredients } = useAppSelector(state => state.ingredients)
  const { orderFeed } = useAppSelector(state => state.feedSocket)
  const { orderHistory } = useAppSelector(state => state.historySocket)
  const dispatch = useAppDispatch()
  const { feedId, orderId } = useParams()
  const navigate = useNavigate()
  let totalPrice: number = 0
  let data: TOrderFeedOptions = null!
  let orderIngredients: TItem[] = []
  let orderDate: Date | null = null
  let dataReduce: { [key: string]: number } = {}


  React.useEffect(() => {
    if (!orderFeed && feedId) {
      console.log('connect')
      dispatch(orderFeedStart('wss://norma.nomoreparties.space/orders/all'))
      return () => {
        dispatch(orderFeedClose('closed'))
      }
    }
    if (!orderHistory && orderId) {
      dispatch(orderHistoryStart(`wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')}`))
      return () => {
        dispatch(orderHistoryClose('closed'))
      }
    }
  }, [])

  if (orderFeed && orderFeed.orders.length) {
    orderFeed.orders.forEach((order, index) => {
      if (order._id === feedId || order._id === orderId) {
        data = order
        orderDate = new Date(data.createdAt)
        dataReduce = data.ingredients.reduce((acc: { [key: string]: number }, el) => {
          acc[el] = (acc[el] || 0) + 1
          return acc
        }, {})
      } if (index + 1 === orderFeed.orders.length && data === null) {
        return navigate("/*", { replace: true })
      }
    })
  }

  if (orderHistory && orderHistory.orders.length) {
    orderHistory.orders.forEach((order, index) => {
      if (order._id === feedId || order._id === orderId) {
        data = order
        orderDate = new Date(data.createdAt)
        dataReduce = data.ingredients.reduce((acc: { [key: string]: number }, el) => {
          acc[el] = (acc[el] || 0) + 1
          return acc
        }, {})
      } if (index + 1 === orderHistory.orders.length && data === null) {
        return navigate("/*", { replace: true })
      }
    })
  }

  if (dataReduce && ingredients && ingredients.length) {
    for (let key in dataReduce) {
      ingredients.forEach((element : TItem) => {
        if (element._id === key) {
          if (element.type === 'bun') {
            totalPrice = totalPrice + (element.price * 2)
            orderIngredients = [...orderIngredients, element]
          } else {
            totalPrice = totalPrice + element.price
            element.__v = dataReduce[key]
            orderIngredients = [...orderIngredients, element]
          }
        }
      })
    }
  }

  return (
    data !== null ?
      <ScContainer>
        <ScNumber>
          <p className="text text_type_digits-default mt-6">#{data.number}</p>
        </ScNumber>
        <ScDescription>
          <p className="text text_type_main-medium mt-10">{data.name}</p>
          {data.status === "created" &&
            <p className="text text_type_main-default mt-2">
              Создан
            </p>
          }
          {data.status === "pending" &&
            <p className="text text_type_main-default mt-2">
              Готовится
            </p>
          }
          {data.status === 'done' &&
            <ScDone>
              <p className="text text_type_main-default mt-2">
                Выполнен
              </p>
            </ScDone>
          }
          <p className="text text_type_main-medium mt-15 mb-6">
            Состав:
          </p>
        </ScDescription>
        <ScIngredientsWrapper className='custom-scroll'>
  {orderIngredients.map((ingredient) => {
    const ingredientType = ingredient.type === 'bun' ? '2 x ' : `${ingredient.__v} x `;
    
    return (
      <ScIngredient key={ingredient._id}>
        <ScPicture>
          <ScIcon width={64} height={64} src={ingredient.image_mobile} alt={ingredient.name} />
          <p className="text text_type_main-default ml-4">{ingredient.name}</p>
        </ScPicture>
        <ScPrice>
          <p className="text text_type_digits-default mr-2">{ingredientType}{ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </ScPrice>
      </ScIngredient>
            );
         })}
          </ScIngredientsWrapper>
        <ScFooter>
          {orderDate &&
            <p className="text text_type_main-default text_color_inactive mt-10 mb-10">
              <FormattedDate date={orderDate} />
            </p>}
          <ScPrice>
            <p className="text text_type_digits-default mr-2">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </ScPrice>
        </ScFooter>
      </ScContainer>
      :
      <p className="text text_type_main-large mt-10 mb-10">
        LOADING...
      </p>
  )
}
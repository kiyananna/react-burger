export type TItem = {
  _id: string,
  name: string,
  price: number,
  image: string,
  image_large: string,
  image_mobile: string,
  type: string,
  calories: number,
  carbs: number,
  carbohydrates: number,
  fat: number,
  proteins: number,
  __v: number,
  uid: string,
  index: number,
  id?: string
}

export type TItemIngredient = {
  readonly _id: string,
  readonly name: string,
  readonly price: number,
  readonly image: string,
  readonly image_large: string,
  readonly image_mobile: string,
  readonly type: string,
  readonly calories: number,
  readonly carbohydrates: number,
  readonly fat: number,
  readonly proteins: number,
  readonly __v: number,
}

export type TItemState = {
  data: TItem ,
  id: string,
  type: string,
}

export type TOrderFeed = {
  success: boolean,
  orders: TOrderFeedOptions[],
  total: number,
  totalToday: number
}

export type TOrderFeedOptions = {
  _id: string,
  ingredients: string[],
  name: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string
}





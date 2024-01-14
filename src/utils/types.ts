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

export type TUserState = {
  userName: string,
  userEmail: string,
  userInfoRequest: boolean,
  userRefreshRequest: boolean,
  userInfoFailed: boolean,
  authChecked: boolean
}

export type TUserLogin = {
  success: boolean,
  accessToken: string,
  refreshToken: string,
  user: {
      email: string,
      name: string
  }
}

export type TForgotPass = {
  success: boolean,
  message: string
}

export type TOptions = {
  createdAt: string,
  ingredients: TItem[],
  name: string,
  number: number,
  owner: {
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string
  }
  price: number,
  status: string
  updatedAt: string
  _id: string
}

export type TOrderResponse = {
  name: string,
  order?: TOptions,
  success: boolean,
  orderID?: string,
}

export type TUserInfo = {
  success: boolean
  user: {
    name: string,
    email: string
  }
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





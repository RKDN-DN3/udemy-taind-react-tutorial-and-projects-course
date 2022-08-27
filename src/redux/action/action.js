export const DECREASE = 'DECREASE'
export const INCREASE = 'INCREASE'
export const REMOVE = 'REMOVE'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_TOTAL = 'GET_TOTAL'
export const GET_AMOUNT = 'GET_AMOUNT'

export const increaseNumber = (state) => {
  return {
    type: INCREASE,
    payload: state,
  }
}

export const decreaseNumber = (state) => {
  return {
    type: DECREASE,
    payload: state,
  }
}
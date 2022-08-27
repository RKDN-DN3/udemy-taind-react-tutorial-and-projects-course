import * as ACTION from '../action/action'

const cartReducer = (state, action) => {
  switch (action) {
    case ACTION.DECREASE:
      return { ...state, count: state.count - 1 }

    case ACTION.INCREASE:
      return { ...state, count: state.count + 1 }
      
    case ACTION.CLEAR_CART:
      break;

    case ACTION.GET_AMOUNT:
      break;

    case ACTION.GET_TOTAL:
      break;

    case ACTION.REMOVE:
      break;
    default:
      break;
  }
}
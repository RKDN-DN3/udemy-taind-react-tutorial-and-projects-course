import * as ACTION from '../action/action'

const initialStore = {
  count: 0,
  total: 0,
  amount: 0,
}

const cartReducer = (state = initialStore, action) => {
  console.log('state', state)
  switch (action.type) {
    case ACTION.DECREASE:
      return { ...state, count: state.count - 1 }

    case ACTION.INCREASE:
      console.log('action', action)

      return { ...state, count: state.count + 1 }

    // case ACTION.CLEAR_CART:
    //   return;

    // case ACTION.GET_AMOUNT:
    //   return;

    // case ACTION.GET_TOTAL:
    //   return;

    // case ACTION.REMOVE:
    //   return;
    default:
      return state;
  }
}
export default cartReducer;
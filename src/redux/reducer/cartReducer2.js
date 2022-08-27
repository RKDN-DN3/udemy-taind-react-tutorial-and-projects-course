import * as ACTION from '../action/cartAction'

const initState = {
  count: 0
}
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      
      return {...state, count: state.count + 1};
  
    default:
      return state;
  }
}

export default cartReducer
import React from "react";
// import * as Action from '../../redux/action/action'
import { increaseNumber } from '../../redux/action/action'
import { useSelector, useDispatch } from 'react-redux';
const ReduxSample = () => {
  const count = useSelector((state) => state.cartReducer.count)
  const dispatch = useDispatch()
  console.log(count)
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increaseNumber())}>increase</button>
    </React.Fragment>
  )
}
export default ReduxSample


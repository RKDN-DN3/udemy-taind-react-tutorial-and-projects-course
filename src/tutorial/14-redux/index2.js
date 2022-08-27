import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../redux/action/cartAction'
const ReduxSample = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.cartReducer.count)
  console.log('count', count)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(action.setIncrease())}>increase</button>
    </>
  )
}

export default ReduxSample
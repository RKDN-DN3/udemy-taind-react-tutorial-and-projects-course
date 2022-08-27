import React from 'react'
import reduxSample from  '../src/tutorial/14-redux'
import { createStore } from 'redux'
import { Provide } from 'react-redux'
function App() {
  const initialStore = {
    count: 0
  }
  const reducer = (state, action) => {
    console.log({state, action})
    return state
  }
  const store = createStore(reducer, initialStore)
  console.log(11, store.getState())
  return (
    <div className='container'>
      {/* <reduxSample /> */}
    </div>
  )
}

export default App

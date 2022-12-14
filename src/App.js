import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/reducer/reducerTK'
import ReduxSample from './tutorial/15-rtk-create-async-thunk/index'

// import { createStore } from 'redux' old redux

function App() {
  return (
    <Provider store={store}>
    <div className='container'>
      <ReduxSample />
    </div>
    </Provider>
  )

  // old redux
  // const store = createStore(rootReducer)
  // return (
  //   <Provider store={store}>
  //   <div className='container'>
  //     <ReduxSample />
  //   </div>
  //   </Provider>
  // )
}

export default App

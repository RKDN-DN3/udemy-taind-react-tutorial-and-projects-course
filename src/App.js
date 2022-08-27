import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer/reducer2'
import ReduxSample from './tutorial/14-redux/index2'

function App() {
  const store = createStore(rootReducer)
  return (
    <Provider store={store}>
    <div className='container'>
      <ReduxSample />
    </div>
    </Provider>
  )
}

export default App

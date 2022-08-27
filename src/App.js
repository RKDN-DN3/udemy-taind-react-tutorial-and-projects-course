import React from 'react'
import ReduxSample from  '../src/tutorial/14-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer/reducer'

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

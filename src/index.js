import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/store'
import getCovidLocStats from './actions/index'
const store = configureStore();
store.dispatch(getCovidLocStats());
render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
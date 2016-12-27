import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import Todo from './containers/Todo'
import todoApp from './reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import validator from 'validator';
import './extend';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const logger = createLogger()
const store = createStore(todoApp, applyMiddleware(thunk, promise, logger))


// Validation


// End Validation

render(
    <MuiThemeProvider>
      <Provider store={store}>
        <Todo />
      </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
)

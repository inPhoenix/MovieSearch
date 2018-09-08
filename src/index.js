import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/App.scss'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import { rootEpic } from './epics'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'

const epicMiddleware = createEpicMiddleware()

// https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(epicMiddleware, thunk))
)
epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

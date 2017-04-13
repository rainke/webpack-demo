import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise';
import myApp from './reducer';
const middleware = (store) => (next) => (action) => {
  return next(action);
}
const storeConfigrue = () => {
  const persistState = undefined;
  const composeEnhancers = __DEV__ ?
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) :
    compose;
  const middlewares = [thunk, promise, createLogger(), middleware];

  return composeEnhancers(applyMiddleware(...middlewares))(createStore)(myApp, persistState);
}

export default storeConfigrue;
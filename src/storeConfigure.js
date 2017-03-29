import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import myApp from './reducer';



const storeConfigrue = () => {
  const persistState = undefined;
  const composeEnhancers = __DEV__ ?
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) :
    compose;
  const middlewares = [thunk];

  return composeEnhancers(applyMiddleware(...middlewares))(createStore)(myApp, persistState);
}

export default storeConfigrue;
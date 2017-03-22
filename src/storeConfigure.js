import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import myApp from './reducer';



const storeConfigrue = () => {
  const persistState = undefined;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk];

  return composeEnhancers(applyMiddleware(...middlewares))(createStore)(myApp, persistState);
}

export default storeConfigrue;
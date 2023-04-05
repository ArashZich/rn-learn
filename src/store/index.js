import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createSTORE,
  //   createStore,
} from 'redux';
import countReducer from './sharedReducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({count: countReducer});

const store = createSTORE(rootReducer, {}, applyMiddleware(thunk));
export {store};

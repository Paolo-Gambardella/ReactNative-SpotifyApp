import { combineReducers } from 'redux';
import reducer from './reducer';
import navigation from './navigation';
import loading from './loading';

const appReducer = combineReducers({
  nav: navigation,
  reducer,
  loading,
});

export default appReducer;

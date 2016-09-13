import { combineReducers } from 'redux';
import TodosReducer from './todos_reducer';

const RootReducer = combineReducers({
  TodosReducer
});

export default RootReducer;

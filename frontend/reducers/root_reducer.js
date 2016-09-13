import { combineReducers } from 'redux';
import TodosReducer from './todos_reducer';
import { allTodos } from './selector'

const RootReducer = combineReducers({
  TodosReducer,
  allTodos,
});

export default RootReducer;

import { TodosConstants } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_util';
import { receiveTodos } from '../actions/todo_actions';

const todoMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case "REQUEST_TODOS":
      const success = data => dispatch(receiveTodos(data));
      fetchTodos(success);
      break;
    default:
      next(action);
  }
}

export default todoMiddleware;

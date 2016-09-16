import { TodosConstants } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_util';
import { receiveTodos } from '../actions/todo_actions';
import { createTodo } from '../util/todo_api_util';
import { receiveTodo } from '../actions/todo_actions';
import { updateTodo } from '../util/todo_api_util';

const todoMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case TodosConstants.REQUEST_TODOS:
      let success = data => dispatch(receiveTodos(data));
      fetchTodos(success);
      break;
    case TodosConstants.CREATE_TODO:
      success = data => dispatch(receiveTodo(data));
      createTodo(action.todo, success);
      break;
    case TodosConstants.UPDATE_TODO:
      success = data => dispatch(receiveTodo(data));
      updateTodo(action.todo, success);
      break;
    case TodosConstants.DESTROY_TODO:
      success = data => dispatch(removeTodo(data));
      destroyTodo(action.todo, success);
      break;
    default:
      return next(action);
  }
}

export default todoMiddleware;

import { applyMiddleware } from 'redux';
import todoMiddleware from './todo_middleware';
import stepMiddleware from './step_middleware';

const masterMiddleware = applyMiddleware(
  todoMiddleware,
  stepMiddleware
);

export default masterMiddleware;

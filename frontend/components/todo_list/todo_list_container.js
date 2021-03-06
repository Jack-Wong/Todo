import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selector';
import { requestTodos } from '../../actions/todo_actions';
import { createTodo } from '../../actions/todo_actions'
import { toggleTodo } from '../../actions/todo_actions';
import { destroyTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

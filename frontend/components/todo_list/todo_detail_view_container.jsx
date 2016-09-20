import { connect } from 'react-redux'
import TodoDetailView from './todo_detail_view';
import { destroyTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/steps_actions';

const mapDispatchToProps = (dispatch) => ({
  destroyTodo: todo => dispatch(destroyTodo(todo)),
  requestSteps: todo_id => dispatch(requestSteps(todo_id))
});

const TodoDetailViewContainer = connect(
  null,
  mapDispatchToProps
)(TodoDetailView);

export default TodoDetailViewContainer;

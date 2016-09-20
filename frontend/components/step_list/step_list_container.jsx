import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsById } from '../../reducers/selector';
import { createStep } from '../../actions/steps_actions';
import { requestSteps } from '../../actions/steps_actions';

const mapStateToProps = (state, ownProps) => {
  const steps = stepsById(state, ownProps.todo_id) || [];
  return {
    steps,
    todo_id: ownProps.todo_id
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSteps: () => dispatch(requestSteps()),
  createStep: step => dispatch(createStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);

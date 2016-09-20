import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { destroyStep } from '../../actions/steps_actions';
import { toggleStep } from '../../actions/steps_actions';


const mapDispatchToProps = (dispatch) => ({
  destroyStep: (step) => dispatch(destroyStep(step)),
  toggleStep: (step) => dispatch(toggleStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);

import { StepsConstants } from '../actions/steps_actions';
import { fetchSteps } from '../util/step_api_util';
import { receiveSteps } from '../actions/steps_actions';
import { createStep } from '../util/step_api_util';
import { receiveStep } from '../actions/steps_actions';
import { updateStep } from '../util/step_api_util';

const stepMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case StepsConstants.REQUEST_STEPS:
      let success = data => dispatch(receiveSteps(data));

      fetchSteps(action.todo_id, success);
      break;
    case StepsConstants.CREATE_STEP:
      success = data => dispatch(receiveStep(data));
      createStep(action.todo_id, action.step, success);
      break;
    case StepsConstants.UPDATE_STEP:
      success = data => dispatch(receiveStep(data));
      updateStep(action.step, success);
      break;
    case StepsConstants.DESTROY_STEP:
      success = data => dispatch(removeStep(data));
      destroyStep(action.todo_id, action.step, success);
      break;
    default:
      return next(action);
  }
}

export default stepMiddleware;

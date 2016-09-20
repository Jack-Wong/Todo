import { StepsConstants } from '../actions/steps_actions';

const StepsReducer = (state={}, action) => {
  switch(action.type){
    case "RECEIVE_STEPS":
      let newState = {};
      action.steps.forEach(step => {
        newState[step.to_do_id] = newState[step.to_do_id] || {};
        newState[step.to_do_id][step.id] = step;
      });
      return Object.assign({}, state, newState);
    case "RECEIVE_STEP":
      newState = Object.assign({}, state);
      newState[action.step.to_do_id] = newState[action.step.to_do_id] || {};
      newState[action.step.to_do_id][action.step.id] = action.step;
      return newState;
    case "REMOVE_STEP":
      newstate = Object.assign({}, state);
      newState[action.step.to_do_id] = newState[action.step.to_do_id] || {};
      delete newState[action.step.todo][action.step.id];
      return newState;
    default:
      return state
  }
};

export default StepsReducer;

export const StepsConstants = {
  REQUEST_STEPS: "REQUEST_STEPS",
  RECEIVE_STEPS: "RECEIVE_STEPS",
  CREATE_STEP: "CREATE_STEP",
  RECEIVE_STEP: "RECEIVE_STEP",
  UPDATE_STEP: "UPDATE_STEP",
  DESTROY_STEP: "DESTROY_STEP",
  REMOVE_STEP: "REMOVE_STEP"
}

export const requestSteps = (todo_id) => ({
  type: StepsConstants.REQUEST_STEPS,
  todo_id
});

export const receiveSteps= (steps) => ({
  type: StepsConstants.RECEIVE_STEPS,
  steps
});

export const createStep = (step) => ({
  type: StepsConstants.CREATE_STEP,
  step,
  todo_id: step.todo_id
});

export const receiveStep = (step) => ({
  type: StepsConstants.RECEIVE_STEP,
  step
});

export const toggleStep = (step) => ({
  type: StepsConstants.UPDATE_STEP,
  step: Object.assign({}, step, {done: !step.done})
});

export const destroyStep = (step) => ({
  type: StepsConstants.DESTROY_STEP,
  step,
  todo_id: step.todo_id
});

export const removeStep = (step) => ({
  type: StepsConstants.REMOVE_STEP,
  step
});

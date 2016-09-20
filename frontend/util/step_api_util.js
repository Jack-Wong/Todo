export const fetchSteps = (todo_id, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos/' + todo_id + '/steps',
    success
  });
};

export const createStep = (todo_id, step, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos/' + todo_id + '/steps',
    data: {step},
    success
   });
};

export const updateStep = (step, success) => {
  $.ajax({
    method: 'PATCH',
    url: 'api/steps/' + step.id,
    data: {step},
    success
  });
};

export const destroyStep = (step, success) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/steps/' + step.id,
    success
  });
};

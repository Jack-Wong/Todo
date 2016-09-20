export const allTodos = (state) => {
  var array = [];
  array = (Object.keys(state.todos).map(key => state.todos[key]));
  return array;
};

export const stepsById = (state, todo_id) => {
  return state.steps[todo_id] ? Object.keys(state.steps[todo_id]).map(key => state.steps[todo_id][key]) : [];
}

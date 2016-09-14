export const allTodos = (state) => {
  var array = [];
  array = (Object.keys(state.todos).map(key => state.todos[key]));
  return array;
};

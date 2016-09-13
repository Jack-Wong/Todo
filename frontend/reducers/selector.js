export const allTodos = (state) => {
  var array = [];
  array.push(Object.keys(state.todos).map(key => state.todos[key]));
  return array;
};

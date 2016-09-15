export const fetchTodos = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success
  });
};

export const createTodo = (todo, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: {todo},
    success
   });
};

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

export const updateTodo = (todo, success) => {
  $.ajax({
    method: 'PATCH',
    url: 'api/todos/${todo.id}',
    data: {todo},
    success
  });
};

export const destroyTodo = (todo, success) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/todos/${todo.id}',
    success
  });
};

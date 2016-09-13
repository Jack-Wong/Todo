export const fetchTodos = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success
  });
};

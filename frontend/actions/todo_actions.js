export const TodosConstants = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS"
};

export const requestTodos = () => ({
  type: TodosConstants.REQUEST_TODOS
});

export const receiveTodos = (todos) => ({
  type: TodosConstants.RECEIVE_TODOS,
  todos
});

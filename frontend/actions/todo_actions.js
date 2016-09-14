export const TodosConstants = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO"
};

export const requestTodos = () => ({
  type: TodosConstants.REQUEST_TODOS
});

export const receiveTodos = (todos) => ({
  type: TodosConstants.RECEIVE_TODOS,
  todos
});

export const createTodo = () => ({
  type: TodosConstants.CREATE_TODO
})

export const receiveTodo = (todo) => ({
  type: TodosConstants.RECEIVE_TODO,
  todo
})

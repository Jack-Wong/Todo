export const TodosConstants = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DESTROY_TODO: "DESTROY_TODO",
  REMOVE_TODO: "REMOVE_TODO",
};

export const requestTodos = () => ({
  type: TodosConstants.REQUEST_TODOS
});

export const receiveTodos = (todos) => ({
  type: TodosConstants.RECEIVE_TODOS,
  todos
});

export const createTodo = (todo) => ({
  type: TodosConstants.CREATE_TODO,
  todo
});

export const receiveTodo = (todo) => ({
  type: TodosConstants.RECEIVE_TODO,
  todo
});

export const toggleTodo = (todo) => ({
  type: TodosConstants.UPDATE_TODO,
  todo: Object.assign({}, todo, {done: !todo.done})
});

export const destroyTodo = (todo) => ({
  type: TodosConstants.DESTROY_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: TodosConstants.REMOVE_TODO,
  todo
});

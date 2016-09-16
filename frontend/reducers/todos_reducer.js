const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case "RECEIVE_TODOS":
      let newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    case "RECEIVE_TODO":
      newState = {[action.todo.id]: action.todo};
      return Object.assign({}, state, newState)
    case "REMOVE_TODO":
      if (idx !== -1){
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
    default:
      return state;
  }
}

export default TodosReducer;

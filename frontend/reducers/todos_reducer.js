const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case "RECEIVE_TODOS":
      return action.todos;
    case "RECEIVE_TODO":
      return [
        ...state,
        action.todo
      ];
    case "REMOVE_TODO":
      const idx = state.indexOf(action.todo)
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

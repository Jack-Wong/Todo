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
    default:
      return state;
  }
}

export default TodosReducer;

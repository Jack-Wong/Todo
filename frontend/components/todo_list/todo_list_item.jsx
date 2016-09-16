import React from 'react';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    };
  }

  handleClick() {
    return (event) => {
      event.preventDefault();
      this.props.toggleTodo(this.props.todo);
    };
  }

  render() {
    return (
      <li>
      {this.props.todo.title}
      <button onClick={this.handleClick()}>{ this.state.done ? "Undo" : "Done"}</button>
      </li>
    )
  }
}

export default TodoListItem;

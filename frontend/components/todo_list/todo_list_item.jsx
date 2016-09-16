import React from 'react';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      detail: false
    };
    this.toggleDetail = this.toggleDetail.bind(this)
  }

  handleClick() {
    return (event) => {
      event.preventDefault();
      this.props.toggleTodo(this.props.todo);
    };
  }

  toggleDetail(event){
    event.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render() {
    return (
      <li>
      <a onClick={this.toggleDetail}>{this.props.todo.title}</a>
      <button onClick={this.handleClick()}>{ this.props.todo.done ? "Undo" : "Done"}</button>
      </li>
    )
  }
}

export default TodoListItem;

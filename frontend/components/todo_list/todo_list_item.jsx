import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

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
    let body;
    if(this.state.detail){
      body = (<TodoDetailViewContainer todo={this.props.todo}/>)
    };

    return (
      <li>
      <a onClick={this.toggleDetail}>{this.props.todo.title}</a>
      <button onClick={this.handleClick()}>{ this.props.todo.done ? "Undo" : "Done"}</button>
      {body}
      </li>
    )
  }
}

export default TodoListItem;

import React from 'react';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestTodos();
  }

  render() {
    return(
      <ul>
        {this.props.title}
      </ul>
    )
  }
}

export default TodoList;

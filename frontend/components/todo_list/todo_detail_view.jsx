import React from 'react';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      {this.props.todo.body}
    )
  }
}

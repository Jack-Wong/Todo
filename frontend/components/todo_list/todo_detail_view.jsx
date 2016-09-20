import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestSteps(this.props.todo.id);
  }

  render() {
    return(
      <div>
        <p>{this.props.todo.body}</p>
        <StepListContainer todo_id={this.props.todo.id}/>
      </div>
    )
  }
}

export default TodoDetailView;

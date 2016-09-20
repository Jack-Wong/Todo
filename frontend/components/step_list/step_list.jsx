import React from 'react';
import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component {
  constructor(props){
    super(props)
  };

  render() {
    return(
      <div>
        <ul>
          {this.props.steps.map((step, idx) =>( <StepListItemContainer key={idx} step={step}/>))}
        </ul>
        <StepForm todo_id={this.props.todo_id} createStep={this.props.createStep}/>
      </div>
    );
  };
}

export default StepList;

import React from 'react';


class StepListItem extends React.Component{
  constructor(props){
    super(props);
  };

  handleClick() {
    return (event) => {
      event.preventDefault();
      this.props.toggleStep(this.props.step);
    };
  }

  render() {
    return(
      <li>
        {this.props.step.title}
        <button onClick={this.handleClick()}>{ this.props.step.done ? "Undo" : "Done"}</button>
      </li>
    );
  };
}

export default StepListItem;

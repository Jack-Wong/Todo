import React from 'react';

class StepForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      to_do_id: this.props.todo_id
    };
  };

  formState(key) {
    return event => this.setState({[key]: event.currentTarget.value});
  };

  handleSubmit(){
    return (event) => {
      event.preventDefault();
      this.props.createStep(this.state);
      this.setState({title: "", body: ""});
    };
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit()}>
        <label>Step Title</label>
        <input onChange={this.formState('title')} value={this.state.title}/>
        <label>Step Body</label>
        <textarea onChange={this.formState('body')} value={this.state.body}></textarea>
        <button>Create Step</button>
      </form>
    );
  };
}

export default StepForm;

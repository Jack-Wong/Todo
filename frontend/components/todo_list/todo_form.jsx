import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    }
  }

  formState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleSubmit(){
    return (event) => {
      event.preventDefault();
      const todo = Object.assign({}, this.state);
      this.props.createTodo(this.state);
      this.setState({title: "", body: ""});
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit()}>
        <label>Title</label>
        <input onChange={this.formState('title')} value={this.state.title}/>
        <label>Body</label>
        <textarea onChange={this.formState('body')} value={this.state.body}></textarea>
        <button>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;

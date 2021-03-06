import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { requestTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selector';
import Root from './components/root';
import { createTodo } from './actions/todo_actions'

window.store = configureStore();
window.createTodo = createTodo;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("content");
  ReactDOM.render(<Root store={store}/>, root);
});

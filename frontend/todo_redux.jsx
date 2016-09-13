import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

window.store = configureStore()

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#content");
  ReactDOM.render(<h1>it worked</h1>, root);
});

import React, { Component } from "react";
import { render } from "react-dom";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <p>
          Here both
          <strong> Shopping List </strong>
          and
          <strong> ToDo List </strong>
          are using
          <strong> WithSearch </strong>
          HOC function
        </p>
        <hr />
        <h4>Shopping List with search</h4>
        <ShoppingList placeholder="Search" />
        <hr />
        <h4>ToDo List with search</h4>
        <TodoList placeholder="Search ToDos" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

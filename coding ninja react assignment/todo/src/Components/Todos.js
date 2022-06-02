import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
// basically all the todos

class Todos extends Component {
  render() {
    console.log(this.props.todos); // this is what I sent from App.js
    return this.props.todos.map((tod) => (
      <TodoItem
        key={tod.id}
        todo={tod}
        markCopmlete={this.props.markCopmlete}
        removeTd={this.props.removeTd}
        editTodo = {this.props.editTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  removeTd: PropTypes.func.isRequired,
};

export default Todos;

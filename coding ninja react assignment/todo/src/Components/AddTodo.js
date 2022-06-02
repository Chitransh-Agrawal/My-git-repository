import React, { Component } from "react";
import PropTypes from "prop-types";
export class AddTodo extends Component {
  state = {
    title: ``,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value }); 

  onSubmit = (e) => {
    e.preventDefault(); 
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          style={{}}
          type="text"
          name="title"
          placeholder="Add toDo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Axios Submit" className="btnsbm" />
      </form>
    );
  }
}

export default AddTodo;

//Proptypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  removeTd: PropTypes.func.isRequired,
};



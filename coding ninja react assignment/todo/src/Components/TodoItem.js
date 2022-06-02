import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = (todo) => {
    return {
      backgroundColor: todo.completed ? `#19e062` : `#bf0c06`,
      textDecoration: todo.completed ? "line-through" : "none",
      borderBottom: `1px black double `,
      padding: `10px`,
      color: "white",
      outlineColor: " black",
      textAlign: `center`,
      textShadow: `1px 2px black`,
      width: `20em`,

      position: `auto`,
      marginTop: `1em`,
      marginLeft: ` 25em`,
    };
  };



  render() {
    const { id, title } = this.props.todo;

    return (

      <div style={this.getStyle(this.props.todo)}>
        <p>
          <input
            type="checkbox"
            id="checky"
            style={checkboxStyle}
            checked={this.props.todo.completed}
            onChange={
              this.props.markCopmlete.bind(this, id) 
            }
          />{" "}
          {"  "}
          <input type="text" id="todo" onChange={this.props.editTodo.bind(this, id)} value={title}/>
          <button style={btnStyle} onClick={this.props.removeTd.bind(this, id)}>
            {" "}
            X{" "}
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};


const btnStyle = {
  color: "#ff0200",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer", 
  float: "right",
};

const checkboxStyle = {
  float: "left",
  transform: `scale(2)`,
  marginTop: `.5em`,
  marginLeft: `2em`,
  clicked: `true`,
};
export default TodoItem;

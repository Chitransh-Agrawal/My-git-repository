import React, { Component } from "react";
import "./App.css";
import Todos from "./Components/Todos";

import AddTodo from "./Components/AddTodo";

import { BrowserRouter as Router } from "react-router-dom";

import axios from "axios";

class App extends Component {
  //this is how i ADD state
  state = {
    todos: [],
  };

  //for http requests
  componentDidMount() {
    //get it through the axios library
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => this.setState({ todos: res.data }));
  }

  markCopmlete = (id) => {
    console.log(`THE ID CHANGED IS ${id}`);

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  removeTd = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        })
      );
  };

  addNew = () => {
    let newEle = {
      id: this.state.todos.length + 1,
      title: document.getElementById("texty").value,
      completed: false, //
    };
    if (newEle.title.length > 20 || !newEle.title.length) {
      console.log("PLEASE TYPE A PROPER MESSAGE");
      return false;
    }
    this.setState({ todos: [...this.state.todos, newEle] });
    return false;
  };

  clearAll = () => {
    this.setState({
      todos: [],
    });
  };

  checkAll = () => {
    this.state.todos.forEach((d) => {
      if (!d.completed) {
        this.markCopmlete(d.id);
      }
    });
  };

  unCheckAll = () => {
    this.state.todos.forEach((d) => {
      if (d.completed) {
        this.markCopmlete(d.id);
      }
    });
  };

  addTodo = (title) => {
    if (!title.length || title.length > 20) return;

    // axios request
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      );
  };

  editTodo = (title) => {
   

    // axios request
    axios
      .put("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      );
  };

 

  render() {
    // this is how i can access state
    console.log(this.state.todos);

    return (
      //JSX CODE
      <Router>
        <div className="App">
          <div className="wrapper">
            <h1> Todo List App React </h1>

            <AddTodo addTodo={this.addTodo} />

            <Todos
              todos={this.state.todos}
              markCopmlete={this.markCopmlete}
              removeTd={this.removeTd}
              editTodo = {this.editTodo}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

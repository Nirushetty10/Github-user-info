import React, { Component } from "react";
import "./Todo.scss";
import TodoCard from "../TodoCard/TodoCard";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      date: "",
      task: "",
      taskList: [],
      filteredArray: [],
    };
  }

  dateHandler = (value) => {
    this.setState({
      date: value,
    });
  };

  taskHandler = (value) => {
    this.setState({
      task: value,
    });
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    let { id, date, task, taskList } = this.state;
    if (date == "" || task == "") return;
    let newtask = {
      id,
      date,
      task,
      isCompleted: false,
    };
    this.setState({
      taskList: [...taskList, newtask],
      filteredArray: [...taskList, newtask],
      id: id + 1,
      date: "",
      task: "",
    });
  };

  dropdownChangeHandler = (val) => {
    if (val === "true") {
      let filtered = this.state.taskList.filter((item) => {
        return item.isCompleted === true;
      });
      this.setState({
        filteredArray: filtered,
      });
    }
    if (val === "false") {
      let filtered = this.state.taskList.filter((item) => {
        return item.isCompleted === false;
      });
      this.setState({
        filteredArray: filtered,
      });
    }
    if (val === "All") {
      this.setState({
        filteredArray: this.state.taskList,
      });
    }
  };

  setCheckHandler = (res, id) => {
    let result = this.state.taskList.findIndex((item) => {
      return item.id === id;
    });
    let copyitem = [...this.state.taskList];

    copyitem[result] = { ...copyitem[result], isCompleted: res };

    this.setState({
      taskList: copyitem,
      filteredArray: copyitem,
    });
  };

  deleteHandler = (id) => {
    const updatedTask = this.state.taskList.filter((task) => task.id !== id);
    this.setState({ taskList: updatedTask, filteredArray: updatedTask });
  };

  render() {
    let taskData = this.state.filteredArray;
    return (
      <div className="layout">
        <h1 className="heading">ToDo app</h1>
        <div className="form">
          <form>
            <div>
              <div>Date</div>
              <input
                type="date"
                value={this.state.date}
                onChange={(e) => this.dateHandler(e.target.value)}
              ></input>
            </div>
            <div>
              <div>Task</div>
              <input
                type="text"
                value={this.state.task}
                onChange={(e) => this.taskHandler(e.target.value)}
              ></input>
            </div>
            <button onClick={this.formSubmitHandler}>Add</button>
          </form>
        </div>
        <div className="items">
          <div className="items-fliter">
            <select
              onChange={(e) => this.dropdownChangeHandler(e.target.value)}
            >
              <option value="All">All</option>
              <option value="true">Completed</option>
              <option value="false">Pending</option>
            </select>
          </div>
          {taskData.length === 0 && <p>No data found!</p>}
          {taskData.length > 0 &&
            taskData.map((values) => {
              return (
                <TodoCard
                  key={values.id}
                  id={values.id}
                  date={values.date}
                  task={values.task}
                  check={values.isCompleted}
                  deleteTask={this.deleteHandler}
                  setCheck={this.setCheckHandler}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

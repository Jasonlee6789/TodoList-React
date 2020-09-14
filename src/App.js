import React, { Fragment } from "react";
import "./index.css";
import AddTodo from "./addTodo";

import Todo from "./todo";
import Stats from "./stats";
export default class App extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: "今天晚上升颗星",
        done: true,
      },
      {
        id: 2,
        title: "本周给大家录10集补充知识",
        done: false,
      },
    ],
  };
  //添加内容
  add = (title) => {
    let { data } = this.state;
    data.push({
      id: Date.now(),
      title,
      done: false,
    });
    this.setState({
      data,
    });
  };
  //更改是否完成的状态
  changeDone = (id, done) => {
    let { data } = this.state;
    data.forEach((item) => {
      if (item.id === id) {
        item.done = done;
      }
    });
    this.setState({
      data,
    });
  };
  changeTitle = (id, title) => {
    let { data } = this.state;
    data.forEach((item) => {
      if (item.id === id) {
        item.title = title;
      }
    });
    this.setState({
      data,
    });
  };
  //删除每一项
  remove = (id) => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  };
  //删除已经完成的
  removeDone = () => {
    let { data } = this.state;
    this.setState({
      data: data.filter((item) => !item.done),
    });
  };
  render() {
    let { data } = this.state;
    return (
      <div id="todoapp">
        <div className="title">
          <h1>todo-jing</h1>
        </div>
        <div className="content">
          <AddTodo add={this.add} />
          {data.length > 0 ? (
            <Fragment>
              <Todo
                data={data}
                changeDone={this.changeDone}
                remove={this.remove}
                changeTitle={this.changeTitle}
              />
              <Stats data={data} removeDone={this.removeDone} />
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

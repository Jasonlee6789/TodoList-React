import React from "react";
import Li from "./li";
export default class Todo extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <ul id="todo-list">
        {data.map((item) => (
          <Li key={item.id} {...this.props} data={item} />
        ))}
      </ul>
    );
  }
}

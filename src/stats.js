import React from "react";
export default class Stats extends React.Component {
  render() {
    let { data, removeDone } = this.props;
    let doneLen = data.filter((item) => item.done).length;
    let unDoneLen = data.length - doneLen;
    return (
      <div id="todo-stats">
        <span className="todo-count">
          <span className="number">{unDoneLen}</span>
          <span className="word">项待完成</span>
        </span>
        {doneLen > 0 ? (
          <span className="todo-clear">
            <a
              onClick={() => {
                removeDone();
              }}
            >
              Clear <span>{doneLen}</span> 已完成事项
            </a>
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }
}

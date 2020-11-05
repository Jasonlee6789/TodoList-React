import React from "react";
export default class AddTodo extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let { add } = this.props;
    return (
      <div id="create-todo">
        <input
          id="new-todo"
          placeholder="What needs to be done?"
          autoComplete="off"
          type="text"
          onKeyDown={({ keyCode, target }) => {
            let val = target.value;
            if (keyCode === 13 && val.trim()) {
              add(val);
              target.value = "";
            }
          }}
        />
      </div>
    );
  }
}

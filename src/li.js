import React, { createRef } from "react";
/*
  编辑功能：
    !!! 当用户清空输入框的信息后，还保持原来的信息，否则信息和用户输入数据保持一致
    1. 将数据复制一份 state.val = props.data.value
    2. 失去焦点时
          判断输入框是否为空，
            为空
              将 state.val 恢复为 props.data.value
            否则
              props.data.value = state.val
*/
export default class Li extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      val: props.data.title,
    };
  }
  editIpt = createRef();
  title = createRef();
  componentDidUpdate(prevProps, prevState) {
    //组件更新完成之后
    //判断当前是否是进入编辑状态
    if (!prevState.edit && this.state.edit) {
      //let input = document.querySelector(`.editInput${this.props.data.id}`);
      //console.log(input);
      //input.focus();
      //console.log(this.editIpt);
      //console.log(this.title);
      this.editIpt.current.focus();
    }
  }
  render() {
    let { edit, val } = this.state;
    let { data, changeDone, remove, changeTitle } = this.props;
    let { id, title, done } = data;
    return (
      <li className={edit ? "editing" : ""}>
        <div className={`todo ${done ? "done" : ""}`}>
          <div className="display">
            <input
              className="check"
              type="checkbox"
              checked={done}
              onChange={({ target }) => {
                changeDone(id, target.checked);
              }}
            />
            <div
              className="todo-content"
              ref={this.title}
              onDoubleClick={() => {
                this.setState({
                  edit: true,
                });
              }}
            >
              {title}
            </div>
            <span
              className="todo-destroy"
              onClick={() => {
                remove(id);
              }}
            ></span>
          </div>
          <div className="edit">
            {/* <input 
                  className={"todo-input editInput"+id} 
                  type="text"
                  onBlur={()=>{
                      this.setState({
                        edit: false
                      })
                  }}
                /> */}
            <input
              className="todo-input"
              type="text"
              ref={this.editIpt}
              value={val}
              onChange={({ target }) => {
                // changeTitle(id,target.value); 注意不要在 onChange 时 直接修改原数据，否则清空之后，无法再获取原数据

                //注意上面不直接修改元数据，否则清空之后，无法再获取元数据
                this.setState({
                  val: target.value,
                });
              }}
              onBlur={() => {
                if (val.trim()) {
                  changeTitle(id, val);
                } else {
                  this.setState({
                    val: title,
                  });
                }
                this.setState({
                  edit: false,
                });
              }}
            />
          </div>
        </div>
      </li>
    );
  }
}

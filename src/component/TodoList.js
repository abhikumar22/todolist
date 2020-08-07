import React from "react";
import store from '../reduxFiles/configureStore'
import * as actions from '../reduxFiles/todo'
import * as actions2 from '../reduxFiles/todo2'



export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lst: [],
      currentInputValue: ""
    };
    store.subscribe(() => {
      this.updateListTodo();
    })
  }

  updateListTodo() {
    this.setState({ lst: store.getState().entities.todo })
  }
  deleteItem(index) {
    actions.todoRemoved(index);
  }

  addATodo() {
    let val = this.state.currentInputValue
    this.setState({ currentInputValue: '' }, () => {
      actions.todoAdded(val);
    })
  }

  deleteAllTodoFromList() {
    actions.deleteAllTodo();
  }

  render() {
    return (
      <div className="container-fluid bg-primary text-center py-4 text-white">
        <div className="btn-group">
          <button
            className="btn btn-warning d-inline-block"
            type="button"
            onClick={() => {
              this.deleteAllTodoFromList();
            }}
          >
            Reset
          </button>
          <input
            className="ml-2 d-inline-block form-control"
            type="text"
            name="name"
            required
            autoComplete='off'
            value={this.state.currentInputValue}
            placeholder="Enter todo event"
            onChange={e => {
              this.setState({ currentInputValue: e.target.value });
            }}
          />
          <button
            className="ml-2 btn btn-success d-inline-block"
            type="button"
            onClick={() => {
              if (this.state.currentInputValue.length !== 0) {
                this.addATodo()
              }
            }}
          >
            Add
          </button>
        </div>
        <br />
        <br />
        <br />

        <div className="">
          {this.state.lst.map((item, index) => {
            return (
              <div
                className="bg-warning py-3 text-center my-1 justify-content-center "
                key={item.id}
              >
                <p className=" d-inline-block">
                  {index + 1}. {item.description}
                </p>
                <button
                  className="btn btn-danger ml-3 d-inline-block"
                  onClick={() => {
                    this.deleteItem(item.id);
                  }}
                >
                  delete
                </button>
                {/* </div> */}
              </div>
            );
          })}
        </div>
        <button
                  className="btn btn-danger ml-3 d-inline-block"
                  onClick={() => {
                   actions2.todoAdded("hhhhhhhh")
                  }}
                >delete diff</button>
      </div>
    );
  }
}

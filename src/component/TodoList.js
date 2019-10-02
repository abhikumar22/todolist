import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lst: [],
      currentInputValue: ""
    };
  }

  deleteItem(index) {
    const list = [...this.state.lst];
    const updatedList = list.filter(item => item.id !== index);
    this.setState({ lst: updatedList });
  }

  render() {
    return (
      <div className="container-fluid bg-primary text-center py-4 text-white">
        <div className="btn-group">
          <button
            className="btn btn-warning d-inline-block"
            type="button"
            onClick={() => {
              this.setState({ lst: [] });
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
                var temp = [...this.state.lst];
                const newVal = {
                  id: Date.now(),
                  value: this.state.currentInputValue
                };
                temp.push(newVal);
                this.setState({ lst: temp, currentInputValue: "" });
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
                {/* <div className="d-flex"> */}

                <p className=" d-inline-block">
                  {index + 1}. {item.value}
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
      </div>
    );
  }
}

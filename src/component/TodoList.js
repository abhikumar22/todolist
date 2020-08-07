import React from 'react';
import * as actions from '../store/todo'



class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lst: [],
      inputValue: ''
    }
    // const store = props.store
    // console.warn("sss", store)

  }

  componentDidMount() {
    this.props.store.subscribe(() => {
      this.updateListTodo()
    })
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  updateListTodo = () => {
    const storeTodoState = this.props.store.getState().entities.todo
    if (this.state.lst !== storeTodoState) {
      this.setState({ lst: storeTodoState })
    }
  }


  handleSubmit = (evt) => {
    evt.preventDefault();
    this.addInputValue();
  }

  addInputValue = () => {
    if (this.state.inputValue.length !== 0) {
      actions.todoAdded(this.state.inputValue);
      this.setState({inputValue:''})
    }
  }

  deleteATodoFromList = (id) => {
    actions.todoRemoved(id)
  }

  resetTodo = () => {
    actions.deleteAllTodo()
  }
  render() {
    return (

      <div className="container-fluid bg-primary text-center py-4 text-white">
        <div className="btn-group">
          <form className="row" onSubmit={this.handleSubmit}>
            <button
              className="btn btn-warning d-inline-block"
              type="button"
              onClick={() => {
                this.resetTodo();
              }}
            >
              Reset
          </button>
            <input
              className="ml-2 d-inline-block "
              type="text"
              name="name"
              required
              autoComplete='off'
              value={this.state.inputValue}
              placeholder="Enter todo event"
              onChange={e => {
                const val = e.target.value
                this.setState({ inputValue: val }, () => {
                  // setTimeout(
                  //   () => this.setState({inputValue:''}), 
                  //   1000
                  // );

                })
                // this.setInputValue(e.target.value);
              }}
            />
            <button
              className="ml-2 btn btn-success d-inline-block"
              type="button"
              onClick={() => {
                this.addInputValue();
              }}
            >
              Add
          </button>
          </form>
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
                    this.deleteATodoFromList(item.id)

                  }}
                >
                  delete
                </button>
              </div>
            );
          })}

        </div>
      </div>

    );
  }
}


export default TodoList;
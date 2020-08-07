import React from 'react';
import Todo from '../component/TodoList';
import User from '../component/UserTodo';

import { connect } from 'react-redux'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // lenOF: 0,
    }

    // console.log("lll",this.state)

  }

  componentDidMount() {
    // store.subscribe(() => {
    //   this.setState({ lenOF: store.getState().entities.todo.length })
    // })
  }
  render() {
    return (
      <div>
        <h1>Length of the Todo={this.props.todos.length}</h1>
        <h1>Length of the User={this.props.users}</h1>

        <Todo />
        <br />
        <br />
        <User />
        {/* <TodoList
          store={store}
        /> */}
      </div>
    );
  }
}

//binding the state value so to get the todo list from store

const mapStateToProps = state => ({ todos: state.entities.todo, users: state.entities.user })


export default connect(mapStateToProps)(App);
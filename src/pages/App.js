import React from 'react';
import store from '../store/configureStore';
import TodoList from '../component/TodoList';


// const store = store();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lenOF: 0,
    }
    // const store = props.store
    // console.warn("sss", store)

  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ lenOF: store.getState().entities.todo.length })
    })
  }
  render() {
    return (
      <div>
        <h1>Length of the Todo={this.state.lenOF}</h1>
        <TodoList
          store={store}
        />
      </div>
    );
  }
}


export default App;
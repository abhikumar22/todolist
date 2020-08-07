import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './component/TodoList';
import store from "./reduxFiles/configureStore";
import * as actions from './reduxFiles/todo'

// const store = configureStore();

// const unsubscribe = store.subscribe(()=>{
//   console.log("Store changed!",store.getState());
// })

store.subscribe(()=>{
    console.log("Store changed!",store.getState());
  })

// store.dispatch(actions.bugAdded("Bugg 11"));
// // unsubscribe();
// store.dispatch(actions.bugRemoved(1));


console.log(store.getState());

ReactDOM.render(
  <TodoList />,
  // <MyApp/>,
  document.getElementById('root')
);

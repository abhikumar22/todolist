import store from './configureStore'
// this file should only export reducers since it is todo.js reducer
// Duck duck method


// *******************************************************************************
// Action Types -> All your Method names for action are mentioned here
// should not 
const INCREMENT_C = "increC";
const DECREMENT_C = "decreC";
// *******************************************************************************




// *******************************************************************************
// Action Creator -> All your Methods Description for performing an action

// action with payload
export function incrementCounter() {
    return store.dispatch({
        type: INCREMENT_C,
    });
}

// action with payload
export function decrementCounter() {
    return store.dispatch({
        type: DECREMENT_C,
    });
}
// *******************************************************************************



// *******************************************************************************
// Reducers -> It is the method which describs what to do when a particular action is triggered
// Should be default export module

let counter = 0;
export default function reducer(user = 0, action) {

    switch (action.type) {
        case INCREMENT_C:
            return counter++
        case DECREMENT_C:
            return counter > 0 ? counter-- : 0;
        default:
            return user;
    }
}

// *******************************************************************************

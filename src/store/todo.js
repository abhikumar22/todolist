import store from './configureStore'
// this file should only export reducers since it is todo.js reducer
// Duck duck method


// *******************************************************************************
// Action Types -> All your Method names for action are mentioned here
// should not 
const DELETE_ALL_TODO = "deleteAllTodo";
const REMOVE_A_TODO = "removeATodo";
const Add_A_TODO = "addATodo"
// *******************************************************************************




// *******************************************************************************
// Action Creator -> All your Methods Description for performing an action

// action with payload
export function todoAdded(description) {
    return store.dispatch({
        type: Add_A_TODO,
        payload: {
            description: description
        }
    });
}

// action with payload
export function todoRemoved(id) {
    return store.dispatch({
        type: REMOVE_A_TODO,
        payload: {
            id: id
        }
    });
}

// action without payload
export function deleteAllTodo() {
    return store.dispatch({
        type: DELETE_ALL_TODO,
    });
}
// *******************************************************************************



// *******************************************************************************
// Reducers -> It is the method which describs what to do when a particular action is triggered
// Should be default export module

let lastId = 0;
export default function reducer(state = [], action) {

    switch (action.type) {
        case Add_A_TODO:
            return [
                //prev state
                ...state,
                //add new Todo
                {
                    id: ++lastId,
                    description: action.payload.description,
                }
            ]
        case REMOVE_A_TODO:
            return state.filter(bug => bug.id !== action.payload.id)
        
        case DELETE_ALL_TODO:
            return state=[]

        default:
            return state;
    }
}

// *******************************************************************************

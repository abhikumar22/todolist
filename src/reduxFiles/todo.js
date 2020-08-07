import store from './configureStore'

// Action Types

const DELETE_ALL_TODO = "deleteAllTodo";
const REMOVE_A_TODO = "removeATodo";
const Add_A_TODO = "addATodo"

// Action Creators

export function todoAdded(description) {
    return store.dispatch({
        type: Add_A_TODO,
        payload: {
            description: description
        }
    });
}

export function todoRemoved(id) {
    return store.dispatch({
        type: REMOVE_A_TODO,
        payload: {
            id: id
        }
    });
}

export function deleteAllTodo() {
    return store.dispatch({
        type: DELETE_ALL_TODO,
        // payload: {
        //     id: 1
        // }
    });
}

// Reducers
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


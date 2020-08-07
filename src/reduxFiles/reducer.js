import { combineReducers } from 'redux';

import todoReducer from './todo'
import todoReducer2 from './todo2'

const entiti=combineReducers({
    todo: todoReducer,
    todo2: todoReducer2
});

export default combineReducers({
    entities:entiti,
    // todo2: todoReducer2
});



// export default rootreducer;

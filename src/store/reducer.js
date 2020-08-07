import { combineReducers } from 'redux'
// import all reducers
import todo from './todo'


// put the reducers in the hirarcy form which you want
export default combineReducers({
    entities: entities
})




// ************************************************************
// add your hirarcy here for the reducers which you want like
// entities :{ todo,payment,hotel,groups}
// auth :{userId:1,name:"john"}
// ui :{state specific to ui  }
// ************************************************************


const entities = combineReducers({ todo: todo })

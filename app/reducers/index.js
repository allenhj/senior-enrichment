/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';
import studentsReducer from './studentsReducer';

const reducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer
});

export default reducer;

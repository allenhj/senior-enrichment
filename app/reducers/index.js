/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';
import studentsReducer from './studentsReducer';
import editingCampusReducer from './editingCampusReducer';
import editingStudentReducer from './editingStudentReducer';

const reducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  isEditingCampus: editingCampusReducer,
  isEditingStudent: editingStudentReducer
});

export default reducer;

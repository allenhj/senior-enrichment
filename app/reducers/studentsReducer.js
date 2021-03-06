import axios from 'axios';

// action type
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// action creator
const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students
  };
};

const addStudent = student => {
  return {
    type: ADD_STUDENT,
    student
  };
};

const editStudent = student => {
  return {
    type: EDIT_STUDENT,
    student
  };
};

const deleteStudent = studentId => {
  console.log('deleted student');
  return {
    type: DELETE_STUDENT,
    studentId
  };
};

// Fetch from server
export const fetchStudents = () => {
  return dispatch => {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)))
      .catch(console.error);
  };
};

// Add a student
export const postStudent = student => {
  return dispatch => {
    axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => dispatch(addStudent(newStudent)))
      .catch(console.error);
  };
};

// Update student
export const updateStudent = student => {
  return dispatch => {
    axios.put( `/api/students/${student.id}`, student)
      .then(res => res.data)
      .then(editedStudent => dispatch(editStudent(editedStudent)))
      .catch(console.error);
  };
};

// Delete student
export const removeStudent = studentId => {
  console.log('studentToDelete', studentId);
  return dispatch => {
    axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(() => dispatch(deleteStudent(+studentId)))
      .catch(console.error);
  };
};

// reducer
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
    case EDIT_STUDENT:
      return [...state.filter(student => student.id !== action.student.id), action.student];
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId);
    default:
      return state;
  }
};

export default studentsReducer;

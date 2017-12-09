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

const deleteStudent = studentId => {
  console.log('deleted student');
  return {
    type: DELETE_STUDENT,
    studentId
  };
};

// fetch from server
export const fetchStudents = () => {
  return dispatch => {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)))
      .catch(console.error);
  };
};

// post new student data to server
export const postStudent = student => {
  return dispatch => {
    axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => dispatch(addStudent(newStudent)))
      .catch(console.error);
  };
};

// delete student
export const removeStudent = student => {
  console.log('studentToDelete', student);
  return dispatch => {
    axios.delete(`/api/students/${student.id}`)
      .then(res => res.data)
      .then(() => dispatch(deleteStudent(student.id)))
      .catch(console.error);
  };
};

// reducer
const studentsReducer = (state = [], action) => {
  // console.log('actionstudent', action.student);
  // console.log('poststate', state.filter(student => student.id !== action.student.id));
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId);
    default:
      return state;
  }
};

export default studentsReducer;

import React from 'react';
import { connect } from 'react-redux';

import StudentsTableHeader from './StudentsTableHeader';
import StudentRow from './StudentRow';
import AddStudentForm from './AddStudentForm';

// helper function to reveal AddStudentForm
const displayAddStudentForm = () => {
  const addStudentEl = document.getElementById('add-student');
  const clickedEl = document.getElementById('add-student-clicked');
  addStudentEl.style.height = '45vh';
  window.setTimeout(() => {
    clickedEl.style.display = 'block';
  }, 250);
};

const StudentsList = props => {
  const students = props.students;
  const campuses = props.campuses;
  console.log('studentsListstudents', students);
  return (
    <div id="students">
      <div id="students-table">
        <StudentsTableHeader />
        {students.map(student => {
          return (
            <div key={student.id}><StudentRow student={student} /></div>
          );
        })}
      </div>
      <div id="add-student">
        <h2 onClick={displayAddStudentForm}><span id="plus">+</span> Add Student</h2>
        <div id="add-student-clicked" style={{display: 'none'}}>
          <AddStudentForm />
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

// export default connect()(CampusesList);
export default connect(mapStateToProps)(StudentsList);

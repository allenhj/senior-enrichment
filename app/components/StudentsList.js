import React from 'react';
import { connect } from 'react-redux';

import StudentsTableHeader from './StudentsTableHeader';
import StudentRow from './StudentRow';
import AddStudentForm from './AddStudentForm';

const StudentsList = props => {
  console.log('student props', props);
  const students = props.students;
  const campuses = props.campuses;
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
      <AddStudentForm />
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

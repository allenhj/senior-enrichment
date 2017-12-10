import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddStudentForm from './AddStudentForm';

import { removeStudent } from '../reducers/studentsReducer';
import { editingStudent } from '../reducers/editingStudentReducer';

const SingleStudent = (props) => {
  const student = props.students.find(student => student.id === +props.location.pathname.split('/').slice(-1));

  let campus;
  if (student) {
    campus = props.campuses.filter(campus => student.campusId === campus.id)[0];
  }

  return (
    <div>
      {props.students.length && campus && <div id="student-detail-container">
        <div id="student-detail-card">
          {!props.isEditingStudent ? <div id="student-information">
            <div id="student-details">
              <h1>{student.name}</h1>
              <h4>{student.email}</h4>
            </div>
            <div>
              <h5>GPA: {student.gpa}</h5>
              <h5>Campus:
                <Link to={`/campuses/${campus.id}`}> {campus.name} </Link>
              </h5>
              <h5>Started: {`${timeSince(new Date(campus.createdAt))} ago`}</h5>
            </div>
            <div className="spacer" />
            <div id="modify-data">
            <div
              className="edit-btn btn"
              onClick={props.onEditClick}
            >E</div>
            <div
              className="delete-btn btn"
              onClick={props.onDeleteClick}
            >X</div>
          </div>
        </div>
        :
        <div id="student-information">
          <h5><AddStudentForm student={student} campuses={props.students} /></h5>
        </div>}
        </div>
      </div>}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    students: state.students,
    campuses: state.campuses,
    isEditingStudent: state.isEditingStudent
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => {
      dispatch(editingStudent(true));
    },
    onDeleteClick: () => {
      const id = ownProps.location.pathname.split('/')[2];
      dispatch(removeStudent(id));
      ownProps.history.push('/students');
    }
  };
};

// helper function, found on StackOverflow
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

// export default connect()(CampusesList);
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(SingleStudent);


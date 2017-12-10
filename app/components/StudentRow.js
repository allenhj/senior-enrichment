import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeStudent } from '../reducers/studentsReducer';

const StudentRow = props => {
  const student = props.student;
  const studentCampus = props.campuses.find(campus => campus.id === student.campusId);

  return (
    <div>
    {studentCampus && <div className="student-row">
      <div className="student-id">{student.id}</div>
      <div className="student-name">
        <h5>
          <Link to={`/students/${student.id}`}>{student.name}</Link>
        </h5>
      </div>
      {!props.isCampusView && <div className="student-campus">
        <div className={`${studentCampus.className.toLowerCase()}-small`} />
        <h5 style={{flexGrow: '1', marginLeft: '1em'}}>
          <Link to={`/campuses/${studentCampus.id}`}>{studentCampus.name}</Link>
        </h5>
      </div>}
      {!props.isCampusView && <div
          className="student-remove"
          onClick={props.handleClick}
        >
        Remove
      </div>}
    </div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => {
      dispatch(removeStudent(ownProps.student.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentRow);

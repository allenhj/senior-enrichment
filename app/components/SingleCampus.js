import React from 'react';
import { connect } from 'react-redux';

import StudentsTableHeader from './StudentsTableHeader';
import StudentRow from './StudentRow';

import { updateCampus, removeCampus } from '../reducers/campusesReducer';

const SingleCampus = props => {
  const campus = props.campuses.find(campus => campus.id === +props.location.pathname.split('/').slice(-1));

  return (
    <div>
      {props.campuses.length && (<div>
      <div id="hero">
        <div className={`${campus.className}-big`} />
      </div>
      <div id="campus-detail-container">
        <div id="campus-detail-card">
          <div id="information">
            <div id="campus-details">
              <h1> {campus.name} </h1>
              <h3> {campus.description} </h3>
            </div>
            <div>
              <h2 style={{marginBottom: '0.5em'}}>Students</h2>
              <StudentsTableHeader isCampusView={true} />
              {props.students.filter(student => student.campusId === campus.id).map(student => {
                return (
                  <div key={student.id}><StudentRow student={student} isCampusView={true} /></div>
                );
              })}
            </div>
            <div id="spacer" />
            <div id="delete-campus">
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
        </div>
      </div>
    </div>)}
  </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownprops', ownProps);
  return {
    onEditClick: (event) => {
      console.log(event.target.value);
      dispatch(updateCampus(event.target.value));
    },
    onDeleteClick: () => {
      const id = ownProps.location.pathname.split('/')[2];
      console.log(id);
      dispatch(removeCampus(id));
      ownProps.history.push('/campuses');
    }
  };
};

// export default connect()(CampusesList);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);

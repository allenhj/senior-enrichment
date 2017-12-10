import React from 'react';
import { connect } from 'react-redux';

import StudentsTableHeader from './StudentsTableHeader';
import StudentRow from './StudentRow';
import AddCampusForm from './AddCampusForm';

import { removeCampus } from '../reducers/campusesReducer';
import { editingCampus } from '../reducers/editingCampusReducer';

const SingleCampus = props => {
  const campus = props.campuses.find(campus => campus.id === +props.location.pathname.split('/').slice(-1));

  console.log('SINGLECAMPUSPROPS', props);
  return (
    <div>
      {props.campuses.length && (<div>
      <div id="hero">
        <div className={`${campus.className}-big`} />
      </div>
      <div id="campus-detail-container">
        <div id="campus-detail-card">
          {!props.isEditingCampus ?
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
          <div id="information">
            <h5><AddCampusForm campus={campus} campuses={props.campuses} /></h5>
          </div>}
        </div>
      </div>
    </div>)}
  </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students,
    isEditingCampus: state.isEditingCampus
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => {
      dispatch(editingCampus(true));
    },
    onDeleteClick: () => {
      const id = ownProps.location.pathname.split('/')[2];
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

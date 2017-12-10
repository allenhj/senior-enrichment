import React from 'react';
import { connect } from 'react-redux';
import { postStudent, updateStudent } from '../reducers/studentsReducer';
import { editingStudent } from '../reducers/editingStudentReducer';

// helper function to close addStudent dropdown
const closeAddStudentForm = () => {
  const addStudentEl = document.getElementById('add-student');
  const clickedEl = document.getElementById('add-student-clicked');
  clickedEl.style.display = 'none';
  window.setTimeout(() => {
    addStudentEl.style.height = '10vh';
  }, 100);
  document.getElementById('add-student-form').reset();
};

const AddStudentForm = props => {
  const campuses = props.campuses;

  return (
    <div id="add-student-container">
    <div id="add-form-container">
      <form id="add-student-form" onSubmit={props.handleSubmit}>
        <div id="student-input-group">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              defaultValue = {props.student && props.student.firstName || ''}
              placeholder = {props.student && props.student.firstName || 'First Name'}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              defaultValue = {props.student && props.student.lastName || ''}
              placeholder = {props.student && props.student.lastName || 'Last Name'}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              defaultValue = {props.student && props.student.email || ''}
              placeholder = {props.student && props.student.email || 'Email'}
            />
          </div>
          <div>
            <label htmlFor="gpa">GPA</label>
            <input
              id="gpa"
              type="text"
              name="gpa"
              defaultValue = {props.student && props.student.gpa || ''}
              placeholder = {props.student && props.student.gpa || 'GPA'}
            />
          </div>
          <div>
            <label htmlFor="campusId">Campus</label>
            {props.student ?
            <select
              id="campusId"
              name="campusId"
              defaultValue={props.student.campusId}
            >
              {campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                );
              })}
            </select>
            :
            <select
              id="campusId"
              name="campusId"
            >
              {campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>&nbsp;{campus.name}</option>
                );
              })}
            </select>
            }
          </div>
        </div>
        {!props.student ?
          <div className="submit-button-container">
            <button type="submit">Submit</button>
            <div className="spacer" />
            <button onClick={closeAddStudentForm} className="cancel-btn">Cancel</button>
          </div>
          :
          <div className="submit-button-container">
            <button type="submit">Save</button>
            <div className="spacer" />
            <button onClick={props.cancelEditing} className="cancel-btn">Cancel</button>
          </div>
        }
      </form>
    </div>
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
    handleSubmit: (event) => {
      event.preventDefault();
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const email = event.target.email.value;
      const gpa = event.target.gpa.value;
      const campusId = event.target.campusId.value;
      document.getElementById('add-student-form').reset();
      if (!ownProps.student) {
        dispatch(postStudent({
          firstName,
          lastName,
          email,
          gpa,
          campusId
        }));
      } else if (ownProps.student.id) {
        dispatch(updateStudent({
          id: ownProps.student.id,
          firstName,
          lastName,
          email,
          gpa,
          campusId
        }));
        dispatch(editingStudent(false));
      }
    },
    cancelEditing: () => {
      dispatch(editingStudent(false));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentForm);

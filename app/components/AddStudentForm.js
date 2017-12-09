import React from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../reducers/studentsReducer';

const AddStudentForm = props => {
  const campuses = props.campuses;
  return (
    <div id="add-student">
    <h2><span id="plus">+</span> Add Student</h2>
    <div id="add-form-container">
      <form id="add-form" onSubmit={props.handleSubmit}>
        <div id="input-group">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
          <label htmlFor="gpa">GPA</label>
          <input
            id="gpa"
            type="text"
            name="gpa"
            placeholder="GPA"
          />
        </div>
          <div>
            <label htmlFor="campusId">Campus</label>
            <select
              id="campusId"
              name="campusId"
            >
              {campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event) => {
      console.dir(event.target);
      event.preventDefault();
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const email = event.target.email.value;
      const gpa = event.target.gpa.value;
      const campusId = event.target.campusId.value;
      console.log('formvals', {
        firstName,
        lastName,
        email,
        campusId,
        gpa
      });
      dispatch(postStudent({
        firstName,
        lastName,
        email,
        gpa,
        campusId
      }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentForm);

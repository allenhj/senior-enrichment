import React from 'react';
import { connect } from 'react-redux';


import { postCampus, updateCampus } from '../reducers/campusesReducer';
import { editingCampus } from '../reducers/editingCampusReducer';

const AddStudentForm = props => {
  const sites = props.campuses.map(campus => campus.className).filter((site, i, duplicates) => duplicates.indexOf(site) === i);

  let campusClassName;
  if (props.campus && props.campuses.length) {
    campusClassName = props.campuses.filter(campus => campus.id === props.campus.id)[0].className;
  }

  return (
    <div id="add-campus">
      <form id="add-campus-form" onSubmit={props.handleSubmit}>
        <div id="campus-input-group">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              defaultValue={props.campus && props.campus.name || ''}
              placeholder={props.campus && props.campus.name || 'Name'}
            />
          </div>
          <div>
            <label htmlFor="className">Site</label>
            {campusClassName ?
            <select
              id="className"
              name="className"
              defaultValue={campusClassName}
            >
              {sites.map(site => {
                return (
                  <option key={site} value={site}>{site.charAt(0).toUpperCase() + site.slice(1)}</option>
                );
              })}
            </select>
            :
            <select
              id="className"
              name="className"
            >
              {sites.map(site => {
                return (
                  <option key={site} value={site}>&nbsp;{site.charAt(0).toUpperCase() + site.slice(1)}</option>
                );
              })}
            </select> }
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              type="textarea"
              name="description"
              defaultValue={props.campus && props.campus.description || ''}
              placeholder={props.campus && props.campus.description || 'Description'}
            />
          </div>
          {!props.campus ?
          <div className="submit-button-container">
            <button type="submit">Submit</button>
            <div className="spacer" />
            <button
              onClick={() => {}}
              type="button"
              className="cancel-btn"
            >Cancel</button>
          </div>
          :
          <div className="submit-button-container">
            <button type="submit">Save</button>
            <div className="spacer" />
            <button
              onClick={props.cancelEditing}
              className="cancel-btn"
            >Cancel</button>
          </div>
          }
        </div>
      </form>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (event) => {
      event.preventDefault();
      console.dir(event.target);
      const name = event.target.name.value;
      const className = event.target.className.value;
      const description = event.target.description.value;
      if (!ownProps.campus) {
        dispatch(postCampus({
          name,
          className,
          description
        }));
        const modal = document.getElementById('add-campus-modal');
        modal.style.display = 'none';
      } else if (ownProps.campus.id) {
        dispatch(updateCampus({
          id: ownProps.campus.id,
          name,
          className,
          description
        }));
        dispatch(editingCampus(false));
      } else {
        console.error('Couldn\'t save');
      }
    },
    cancelEditing: () => {
      dispatch(editingCampus(false));
    }
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(AddStudentForm);

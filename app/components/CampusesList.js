import React from 'react';
import { connect } from 'react-redux';
import Campus from './Campus';
import AddCampusForm from './AddCampusForm';

// helper functions for modal
const toggleModal = () => {
  const modal = document.getElementById('add-campus-modal');
  var cancelBtn = document.getElementsByClassName('cancel-btn')[0];
  modal.style.display = 'block';

  cancelBtn.onclick = function() {
    modal.style.display = 'none';
    document.getElementById('add-campus-form').reset();
  };
  window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
  };
  return false;
};

const CampusesList = props => {
  console.log('CampusListProps', props);
  // can pass history for history.push if you need to AddCampusForm
  return (
    <div>
      <div id="campuses-list">
        {props.campuses.map((campus) =>
          <Campus key={campus.id} campus={campus} />)}
      </div>
      <div id="floating-plus-button">
        <div className="plus-button" onClick={toggleModal} />
      </div>
      <div id="add-campus-modal" className="modal">
        <div className="modal-content">
          <div><h1>Add Campus</h1></div>
          <AddCampusForm />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

export default connect(mapStateToProps)(CampusesList);


import React from 'react';
import { connect } from 'react-redux';
import Campus from './Campus';
import AddCampusForm from './AddCampusForm';

// helper function for modal
const displayModal = () => {
  const modal = document.getElementById('add-campus-modal');
  var span = document.getElementsByClassName('close')[0];
  modal.style.display = 'block';

  span.onclick = function() {
      modal.style.display = 'none';
  };
  window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
  };
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
        <div className="plus-button" onClick={displayModal} />
      </div>
      <div id="add-campus-modal" className="modal">
        <div className="modal-content">
          <div><h1>Add Campus</h1></div>
          <AddCampusForm />
          <div className="spacer" />
          <div><span className="close">&times;</span></div>
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


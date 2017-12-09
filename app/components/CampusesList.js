import React from 'react';
import { connect } from 'react-redux';
import Campus from './Campus';

const CampusesList = props => {
  return (
    <div>
      <div id="campuses-list">
        {props.campuses.map((campus) =>
          <Campus key={campus.id} campus={campus} />)}
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


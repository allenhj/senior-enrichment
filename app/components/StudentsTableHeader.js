import React from 'react';
import { connect } from 'react-redux';

const StudentsTableHeader = props => {
  return (
    <div>
      <div id="students-header">
        <div className="header-cell student-id">
          <h3>#</h3>
          <h3 id="id-sort" className="active">^</h3>
        </div>
        <div className="header-cell student-name">
          <h3>Name</h3>
          <h3 id="name-sort" className="inactive">^</h3>
        </div>
        {!props.isCampusView && <div className="header-cell student-campus">
          <h3>Campus</h3>
          <h3 id="campus-sort" className="inactive">^</h3>
        </div>}
        {!props.isCampusView && <div className="header-cell student-remove">
          <h3> Remove </h3>
        </div>}
      </div>
    </div>
  );
};

export default connect()(StudentsTableHeader);

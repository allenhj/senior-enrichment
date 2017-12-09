import React from 'react';
import { connect } from 'react-redux';

const SingleStudent = (props) => {
  return (
    <div>
      <h2>SingleStudent loaded</h2>
    </div>
  );
};

// export default connect()(CampusesList);
export default connect()(SingleStudent);

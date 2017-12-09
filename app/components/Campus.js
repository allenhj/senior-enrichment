import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Campus = (props) => {
  const campus = props.campus;
  return (
    <div className="campus">
      <Link to={`/campuses/${campus.id}`}>
        <div className="planet-container">
          <div className={campus.className} />
        </div>
        <div className="card">
          <h4 className="campus-name">{campus.name}</h4>
          <div className="description">
            <h6>{campus.description}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default connect()(Campus);

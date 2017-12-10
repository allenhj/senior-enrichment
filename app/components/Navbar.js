import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const Navbar = (props) => {
  const path = props.location.pathname.split('/');
  return (
    <header>
      <div id="title">
        Interplanetary Campus Manager
      </div>
      <nav>
        {(path.length > 2 || path[1] === 'students') && <div className="nav-item">
          <Link to="/">Campuses</Link>
        </div>}
        {(path.length > 2 || path[1] !== 'students') && <div className="nav-item">
          <Link to="students" onClick={() => props.history.push('/students')}>Students</Link>
        </div>}
      </nav>
    </header>
  );
};


// export default connect()(CampusesList);
export default withRouter(connect()(Navbar));

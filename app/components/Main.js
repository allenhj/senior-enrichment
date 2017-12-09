import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import CampusesList from './CampusesList';
import StudentsList from './StudentsList';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

import { fetchCampuses } from '../reducers/campusesReducer';
import { fetchStudents } from '../reducers/studentsReducer';

class Main extends Component {
  componentDidMount() {
    this.props.loadCampuses();
    this.props.loadStudents();
  }
  render () {
    return (
      <div>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/campuses" component={CampusesList} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={StudentsList} />
            <Route path="/students/:studentsId" component={SingleStudent} />
            <Redirect to="/campuses" />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCampuses: () => {
      dispatch(fetchCampuses());
    },
    loadStudents: () => {
      dispatch(fetchStudents());
    }
  };
};

const MainContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));

export default MainContainer;

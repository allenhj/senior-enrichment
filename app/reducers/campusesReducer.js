import axios from 'axios';

// action type
const GET_CAMPUSES = 'GET_CAMPUSES';
const EDIT_CAMPUS = 'EDIT_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUSES';

// action creator
const getCampuses = campuses => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

const editCampus = campus => {
  return {
    type: EDIT_CAMPUS,
    campus
  };
};

const deleteCampus = campusId => {
  return {
    type: DELETE_CAMPUS,
    campusId
  };
};

// Get all campuses from the server
export const fetchCampuses = () => {
  return dispatch => {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)))
      .catch(console.error);
  };
};

// Update a campus
export const updateCampus = campus => {
  return dispatch => {
    axios.put(`/api/campuses/${campus.id}`, campus)
    .then(res => res.data)
    .then(editedCampus => dispatch(editCampus(editedCampus)))
    .catch(console.error);
  };
};

// Delete a campus
export const removeCampus = id => {
  return dispatch => {
    axios.delete(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(() => {
      dispatch(deleteCampus(+id)); })
    .catch(console.error);
  };
};

// reducer
const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case EDIT_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.campusId);
    default:
      return state;
  }
};

export default campusesReducer;

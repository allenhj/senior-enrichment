const EDITING_CAMPUS = 'EDITING_CAMPUS';

export const editingCampus = isEditing => {
  return {
    type: EDITING_CAMPUS,
    isEditing
  };
};

const editingCampusReducer = (state = false, action) => {
  if (action.type === EDITING_CAMPUS) return action.isEditing;
  else return state;
};

export default editingCampusReducer;

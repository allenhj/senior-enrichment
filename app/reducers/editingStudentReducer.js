const EDITING_STUDENT = 'EDITING_STUDENT';

export const editingStudent = isEditing => {
  return {
    type: EDITING_STUDENT,
    isEditing
  };
};

const editingStudentReducer = (state = false, action) => {
  if (action.type === EDITING_STUDENT) return action.isEditing;
  else return state;
};

export default editingStudentReducer;

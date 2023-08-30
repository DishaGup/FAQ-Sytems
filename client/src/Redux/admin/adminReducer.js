import { APPROVE_QUESTION_SUCCESS, BAN_USER_SUCCESS } from './adminActions';

const initialState = {
  approveQuestionSuccess: false,
  banUserSuccess: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_QUESTION_SUCCESS:
      return {
        ...state,
        approveQuestionSuccess: true,
      };
    case BAN_USER_SUCCESS:
      return {
        ...state,
        banUserSuccess: true,
      };
    default:
      return state;
  }
};

export default adminReducer;

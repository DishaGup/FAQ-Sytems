import axios from 'axios';

// Action Types
export const APPROVE_QUESTION_SUCCESS = 'APPROVE_QUESTION_SUCCESS';
export const BAN_USER_SUCCESS = 'BAN_USER_SUCCESS';

// Action Creators
export const approveQuestionSuccess = () => ({
  type: APPROVE_QUESTION_SUCCESS,
});

export const banUserSuccess = () => ({
  type: BAN_USER_SUCCESS,
});

// Async Actions
export const approveQuestion = (questionId) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const response = await axios.put(
      `${backend_url}/api/faq/approve/${questionId}`,
      {},
      { headers: { Authorization: `Bearer ${auth.token}` } }
    );
    dispatch(approveQuestionSuccess());
  } catch (error) {
    // Handle error
  }
};

export const banUser = (userId) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const response = await axios.put(
      `${backend_url}/api/faq/ban/${userId}`,
      {},
      { headers: { Authorization: `Bearer ${auth.token}` } }
    );
    dispatch(banUserSuccess());
  } catch (error) {
    // Handle error
  }
};

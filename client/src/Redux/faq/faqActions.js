import axios from 'axios';

// Action Types
export const ASK_QUESTION_SUCCESS = 'ASK_QUESTION_SUCCESS';
export const ANSWER_QUESTION_SUCCESS = 'ANSWER_QUESTION_SUCCESS';

// Action Creators
export const askQuestionSuccess = () => ({
  type: ASK_QUESTION_SUCCESS,
});

export const answerQuestionSuccess = () => ({
  type: ANSWER_QUESTION_SUCCESS,
});

// Async Actions
export const askQuestion = (title, content) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const response = await axios.post(
      `${backend_url}/api/faq/ask`,
      { title, content },
      { headers: { Authorization: `Bearer ${auth.token}` } }
    );
    dispatch(askQuestionSuccess());
  } catch (error) {
    // Handle error
  }
};

export const answerQuestion = (questionId, content) => async (
  dispatch,
  getState
) => {
  try {
    const { auth } = getState();
    const response = await axios.post(
      `${backend_url}/api/faq/answer/${questionId}`,
      { content },
      { headers: { Authorization: `Bearer ${auth.token}` } }
    );
    dispatch(answerQuestionSuccess());
  } catch (error) {
    // Handle error
  }
};

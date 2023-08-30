import { ASK_QUESTION_SUCCESS, ANSWER_QUESTION_SUCCESS } from './faqActions';

const initialState = {
  askQuestionSuccess: false,
  answerQuestionSuccess: false,
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASK_QUESTION_SUCCESS:
      return {
        ...state,
        askQuestionSuccess: true,
      };
    case ANSWER_QUESTION_SUCCESS:
      return {
        ...state,
        answerQuestionSuccess: true,
      };
    default:
      return state;
  }
};

export default faqReducer;

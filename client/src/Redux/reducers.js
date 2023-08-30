import { combineReducers } from 'redux';
import authReducer from './Auth/authReducer';
import faqReducer from './faq/faqReducer';
import adminReducer from './admin/adminReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  faq: faqReducer,
  admin: adminReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FeedbackReducer from "./FeedbackReducer";

const rootReducer = combineReducers({
  AuthReducer,
  FeedbackReducer,
});
export default rootReducer;

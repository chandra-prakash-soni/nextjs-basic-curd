import { ALL_FEEDBACK, ALL_TOPICS, LOGIN, RESPONSE_OK, SIGNUP } from "../action/type";

// Initial state
const initialState = {
  isauth: true
};

// Reducer
const collections = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, signin: action.payload };
    case SIGNUP:
      return { ...state, signUpResponse: action.payload };
    case RESPONSE_OK:
      return { ...state, responseOk: action.payload };
    case ALL_TOPICS:
      return { ...state, alltopics_Response: action.payload };
      case ALL_FEEDBACK:
        return { ...state, allFeedback: action.payload }
    default:
      return state;
  }
};

export default collections;
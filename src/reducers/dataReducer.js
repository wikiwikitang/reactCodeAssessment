import { search_appt, add_appt_succeed } from "../actions/index";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case search_appt:
      return action.payload
    case add_appt_succeed:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default dataReducer;

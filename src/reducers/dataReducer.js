import { search_appt } from "../actions/index";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case search_appt:
      return (state = action.payload);
    default:
      return state;
  }
};

export default dataReducer;

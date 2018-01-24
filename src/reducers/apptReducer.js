import {
  add_appt_succeed,
  close_appt_area,
  open_appt_area
} from "../actions/index";

const apptReducer = (state = false, action) => {
  switch (action.type) {
    case add_appt_succeed:
      return false;
    case open_appt_area:
      return true;
    case close_appt_area:
      return false;
    default:
      return state;
  }
};

export default apptReducer;

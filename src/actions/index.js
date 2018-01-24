import { getAppointments, addAppointment } from "../api/index";
export const add_appt_succeed = "ADD_APPT_SUCCEED";
export const close_appt_area = "CLOSE_APPT_AREA";
export const open_appt_area = "OPEN_APPT_AREA";
export const search_appt = "SEARCH_APPT";

export const addAppt = values => async dispatch => {
  const res = await addAppointment(values);
  dispatch({
    type: add_appt_succeed,
    payload: res
  });
};

export const searchAppt = value => async dispatch => {
  const res = await getAppointments(value);
  dispatch({
    type: search_appt,
    payload: res
  });
};

export const closeApptArea = () => {
  return {
    type: close_appt_area
  };
};

export const openApptArea = () => {
  return {
    type: open_appt_area
  };
};

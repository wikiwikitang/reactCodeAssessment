import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import apptReducer from "./apptReducer";

//form reducer for handling the form operation by redux-form
//data reducer for handling the data coming from the backend API
//appt reduer for handling the show flag
const reducer = combineReducers({
  form: formReducer,
  data: dataReducer,
  appt: apptReducer
});

export default reducer;

import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import apptReducer from "./apptReducer";

const reducer = combineReducers({
  form: formReducer,
  data: dataReducer,
  appt: apptReducer
});

export default reducer;

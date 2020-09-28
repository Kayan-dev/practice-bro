import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import { HomePageSliceReducer } from "./home/reducer";

export default combineReducers({
  appState,
  user,
  HomePageSliceReducer,
});

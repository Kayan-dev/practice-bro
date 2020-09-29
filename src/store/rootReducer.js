import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import { HomePageSliceReducer } from "./home/reducer";
import { StoryReducer } from "./story/reducer";

export default combineReducers({
  appState,
  user,
  HomePageSliceReducer,
  StoryReducer,
});

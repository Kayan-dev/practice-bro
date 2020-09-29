import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";
import thunk from "redux-thunk";

export function startLoading() {
  return {
    type: "LOADING_PAGES",
  };
}

export function fetchStories(listofStories) {
  return {
    type: "FETCHED_STORIES",
    payload: listofStories,
  };
}

export async function detailPages(dispatch, getState) {
  try {
    console.log("FIrst");
    dispatch(appLoading());

    console.log("HeSecondllo");

    const [storyRes, userRes] = await Promise.all([
      axios.get(`${apiUrl}/story`),
      //   axios.get(`${apiUrl}/home/${id}`),
    ]);

    console.log("All STORIES", storyRes.data);
    const lollie = storyRes.data;
    dispatch(appDoneLoading());
    dispatch(
      fetchStories({
        lollie,
        // user: userRes,
      })
    );
    // console.log("USER PAGE", userRes);
  } catch (error) {
    if (error) {
      console.log("WRONG!");
    } else {
      console.log("GOOD?");
    }
  }
}

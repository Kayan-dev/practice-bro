import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";
import thunk from "redux-thunk";

export function startLoading() {
  return {
    type: "LOADING_PAGES",
  };
}

export function postsFetched(listofHomepages) {
  return {
    type: "FETCHED_PAGES",
    payload: listofHomepages,
  };
}

export async function homePages(dispatch, getState) {
  try {
    console.log("And this?");
    dispatch(appLoading());

    console.log("Hello");

    const [pageRes, userRes] = await Promise.all([
      axios.get(`${apiUrl}/home`),
      //   axios.get(`${apiUrl}/home/${id}`),
    ]);

    console.log("All PAGES", pageRes.data);
    const bitch = pageRes.data;

    dispatch(
      postsFetched({
        bitch,
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

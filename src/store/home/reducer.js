const initialState = {
  loading: true,
  doggo: [],
};

export function HomePageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_PAGES": {
      return {
        ...state,
        loading: false,
      };
    }
    case "FETCHED_PAGES": {
      return {
        loading: false,
        doggo: action.payload,
      };
    }

    default:
      return state;
  }
}

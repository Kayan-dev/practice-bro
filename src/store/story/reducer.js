const initialState = {
  loading: true,
  doggo: [],
};

export function StoryReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_PAGES": {
      return {
        ...state,
        loading: false,
      };
    }
    case "FETCHED_STORIES": {
      return {
        loading: false,
        doggo: action.payload,
      };
    }

    default:
      return state;
  }
}

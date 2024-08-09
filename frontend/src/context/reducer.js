import { GET_DATA_TYPE, ON_ERROR, SET_LOADING } from "./types";

export const stateReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA_TYPE:
      return {
        state,
        data: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ON_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { useReducer } from "react";

import { stateReducer } from "./reducer";
import { Context } from "./context";
import { getAllFilesData } from "../services";
import { GET_DATA_TYPE, ON_ERROR, SET_LOADING } from "./types";

const transformToPlainArray = (arr) => {
  let lines = [];

  if (!Array.isArray(arr)) arr = [arr];

  arr.forEach((line) => {
    const toAdd = line.lines.map((ln) => {
      return {
        ...ln,
        filename: line.file,
      };
    });
    lines = [...lines, ...toAdd];
  });

  return lines;
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

  const getData = (filter = "") => {
    dispatch({ type: SET_LOADING, payload: true });
    getAllFilesData(filter)
      .then((resp) => {
        const lines = transformToPlainArray(resp);
        dispatch({ type: GET_DATA_TYPE, payload: lines });
        dispatch({ type: SET_LOADING, payload: false });
      })
      .catch((err) => {
        dispatch({ type: ON_ERROR, payload: true });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        getData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

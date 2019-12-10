import * as actionTypes from "../actions/actionTypes";
import { googleBooksGetListService } from "../../services/googleBooksService";

export const setSearchWord = res => {
  return {
    type: actionTypes.SEARCH_WORD,
    payload: res
  };
};

export const resetSearchWord = () => {
  return {
    type: actionTypes.SEARCH_WORD
  };
};

export const getBooksList = () => {
  return (dispatch, getState) => {
    googleBooksGetListService(getState().searchText).then(res => {
      dispatch({
        type: actionTypes.GET_LIST,
        payload: res.items
      });
    });
  };
};

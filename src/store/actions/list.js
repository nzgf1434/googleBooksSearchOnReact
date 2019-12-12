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
    type: actionTypes.CLEAN_SEARCH
  };
};

export const getBooksList = text => {
  return (dispatch, getState) => {
    if (!!text) {
      googleBooksGetListService(text).then(res => {
        dispatch({
          type: actionTypes.GET_LIST,
          payload: res.items
        });
      });
    }
  };
};

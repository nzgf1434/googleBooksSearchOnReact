import * as actionTypes from "./actionTypes";
import { googleBooksGetBookService } from "../../services/googleBooksService";

export const getItemId = id => {
  return {
    type: actionTypes.GET_ITEM_ID,
    payload: id
  };
};

export const getItem = id => {
  return (dispatch, getState) => {
    if (!!id) {
      googleBooksGetBookService(id).then(res => {
        dispatch({
          type: actionTypes.GET_ITEM,
          payload: res
        });
      });
    }
  };
};

import * as actionTypes from "./actionTypes";

export const getItemId = id => {
  return {
    type: actionTypes.GET_ITEM_ID,
    payload: id
  };
};

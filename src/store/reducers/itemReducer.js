/* eslint-disable default-case */
import * as actionTypes from "../actions/actionTypes";
// import mergeState from "../utilities/mergeState";

const initialState = {
  details: null,
  itemId: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEM:
      return Object.assign({}, state, { details: action.payload });
    case actionTypes.GET_ITEM_ID:
      return Object.assign({}, state, { itemId: action.payload });
  }
  return state;
};

export default reducer;

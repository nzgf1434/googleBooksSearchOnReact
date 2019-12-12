/* eslint-disable default-case */
import * as actionTypes from "../actions/actionTypes";
import mergeState from "../utilities/mergeState";
// todo: review must-have заюзать https://github.com/redux-utilities/redux-actions#usage и написать в ducks стиле
const initialState = {
  details: null,
  itemId: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEM:
      return mergeState(state, { details: action.payload });
    case actionTypes.GET_ITEM_ID:
      return mergeState(state, { itemId: action.payload });
  }
  return state;
};

export default reducer;

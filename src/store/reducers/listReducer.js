/* eslint-disable default-case */
import * as actionTypes from "../actions/actionTypes";
// import mergeState from "../utilities/mergeState";

const initialState = {
  searchText: "",
  itemsBooks: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return Object.assign({}, state, { itemsBooks: action.payload });
    case actionTypes.SEARCH_WORD:
      return Object.assign({}, state, { searchText: action.payload });
    case actionTypes.CLEAN_SEARCH:
      return Object.assign({}, state, { searchText: "", itemsBooks: null });
  }
  return state;
};

export default reducer;

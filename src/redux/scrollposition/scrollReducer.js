import ScrollActionTypes from "./scrollTypes";

const INITIAL_STATE = {
  scrollPosition: 0,
};

const scrollReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScrollActionTypes.SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.payload,
      };
    case ScrollActionTypes.RESET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: 0,
      };
    default:
      return state;
  }
};
export default scrollReducer;

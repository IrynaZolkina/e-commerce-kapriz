import ScrollActionTypes from "./scrollTypes";

export const setScrollPosition = (scrollPosition) => ({
  type: ScrollActionTypes.SET_SCROLL_POSITION,
  payload: scrollPosition,
});

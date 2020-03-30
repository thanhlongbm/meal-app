export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const TOGGLE_FILTER = "TOGGLE_FILTER";

export const toggleFavorite = mealId => {
  return {
    type: TOGGLE_FAVORITE,
    payload: mealId
  };
};

export const toggleFilter = filterData => {
  return {
    type: TOGGLE_FILTER,
    payload: filterData
  };
};

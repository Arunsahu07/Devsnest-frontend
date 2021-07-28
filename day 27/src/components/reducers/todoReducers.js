const todoReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item, idx) => {
        return idx !== action.payload;
      });

    case "LOAD_TODO":
      return action.payload;


    default:
      return state;
  }
};
export default todoReducer;
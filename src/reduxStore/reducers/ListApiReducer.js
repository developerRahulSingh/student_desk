const INITIAL_STATE = {
  bookListData: [],
  loading: false,
};

const ListApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_LIST":
      state.loading = false;
      state.bookListData = action.payload;
      break;
    case "LOADING":
      state.loading = true;
      break;
    default:
      return state;
  }
  return { ...state };
};

export default ListApiReducer;

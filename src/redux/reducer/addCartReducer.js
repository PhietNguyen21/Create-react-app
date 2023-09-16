import { ADD_CART } from "../action/addCartAction";

const initState = {
  count: 0,
  total: 0,
};

const addCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CART: {
      state.count = action.payload.count;
      return {
        ...state,
        count: state.count + 1,
      };
    }

    default:
      return state;
  }
};

export default addCartReducer;

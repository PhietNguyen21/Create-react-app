export const ADD_CART = "ADD_CART";

export const ADD_CART_REDUX = () => {
  return {
    type: ADD_CART,
    payload: {
      count: 10,
      total: 0,
    },
  };
};

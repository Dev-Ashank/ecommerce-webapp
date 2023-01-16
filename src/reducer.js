export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => {
  return cart.reduce((amount, item) => item.price + amount, 0);
};

// Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "Add_to_cart":
      return { ...state, cart: [...state.cart, action.item] };
    case "REMOVE_FROM_CART":
      // return state.cart.filter((item) => item.title !== action.item.title);
      //   const index = state.cart.findIndex((item) => item?.id === action.Id);
      const index2 = state.cart.findIndex(
        (item) => item?.title === action.title
      );
      let newCart = [...state.cart];
      console.log(newCart);
      if (index2 >= 0) {
        newCart.splice(index2, 1);
      } else {
        console.warn(`product not in the cart ${action.title}`);
      }
      return { ...state, cart: newCart };

    case 'EMPTY_CART':
      return {...state,cart:[]}
    default:
      return state;
  }
};
export default reducer;

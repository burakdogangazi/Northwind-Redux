import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      }
      else{
        return [...state,{...action.payload}]
      }
    case actionTypes.REMOVE_FROM_CART:
      const newStateRemove = state.filter(cartItem=>cartItem.product.id!==action.payload.id)
      return newStateRemove;

    default:
      return state;
  }
}

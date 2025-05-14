import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
        // Mutate the state directly.
      state.items.push(action.payload);
      state.totalItems += 1;
    },
    removeItem: (state, action) => {
      // Remove the item from the cart
    // const index = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);
    //   if (index !== -1) {
    //     state.items.splice(index, 1);
    //     state.totalItems -= 1;
    //   }
      // Alternatively, you can use filter to create a new array
      state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
      state.totalItems -= 1;
      
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
   }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
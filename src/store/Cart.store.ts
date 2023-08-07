import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { BookData } from "@/data";

interface BookCart {
  book: BookData
  count: number
}

interface CartState {
  isCartOpen: boolean
  myCart: BookCart[]
}

const initialState: CartState = {
  isCartOpen: false,
  myCart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookInCart: (state, { payload }: PayloadAction<BookData>) => {
      state.myCart = [
        ...state.myCart,
        {
          book: payload,
          count: 1,
        }
      ]
    },
    cleanBookInCart: (state, { payload }: PayloadAction<number>) => {
      state.myCart = state.myCart.filter(
        ({ book }) => book.id !== payload
      )
    },
    decrementCount: (state, {payload}: PayloadAction<number>) => {
      const bookId = state.myCart.findIndex(product => product.book.id === payload)
      state.myCart[bookId].count -= 1
    },
    incrementCount: (state, {payload}: PayloadAction<number>) => {
      const bookId = state.myCart.findIndex(product => product.book.id === payload)
      state.myCart[bookId].count += 1
    },
    handleShowCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
  }
})

export const {
  addBookInCart,
  cleanBookInCart,
  decrementCount,
  incrementCount,
  handleShowCart,
} = cartSlice.actions

export const cartSelect = (state: RootState) => state.cart

export default cartSlice.reducer
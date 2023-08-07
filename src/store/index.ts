import { configureStore } from "@reduxjs/toolkit"
import user from "./User.store"
import cart from "./Cart.store"
import favorite from "./Favorite.store"

export const store = configureStore({
  reducer: {
    user,
    cart,
    favorite,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { BookData } from "@/data";

interface FavoriteState {
  myFavorites: BookData[]
}

const initialState: FavoriteState = {
  myFavorites: [],
}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addNewFavorite: (state, { payload }: PayloadAction<BookData>) => {
      state.myFavorites = [
        ...state.myFavorites, payload
      ]
    },
    removeFavoriteById: (state, { payload }: PayloadAction<number>) => {
      state.myFavorites = state.myFavorites.filter(book => book.id !== payload)
    },
  }
})

export const {
  addNewFavorite,
  removeFavoriteById,
} = favoriteSlice.actions

export const favoriteSelect = (state: RootState) => state.favorite

export default favoriteSlice.reducer

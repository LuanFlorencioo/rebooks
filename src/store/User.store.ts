import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "."

interface UserState {
  firstName: string
  lastName: string
  isDarkTheme: boolean
}

const initialState: UserState = {
  firstName: "John",
  lastName: "Doe",
  isDarkTheme: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
      if (state.isDarkTheme) {
        document.documentElement.classList.add("dark")
      }
      else {
        document.documentElement.classList.remove("dark")
      }
    },
  },
})

export const { toggleTheme } = userSlice.actions;

export const userSelect = (state: RootState) => state.user;

export default userSlice.reducer;

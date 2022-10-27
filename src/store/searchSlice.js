import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchString: '',
  },
  reducers: {
    setSearchString(state, action) {
      console.log('setSearchString');
      state.searchString = action.payload;
    },
    clearSearchString(state) {
      state.searchString = '';
    }
  }
})

export const { setSearchString, clearSearchString } = searchSlice.actions;
export default searchSlice.reducer;
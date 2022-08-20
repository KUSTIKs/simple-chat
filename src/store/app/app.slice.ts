import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from './app.types';

const initialState: AppState = {
  search: '',
};

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;

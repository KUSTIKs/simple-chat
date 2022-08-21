import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Chat } from '@simple-chat/types';

import { AppState } from './app.types';

const initialState: AppState = {
  search: '',
  currentChat: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setChat(state, action: PayloadAction<Chat | null>) {
      state.currentChat = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;

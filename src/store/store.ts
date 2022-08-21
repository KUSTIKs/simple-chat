import { configureStore } from '@reduxjs/toolkit';

import { appReducer, authReducer } from './slices';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

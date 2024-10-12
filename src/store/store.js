import { configureStore } from '@reduxjs/toolkit';
import homeApi from '../api/homeApi';
import passwordApi from '../api/passwordApi';
import appReducer from './slice/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    homeApi.middleware,
    passwordApi.middleware,
  ),
});

export default store;

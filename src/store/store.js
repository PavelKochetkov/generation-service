import { configureStore } from '@reduxjs/toolkit';
import homeApi from '../api/homeApi';
import appReducer from './slice/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    homeApi.middleware,
  ),
});

export default store;

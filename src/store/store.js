import { configureStore } from '@reduxjs/toolkit';
import homeApi from '../api/homeApi';
import passwordApi from '../api/passwordApi';
import updateApi from '../api/updatesApi';
import appReducer from './slice/appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
    [updateApi.reducerPath]: updateApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    homeApi.middleware,
    passwordApi.middleware,
    updateApi.middleware,
  ),
});

export default store;

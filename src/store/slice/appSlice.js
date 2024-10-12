/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import homeApi from '../../api/homeApi';
import passwordApi from '../../api/passwordApi';

const initialState = {
  homeData: null,
  passwordData: null,
  isError: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(homeApi.endpoints.getData.matchPending, (state) => {
        Object.assign(state, {
          isError: false,
          error: null,
        });
      })
      .addMatcher(homeApi.endpoints.getData.matchFulfilled, (state, { payload }) => {
        Object.assign(state, {
          homeData: payload,
          error: null,
          isError: false,
        });
      })
      .addMatcher(homeApi.endpoints.getData.matchRejected, (state, { payload }) => {
        Object.assign(state, {
          isError: true,
          error: payload.status,
        });
      })
      .addMatcher(passwordApi.endpoints.getPasswordPageData.matchPending, (state) => {
        Object.assign(state, {
          isError: false,
          error: null,
        });
      })
      .addMatcher(passwordApi.endpoints.getPasswordPageData.matchFulfilled, (state, { payload }) => {
        Object.assign(state, {
          passwordData: payload,
          error: null,
          isError: false,
        });
      })
      .addMatcher(passwordApi.endpoints.getPasswordPageData.matchRejected, (state, { payload }) => {
        Object.assign(state, {
          isError: true,
          error: payload.status,
        });
      });
  },
});

export const selectIsError = (state) => state.app.isError;
export const selectError = (state) => state.app.error;

export default appSlice.reducer;

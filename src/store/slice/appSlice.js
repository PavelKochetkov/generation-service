import { createSlice } from '@reduxjs/toolkit';
import homeApi from '../../api/homeApi';

const initialState = {
  data: null,
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
          data: payload,
          error: null,
        });
      })
      .addMatcher(homeApi.endpoints.getData.matchRejected, (state, { payload }) => {
        Object.assign(state, {
          isError: true,
          error: payload.status,
        });
      });
  },
});

export const selectIsError = (state) => state.app.isError;
export const selectError = (state) => state.app.error;
export const selectData = (state) => state.app.data;

export default appSlice.reducer;

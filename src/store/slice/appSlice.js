/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import homeApi from '../../api/homeApi';
import passwordApi from '../../api/passwordApi';
import getPassword from '../../utils/getPassword';

const initialState = {
  homeData: null,
  passwordData: null,
  isError: false,
  error: null,
  minPasswordLength: 6,
  maxPasswordLength: 36,
  currentPasswordLength: 6,
  isUpperCase: true,
  isLowerCase: false,
  isNumber: false,
  isSymbol: false,
  password: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPasswordLength: (state, { payload }) => {
      Object.assign(state, {
        currentPasswordLength: payload,
      });
    },
    setCharacterType: (state, { payload }) => {
      const { type, value } = payload;
      Object.assign(state, {
        [type]: value,
      });
    },
    generatePassword: (state, { payload }) => {
      const newPassword = getPassword(payload);
      Object.assign(state, {
        password: newPassword,
      });
    },
  },
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

export const {
  setPasswordLength,
  setCharacterType,
  generatePassword,
} = appSlice.actions;

export const selectPassword = (state) => state.app.password;
export const selectIsError = (state) => state.app.isError;
export const selectError = (state) => state.app.error;
export const selectMinPasswordLength = (state) => state.app.minPasswordLength;
export const selectMaxPasswordLength = (state) => state.app.maxPasswordLength;
export const selectCurrentPasswordLength = (state) => state.app.currentPasswordLength;
export const selectUpperCase = (state) => state.app.isUpperCase;
export const selectLowerCase = (state) => state.app.isLowerCase;
export const selectNumber = (state) => state.app.isNumber;
export const selectSymbol = (state) => state.app.isSymbol;

export default appSlice.reducer;

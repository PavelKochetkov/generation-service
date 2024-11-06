/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import qrCodeImage from '../../assets/JustDoIt.png';
import homeApi from '../../api/homeApi';
import passwordApi from '../../api/passwordApi';
import getPassword from '../../utils/getPassword';
import getRandomNumber from '../../utils/getRandomNumber';

const initialState = {
  homeData: null,
  isHomeDataError: false,
  passwordData: null,
  isPasswordError: false,
  error: null,
  minPasswordLength: 6,
  maxPasswordLength: 36,
  currentPasswordLength: 6,
  isUpperCase: true,
  isLowerCase: false,
  isNumber: false,
  isSymbol: false,
  password: '',
  isPasswordCreated: false,
  isCopied: false,
  resultNumber: 0,
  currentMinNumber: 1,
  currentMaxNumber: 10,
  qrCode: qrCodeImage,
  isActive: false,
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
    setQrCodeUrl: (state, { payload }) => {
      const initialUrl = 'https://api.qrserver.com/v1/create-qr-code?size=200x200';
      const qrCodeUrl = `${initialUrl}&data=${payload}`;
      Object.assign(state, {
        qrCode: qrCodeUrl,
      });
    },
    setActiveMenu: (state) => {
      Object.assign(state, {
        isActive: true,
      });
    },
    setNotActiveMenu: (state) => {
      Object.assign(state, {
        isActive: false,
      });
    },
    generatePassword: (state, { payload }) => {
      const newPassword = getPassword(payload);
      Object.assign(state, {
        password: newPassword,
        isPasswordCreated: true,
      });
    },
    copyPassword: (state) => {
      Object.assign(state, {
        isCopied: true,
      });
    },
    resetCopiedPassword: (state) => {
      Object.assign(state, {
        isCopied: false,
      });
    },
    resetPassword: (state) => {
      Object.assign(state, {
        password: '',
        isPasswordCreated: false,
        currentPasswordLength: 6,
        isUpperCase: true,
        isLowerCase: false,
        isNumber: false,
        isSymbol: false,
        isCopied: false,
      });
    },
    generateNumber: (state, { payload }) => {
      const randomNumber = getRandomNumber(payload);
      Object.assign(state, {
        resultNumber: randomNumber,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(homeApi.endpoints.getData.matchPending, (state) => {
        Object.assign(state, {
          isHomeDataError: false,
          error: null,
        });
      })
      .addMatcher(homeApi.endpoints.getData.matchFulfilled, (state, { payload }) => {
        Object.assign(state, {
          homeData: payload,
          error: null,
          isHomeDataError: false,
        });
      })
      .addMatcher(homeApi.endpoints.getData.matchRejected, (state, { payload }) => {
        Object.assign(state, {
          isHomeDataError: true,
          error: payload.status,
        });
      })
      .addMatcher(passwordApi.endpoints.getPasswordPageData.matchPending, (state) => {
        Object.assign(state, {
          isPasswordError: false,
          error: null,
        });
      })
      .addMatcher(passwordApi.endpoints.getPasswordPageData.matchFulfilled, (state, { payload }) => {
        Object.assign(state, {
          passwordData: payload,
          error: null,
          isPasswordError: false,
        });
      })
      .addMatcher(passwordApi.endpoints.getPasswordPageData.matchRejected, (state, { payload }) => {
        console.log(payload.status);
        Object.assign(state, {
          isPasswordError: true,
          error: payload.status,
        });
      });
  },
});

export const {
  setPasswordLength,
  setCharacterType,
  setQrCodeUrl,
  setActiveMenu,
  setNotActiveMenu,
  generatePassword,
  copyPassword,
  resetPassword,
  resetCopiedPassword,
  generateNumber,
} = appSlice.actions;

export const selectPassword = (state) => state.app.password;
export const selectIsPasswordCreated = (state) => state.app.isPasswordCreated;
export const selectIsCopiedPassword = (state) => state.app.isCopied;
export const selectIsPasswordError = (state) => state.app.isPasswordError;
export const selectError = (state) => state.app.error;
export const selectMinPasswordLength = (state) => state.app.minPasswordLength;
export const selectMaxPasswordLength = (state) => state.app.maxPasswordLength;
export const selectCurrentPasswordLength = (state) => state.app.currentPasswordLength;
export const selectUpperCase = (state) => state.app.isUpperCase;
export const selectLowerCase = (state) => state.app.isLowerCase;
export const selectIsNumber = (state) => state.app.isNumber;
export const selectSymbol = (state) => state.app.isSymbol;
export const selectResultNumber = (state) => state.app.resultNumber;
export const selectCurrentMinNumber = (state) => state.app.currentMinNumber;
export const selectCurrentMaxNumber = (state) => state.app.currentMaxNumber;
export const selectQrCode = (state) => state.app.qrCode;
export const selectIsActive = (state) => state.app.isActive;
export const selectIsHomeDataError = (state) => state.app.isHomeDataError;

export default appSlice.reducer;

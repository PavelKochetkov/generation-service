import React, { useEffect } from 'react';
import '../css/passwordForm.css';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import InputCheckBox from './InputCheckBox';
import InputRange from './InputRange';
import ButtonGetPassword from './ButtonGetPassword';
import ButtonResetPassword from './ButtonResetPassword';
import ButtonCopyPassword from './ButtonCopyPassword';
import copyPasswordToClipBoard from '../utils/copyPasswordToClipboard';
import handleError from '../utils/handleError';
import {
  selectPassword,
  selectIsPasswordCreated,
  selectIsCopiedPassword,
  selectMinPasswordLength,
  selectMaxPasswordLength,
  selectCurrentPasswordLength,
  selectUpperCase,
  selectLowerCase,
  selectIsNumber,
  selectSymbol,
  selectIsPasswordError,
  selectError,
  setCharacterType,
  setPasswordLength,
  generatePassword,
  copyPassword,
  resetPassword,
  resetCopiedPassword,
} from '../store/slice/appSlice';
import Loading from './Loading';

const PasswordForm = (props) => {
  const {
    passwordData,
    isLoading,
  } = props;

  const password = useSelector(selectPassword);
  const isPasswordCreated = useSelector(selectIsPasswordCreated);
  const isCopiedPassword = useSelector(selectIsCopiedPassword);
  const minPasswordLength = useSelector(selectMinPasswordLength);
  const maxPasswordLength = useSelector(selectMaxPasswordLength);
  const currentPasswordLength = useSelector(selectCurrentPasswordLength);
  const isUpperCase = useSelector(selectUpperCase);
  const isLowerCase = useSelector(selectLowerCase);
  const isNumber = useSelector(selectIsNumber);
  const isSymbol = useSelector(selectSymbol);
  const isPasswordError = useSelector(selectIsPasswordError);
  const error = useSelector(selectError);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const errorMessage = handleError(error, t);

  useEffect(() => {
    dispatch(setPasswordLength(minPasswordLength));
  }, [dispatch, minPasswordLength]);

  useEffect(() => {
    if (isCopiedPassword) toast.success(t('toast.copiedPassword'));
  }, [dispatch, isCopiedPassword]);

  const changePasswordLength = (event) => {
    const newLength = Number(event.target.value);
    dispatch(setPasswordLength(newLength));
  };

  const switchUpperCase = (event) => {
    const newCheck = event.target.checked;
    dispatch(setCharacterType({ type: 'isUpperCase', value: newCheck }));
  };

  const switchLowerCase = (event) => {
    const newCheck = event.target.checked;
    dispatch(setCharacterType({ type: 'isLowerCase', value: newCheck }));
  };

  const switchNumberCase = (event) => {
    const newCheck = event.target.checked;
    dispatch(setCharacterType({ type: 'isNumber', value: newCheck }));
  };

  const switchSymbolCase = (event) => {
    const newCheck = event.target.checked;
    dispatch(setCharacterType({ type: 'isSymbol', value: newCheck }));
  };

  const handlePassword = () => {
    dispatch(generatePassword({
      isUpperCase, isLowerCase, isNumber, isSymbol, length: currentPasswordLength,
    }));
  };

  const handleResetPassword = () => {
    dispatch(resetPassword());
  };

  const handleCopyPassword = () => {
    copyPasswordToClipBoard(password)
      .then(() => dispatch(copyPassword()))
      .then(() => dispatch(resetCopiedPassword()));
  };

  return (
    <div className="flex-container">
      <div className="password-container">
        <div className="password">{password}</div>
        <div className="title">{t('passwordPage.setupPassword')}</div>
        <hr />
        <div className="setup">
          <div className="setupRange">
            <InputRange
              min={minPasswordLength}
              max={maxPasswordLength}
              step={1}
              value={currentPasswordLength}
              onChange={changePasswordLength}
              name={t('passwordPage.passwordLength')}
              length={currentPasswordLength}
            />
          </div>
          <div className="setupCheckBox">
            <InputCheckBox
              checked={isUpperCase}
              onChange={switchUpperCase}
              id="upperCase"
              name={t('passwordPage.upperCase')}
            />
            <InputCheckBox
              checked={isLowerCase}
              onChange={switchLowerCase}
              id="lowerCase"
              name={t('passwordPage.lowerCase')}
            />
            <InputCheckBox
              checked={isNumber}
              onChange={switchNumberCase}
              id="lowerCase"
              name={t('passwordPage.numbers')}
            />
            <InputCheckBox
              checked={isSymbol}
              onChange={switchSymbolCase}
              id="lowerCase"
              name={t('passwordPage.symbols')}
            />
          </div>
        </div>
        <ButtonGetPassword
          name={t('passwordPage.getPassword')}
          onClick={handlePassword}
          disabled={!isUpperCase && !isLowerCase && !isNumber && !isSymbol}
        />
        {isPasswordCreated
        && (
        <div className="password-actions">
          <ButtonResetPassword
            name={t('passwordPage.resetPassword')}
            onClick={handleResetPassword}
          />
          <ButtonCopyPassword
            name={t('passwordPage.copyPassword')}
            onClick={handleCopyPassword}
          />
        </div>
        )}
      </div>
      <div className="descriptions">
        <div className="description-title">{t('passwordPage.passwordStrength')}</div>
        {isPasswordError && <div className="er">{errorMessage}</div>}
        {isLoading && <Loading />}
        {passwordData.map((item) => (
          <div key={item.id}>
            <div className="note-title">{item.title}</div>
            <div className="note-description">
              <div className="descr">{item.description}</div>
              <img
                className="logoimg"
                src={item.img}
                alt={item.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordForm;

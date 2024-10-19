import React, { useEffect } from 'react';
import '../css/passwordForm.css';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import InputCheckBox from './InputCheckBox';
import InputRange from './InputRange';
import ButtonGetPassword from './ButtonGetPassword';
import ButtonResetPassword from './ButtonResetPassword';
import copyPasswordToClipBoard from '../utils/copyPasswordToClipboard';
import {
  selectPassword,
  selectIsPassword,
  selectIsCopiedPassword,
  selectMinPasswordLength,
  selectMaxPasswordLength,
  selectCurrentPasswordLength,
  selectUpperCase,
  selectLowerCase,
  selectNumber,
  selectSymbol,
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
  const isPassword = useSelector(selectIsPassword);
  const isCopiedPassword = useSelector(selectIsCopiedPassword);
  const minPasswordLength = useSelector(selectMinPasswordLength);
  const maxPasswordLength = useSelector(selectMaxPasswordLength);
  const currentPasswordLength = useSelector(selectCurrentPasswordLength);
  const isUpperCase = useSelector(selectUpperCase);
  const isLowerCase = useSelector(selectLowerCase);
  const isNumber = useSelector(selectNumber);
  const isSymbol = useSelector(selectSymbol);

  const { t } = useTranslation();
  const dispatch = useDispatch();

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
      <div className="passwordContainer">
        <div className="password">{password}</div>
        {isPassword
        && (
        <button
          className="btn-copy"
          type="button"
          onClick={handleCopyPassword}
        >
          {t('passwordPage.copyPassword')}
        </button>
        )}
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
        />
        {isPassword && <ButtonResetPassword name={t('passwordPage.resetPassword')} onClick={handleResetPassword} />}
      </div>
      <div className="descriptions">
        <div className="descriptionTitle">{t('passwordPage.passwordStrength')}</div>
        {isLoading && <Loading />}
        {passwordData.map((item) => (
          <div key={item.id}>
            <div className="noteTitle">{item.title}</div>
            <div className="noteDescription">
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

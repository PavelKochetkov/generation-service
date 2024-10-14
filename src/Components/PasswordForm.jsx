import React, { useEffect } from 'react';
import '../css/passwordForm.css';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input';
import {
  selectPassword,
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
} from '../store/slice/appSlice';
import Loading from './Loading';

const PasswordForm = (props) => {
  const {
    passwordData,
    isLoading,
  } = props;

  const password = useSelector(selectPassword);
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

  return (
    <div className="flex-container">
      <div className="passwordContainer">
        <div className="password">{password}</div>
        <div className="title">{t('passwordPage.setupPassword')}</div>
        <hr />
        <div className="setup">
          <div className="setupRange">
            <label>
              {t('passwordPage.passwordLength')}
              :
              {' '}
              {currentPasswordLength}
              <input
                type="range"
                id="lengthPassword"
                min={minPasswordLength}
                max={maxPasswordLength}
                step={1}
                value={currentPasswordLength}
                onChange={changePasswordLength}
              />
            </label>
          </div>
          <div className="setupCheckBox">
            <Input
              checked={isUpperCase}
              onChange={switchUpperCase}
              id="upperCase"
              name={t('passwordPage.upperCase')}
            />
            <Input
              checked={isLowerCase}
              onChange={switchLowerCase}
              id="lowerCase"
              name={t('passwordPage.lowerCase')}
            />
            <Input
              checked={isNumber}
              onChange={switchNumberCase}
              id="lowerCase"
              name={t('passwordPage.numbers')}
            />
            <Input
              checked={isSymbol}
              onChange={switchSymbolCase}
              id="lowerCase"
              name={t('passwordPage.symbols')}
            />
          </div>
        </div>
        <button
          className="btn"
          type="button"
          onClick={handlePassword}
        >
          {t('passwordPage.getPassword')}
        </button>
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

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPasswordPageDataQuery } from '../api/passwordApi';
import PasswordForm from '../Components/PasswordForm';
import Header from '../Components/Header';

const Password = () => {
  const { t } = useTranslation();
  const { data: passwordData = [], isLoading } = useGetPasswordPageDataQuery();
  const [lenght, setLenght] = useState(6);
  const handleChangedLenght = (event) => {
    const newLength = parseInt(event.target.value, 10);
    setLenght(newLength);
  };
  const [checkedUpperCase, setCheckedUpperCase] = useState(true);
  const changeCheckBoxUpperCase = () => {
    setCheckedUpperCase(!checkedUpperCase);
  };
  const [checkedLowerCase, setCheckedLowerCase] = useState(false);
  const changeCheckBoxLowerCase = () => {
    setCheckedLowerCase(!checkedLowerCase);
  };
  const [checkedNumber, setCheckedNumber] = useState(false);
  const changeCheckBoxNumber = () => {
    setCheckedNumber(!checkedNumber);
  };
  const [checkedSymbols, setcheckedSymbols] = useState(false);
  const changeCheckBoxSymbols = () => {
    setcheckedSymbols(!checkedSymbols);
  };
  const [password, setPassword] = useState('');
  const generatePassword = () => {
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~', '_'];
    let arrayResult = [];
    if (checkedUpperCase) { arrayResult = arrayResult.concat(upperCase); }
    if (checkedLowerCase) { arrayResult = arrayResult.concat(lowerCase); }
    if (checkedNumber) { arrayResult = arrayResult.concat(numbers); }
    if (checkedSymbols) { arrayResult = arrayResult.concat(symbols); }
    let result = '';
    for (let i = 0; i < lenght; i += 1) {
      result += arrayResult.join('').charAt(Math.floor(Math.random() * arrayResult.length));
    }
    setPassword(result);
  };
  return (
    <>
      <Header title={t('passwordPage.title')} />
      <PasswordForm
        passwordData={passwordData}
        isLoading={isLoading}
        lenght={lenght}
        handleChangedLenght={handleChangedLenght}
        checkedUpperCase={checkedUpperCase}
        changeCheckBoxUpperCase={changeCheckBoxUpperCase}
        checkedLowerCase={checkedLowerCase}
        changeCheckBoxLowerCase={changeCheckBoxLowerCase}
        checkedNumber={checkedNumber}
        changeCheckBoxNumber={changeCheckBoxNumber}
        checkedSymbols={checkedSymbols}
        changeCheckBoxSymbols={changeCheckBoxSymbols}
        generatePassword={generatePassword}
        password={password}
      />
    </>
  );
};

export default Password;

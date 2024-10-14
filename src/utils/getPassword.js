import getArray from './getArray';

const getPassword = ({
  isUpperCase, isLowerCase, isNumber, isSymbol, length,
}) => {
  const upperCase = getArray('UPPER_CASE');
  const lowerCase = getArray('LOWER_CASE');
  const numbers = getArray('NUMBERS');
  const symbols = getArray('SYMBOLS');

  let arrayConcat = [];
  if (isUpperCase) arrayConcat = arrayConcat.concat(upperCase);
  if (isLowerCase) arrayConcat = arrayConcat.concat(lowerCase);
  if (isNumber) arrayConcat = arrayConcat.concat(numbers);
  if (isSymbol) arrayConcat = arrayConcat.concat(symbols);

  let result = '';

  for (let i = 0; i < length; i += 1) {
    result += arrayConcat.join('').charAt(Math.floor(Math.random() * arrayConcat.length));
  }

  return result;
};

export default getPassword;

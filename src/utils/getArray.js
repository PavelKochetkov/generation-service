const ARRAY_TYPE = {
  UPPER_CASE: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  LOWER_CASE: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  NUMBERS: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  SYMBOLS: ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~', '_'],
};

const getArray = (array) => ARRAY_TYPE[array];

export default getArray;

export const alphaMask = (len) => Array.from({ length: len }, () => /^[\w]+$/);
export const onlyLettersWithSpaces = (len) =>
  Array.from({ length: len }, () => /^[a-zA-Z\s]+$/);
export const onlyLettersAndNumbers = (len) =>
  Array.from({ length: len }, () => /^[a-zA-Z0-9]+$/);
export const lettersAndNumbersWithSpaces = (len) =>
  Array.from({ length: len }, () => /^[a-zA-Z0-9\s]+$/);
export const lettersAndNumbersAndAccentsWithSpace = (len) =>
  Array.from({ length: len }, () => /^[a-zA-ZÀ-ÿ\s]*$/g);
export const alphaEmailMask = (len) =>
  Array.from({ length: len }, () => /^[\w@.]+$/);
export const alphaMaskWithSpaces = (len) =>
  Array.from({ length: len }, () => /^[\w\s]+$/);
export const alphaMaskWithPuntuation = (len) =>
  Array.from({ length: len }, () => /^[\w\s.,;!¡:']+$/);
export const numericMask = (len) => Array.from({ length: len }, () => /^\d+$/);
export const hourMask = [
  /^[0-2]+$/,
  /^[0-9]+$/,
  ':',
  /^[0-5]+$/,
  /^[0-9]+$/,
  ':',
  /^[0-5]+$/,
  /^[0-9]+$/,
];
export const cardValidityMask = [
  /^[0-1]+$/,
  /^[0-9]+$/,
  '/',
  /^[0-9]+$/,
  /^[0-9]+$/,
];
export const numericWithDecimalsMask = (numbers, decimals) => [
  ...numericMask(numbers),
  '.',
  ...numericMask(decimals),
];
export const currencyMask = (numbers, decimals) => [
  '$',
  ' ',
  ...numericWithDecimalsMask(numbers, decimals),
];

export const userMask = (len) =>
  Array.from({ length: len }, () => /^[a-zA-Z0-9\-\s]+$/);

export const capitalizeFirstChar = (str) =>
  str.charAt(0).toUpperCase() + str.substring(1);

export const textAreaRegex = new RegExp(
  /[()[\]|&;$%@#"{}¿!¡?^/\\|<>+~=`':*¨°_]/gi
);

export const numericWithoutDecimal = (length) =>
  Array.from({ length }, () => new RegExp(/^[0-9]*$/));

export const onlyLettersUpperCaseWithSpaces = (len) =>
  Array.from({ length: len }, () => /^[A-Z\s]+$/);

export const maskNumberToCleanNumber = (number) => {
  const formatedNumber =
    typeof number === 'string' ? number.replaceAll(',', '') : number;
  const cleanNumber = Number(formatedNumber);
  return cleanNumber;
};

export const removeSpaces = (string) => string.replace(/\s/g, '');

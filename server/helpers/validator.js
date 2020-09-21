
export const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line max-len
    return regEx.test(String(email).toLowerCase());
  };
  
  export const isDuplicate = (arr, stringToCheck) => arr.find(element => element === stringToCheck);
  export const checkLength = (string, length) => string.length >= length;
  export const containLowercase = stringToCheck => (/^(?=.*[a-z])/).test(String(stringToCheck));
  export const containUppercase = stringToCheck => (/^(?=.*[A-Z])/).test(String(stringToCheck));
  export const containNumber = stringToCheck => (/^(?=.*[0-9])/).test(String(stringToCheck));
  export const isEmpty = string => string.trim() === '';

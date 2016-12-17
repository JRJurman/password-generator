/* Action Types */
export const SET_PASSWORD_LENGTH = 'SET_PASSWORD_LENGTH';
export const SET_CAPITAL_OPTION = "SET_CAPITAL_OPTION";
export const SET_SPECIAL_OPTION = "SET_SPECIAL_OPTION";
export const SET_NUMBER_OPTION = "SET_NUMBER_OPTION";

/* Action Creators */
export function setPasswordLength(newPasswordLength) {
  return {
    type: SET_PASSWORD_LENGTH,
    newPasswordLength
  }
}

export function setCaptialOption(captialOption) {
  return {
    type: SET_CAPITAL_OPTION,
    captialOption
  }
}

export function setSpecialOption(specialOption) {
  return {
    type: SET_SPECIAL_OPTION,
    specialOption
  }
}

export function setNumberOption(numberOption) {
  return {
    type: SET_NUMBER_OPTION,
    numberOption
  }
}

/* password generators */
const lowercaseAlpha = function() {
  const randomValue = Math.floor(Math.random()*(26)+97);
  return String.fromCharCode(randomValue);
}

const uppercaseAlpha = function() {
  const randomValue = Math.floor(Math.random()*(26)+65);
  return String.fromCharCode(randomValue);
}

const specialCharacters = function() {
  const randomValue = Math.floor(Math.random()*(13)+33);
  return String.fromCharCode(randomValue);
}

const numbers = function() {
  const randomValue = Math.floor(Math.random()*(10)+48);
  return String.fromCharCode(randomValue);
}

/* reducer */
export default function settings(settings = {
    length: 13,
    options: [lowercaseAlpha],
    captialOption: false,
    specialOption: false,
    numberOption: false
}, action) {
  switch(action.type){
    case SET_PASSWORD_LENGTH:
      return Object.assign({}, settings, { length: action.newPasswordLength });
    case SET_CAPITAL_OPTION:
      let alphaOptions = settings.options;
      if (action.captialOption) {
        alphaOptions = settings.options.concat(uppercaseAlpha);
      } else {
        const uppercaseIndex = settings.options.indexOf(uppercaseAlpha);
        alphaOptions.splice(uppercaseIndex, 1);
      }
      return Object.assign({}, settings, {
        options: alphaOptions,
        captialOption: action.captialOption
      });
    case SET_SPECIAL_OPTION:
      let specialOptions = settings.options;
      if (action.specialOption) {
        specialOptions = settings.options.concat(specialCharacters);
      } else {
        const specialIndex = settings.options.indexOf(specialCharacters);
        specialOptions.splice(specialIndex, 1);
      }
      return Object.assign({}, settings, {
        options: specialOptions,
        specialOption: action.specialOption
      });
    case SET_NUMBER_OPTION:
      let numberOptions = settings.options;
      if (action.numberOption) {
        numberOptions = settings.options.concat(numbers);
      } else {
        const numberIndex = settings.options.indexOf(numbers);
        numberOptions.splice(numberIndex, 1);
      }
      return Object.assign({}, settings, {
        options: numberOptions,
        numberOption: action.numberOption
      });
    default:
      return settings;
  }
}

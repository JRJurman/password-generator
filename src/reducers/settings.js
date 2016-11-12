/* Action Types */
export const SET_PASSWORD_LENGTH = 'SET_PASSWORD_LENGTH';

/* Action Creators */
export function setPasswordLength(newPasswordLength) {
  return {
    type: SET_PASSWORD_LENGTH,
    newPasswordLength
  }
}

export default function settings(settings = {
    length: 13
}, action) {
  switch(action.type){
    case SET_PASSWORD_LENGTH:
      return Object.assign({}, settings, {length: action.newPasswordLength})
    default:
      return settings;
  }
}

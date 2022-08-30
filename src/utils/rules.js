import { testPattern } from 'quasar/src/utils/patterns'

export function requiredRule (value) {
  return !!value || 'This field is required'
}

export function emailRule (value) {
  return !!testPattern.email(value) || 'Email address is invalid'
}

export function phoneNumberRule (value) {
  return /^98[0-9]{10}$/.test(value) || 'Phone number is invalid'
}

export function minLength (value) {
  return (/^(?=.{8,})/.test(value)) || 'Must be at least 8 characters in password length'
}

export function oneLower (value) {
  return (/(?=.*[0-9])/.test(value)) || 'A minimum of 1 lower case letter [a-z] and'
}

export function oneUper (value) {
  return (/(?=.*[!@#\\$%\\^&\\*])/.test(value)) || 'A minimum of 1 upper case letter [A-Z] and'
}

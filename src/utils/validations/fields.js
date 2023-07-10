import * as Yup from 'yup';
import i18n from '@i18n';
import {
  PHONE_LENGTH,
  EMAIL_LENGHT_MAX,
  EMAIL_LENGHT_MIN,
  EMAIL_NOT_VALID,
  USERNAME_LENGHT,
  REQUIRED_MESSAGE,
} from '../constants';

export const cellphone = Yup.string().min(10, PHONE_LENGTH);

export const email = Yup.string()
  .min(5, EMAIL_LENGHT_MIN)
  .max(50, EMAIL_LENGHT_MAX)
  .email(EMAIL_NOT_VALID);

export const getInitialValues = ({ fields = [] }) =>
  Object.values(fields).reduce((acc, value = '') => {
    acc[value] = '';
    return acc;
  }, {});

export const getInitialTouched = ({ fields = [] }) =>
  Object.values(fields).reduce((acc, value) => {
    acc[value] = true;
    return acc;
  }, {});

export const phoneNumber = Yup.string()
  .required(REQUIRED_MESSAGE)
  .min(10, PHONE_LENGTH);

export const uniquePhoneNumber = phoneNumber.test(
  'unique-phone',
  i18n('ERROR__COMMONS__CELLPHONE__NO_UNIQUE'),
  function validate(value) {
    if (!value) return true;
    const { isUniquePhone } = this.parent;
    if (typeof isUniquePhone === 'undefined') return true;
    return isUniquePhone;
  }
);

export const uniqueEmail = email
  .required(REQUIRED_MESSAGE)
  .test(
    'unique-email',
    i18n('ERROR__COMMONS__EMAIL__NO_UNIQUE'),
    function validate(value) {
      if (!value) return true;
      const { isUniqueEmail } = this.parent;
      if (typeof isUniqueEmail === 'undefined') return true;
      return isUniqueEmail;
    }
  );

export const emailSchema = Yup.object().shape({
  email: email.required(REQUIRED_MESSAGE),
});

export const UniqueEmailSchema = Yup.object().shape({
  email: uniqueEmail,
});

export const UniquePhoneSchema = Yup.object().shape({
  cellphone: cellphone.required(REQUIRED_MESSAGE),
});

export const phoneSchema = Yup.object().shape({
  cellphone: phoneNumber,
});

export const username = Yup.string()
  .required(REQUIRED_MESSAGE)
  .min(4, USERNAME_LENGHT);

export const uniqueUsername = username
  .required(REQUIRED_MESSAGE)
  .test(
    'unique-username',
    i18n('ERROR__COMMONS__USERNAME__NO_UNIQUE'),
    function validate(value) {
      if (!value) return true;
      const { isUniqueUsername } = this.parent;
      if (typeof isUniqueUsername === 'undefined') return true;
      return isUniqueUsername;
    }
  );

export const usernameSchema = Yup.object().shape({
  username,
});

export const requiredSearch = (path) =>
  function (value) {
    return value && this.parent[path];
  };

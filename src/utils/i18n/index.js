import esMx from './es-MX-commons.json';

const CODES = {
  MX: 'es-MX',
};

const languages = {
  [CODES.MX]: esMx,
};

const getLocaleCode = () => CODES.MX;

const replaceAllVars = (message, elements) => {
  elements.forEach((element, index) => {
    // eslint-disable-next-line no-param-reassign
    message = message.replace(`%${index + 1}`, element);
  });
  return message;
};

const I18n = (key, replaces = []) => {
  const locale = languages[getLocaleCode()];
  if (replaces.length === 0) return locale[key];
  return replaceAllVars(locale[key], replaces);
};

export default I18n;

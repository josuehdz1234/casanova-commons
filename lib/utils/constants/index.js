"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeZone = exports.acceptedCharacters = exports.YYYY_MM_DD = exports.VOWELS = exports.VEHICLE_BUY_DATE_MESSAGE = exports.USERNAME_LENGHT = exports.UPDATE_DOCUMENT_MESSAGE = exports.SURNAMES_ARTICLES = exports.SHOW_DROPDOWN_MODE = exports.RETURN_DATE_MAJOR_THAN_START = exports.RETURN_DATE_MAJOR_THAN_ONE_HOUR = exports.REQUIRED_MESSAGE = exports.PHONE_LENGTH = exports.OPTIONS_BAR_TYPES = exports.NOT_SUNDAYS = exports.NOT_ALLOWED_NAMES_FIRST_WORD = exports.MX_DATE_FORMAT = exports.JURIDICAL_FIELDS = exports.ISO_DATE_FORMAT = exports.INCONVENIENT_WORDS_REPLACE = exports.INCONVENIENT_WORDS = exports.IDENTITY_DOCUMENT_FIELDS = exports.FULL_DATE_FORMAT = exports.FORMAT_TYPES_ALLOWED_MESSAGE = exports.EMAIL_NOT_VALID = exports.EMAIL_LENGHT_MIN = exports.EMAIL_LENGHT_MAX = exports.DRIVER_LICENSE_FIELDS = exports.CUSTOMER_STATUS = exports.CUSTOMER_PLATFORM = exports.CUSTOMER_INFO_FIELDS = exports.CHARS_TO_REPLACE = exports.BILLING_FIELDS = exports.BAN_FIELDS = exports.AM_PM_DATE_FORMAT = exports.ALLOWED_FORMATS = exports.ADDRESS_FIELDS = void 0;
var _i18n = _interopRequireDefault(require("../i18n"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SHOW_DROPDOWN_MODE = {
  ROW_CLICK: 'row-click',
  POINTS_CLICK: 'points-click'
};
exports.SHOW_DROPDOWN_MODE = SHOW_DROPDOWN_MODE;
var YYYY_MM_DD = 'YYYY-MM-DD';
exports.YYYY_MM_DD = YYYY_MM_DD;
var ISO_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
exports.ISO_DATE_FORMAT = ISO_DATE_FORMAT;
var AM_PM_DATE_FORMAT = 'YYYY-MM-DD HH:mm A';
exports.AM_PM_DATE_FORMAT = AM_PM_DATE_FORMAT;
var FULL_DATE_FORMAT = 'YYYY-MM-DD HH:mm';
exports.FULL_DATE_FORMAT = FULL_DATE_FORMAT;
var MX_DATE_FORMAT = 'DD MMM YYYY HH:mm [hrs]';
exports.MX_DATE_FORMAT = MX_DATE_FORMAT;
var timeZone = 'America/Mexico_City';
exports.timeZone = timeZone;
var VOWELS = ['a', 'e', 'i', 'o', 'u'];
exports.VOWELS = VOWELS;
var REQUIRED_MESSAGE = (0, _i18n["default"])('ERROR__COMMONS__REQUIRED_FIELD');
exports.REQUIRED_MESSAGE = REQUIRED_MESSAGE;
var UPDATE_DOCUMENT_MESSAGE = 'Se debe subir una versión actualizada';
exports.UPDATE_DOCUMENT_MESSAGE = UPDATE_DOCUMENT_MESSAGE;
var ALLOWED_FORMATS = ['pdf', 'png', 'jpg', 'jpeg'];
exports.ALLOWED_FORMATS = ALLOWED_FORMATS;
var FORMAT_TYPES_ALLOWED_MESSAGE = 'Solo se aceptan los formatos jpg, png y pdf';
exports.FORMAT_TYPES_ALLOWED_MESSAGE = FORMAT_TYPES_ALLOWED_MESSAGE;
var VEHICLE_BUY_DATE_MESSAGE = 'La fecha debe ser mayor a la compra del vehiculo';
exports.VEHICLE_BUY_DATE_MESSAGE = VEHICLE_BUY_DATE_MESSAGE;
var PHONE_LENGTH = 'El número teléfonico debe tener 10 digitos';
exports.PHONE_LENGTH = PHONE_LENGTH;
var NOT_SUNDAYS = 'Seleccione otro dia que no sea domingo.';
exports.NOT_SUNDAYS = NOT_SUNDAYS;
var RETURN_DATE_MAJOR_THAN_START = 'La fecha de devolucion no puede ser menor a la de salida.';
exports.RETURN_DATE_MAJOR_THAN_START = RETURN_DATE_MAJOR_THAN_START;
var RETURN_DATE_MAJOR_THAN_ONE_HOUR = 'Debe haber una hora de diferencia como minimo.';
exports.RETURN_DATE_MAJOR_THAN_ONE_HOUR = RETURN_DATE_MAJOR_THAN_ONE_HOUR;
var EMAIL_NOT_VALID = (0, _i18n["default"])('ERROR__COMMONS__EMAIL__INVALID');
exports.EMAIL_NOT_VALID = EMAIL_NOT_VALID;
var EMAIL_LENGHT_MIN = 'El correo debe ser superior a 5 caracteres';
exports.EMAIL_LENGHT_MIN = EMAIL_LENGHT_MIN;
var EMAIL_LENGHT_MAX = 'El correo debe ser inferior a 50 caracteres';
exports.EMAIL_LENGHT_MAX = EMAIL_LENGHT_MAX;
var USERNAME_LENGHT = 'El usuario debe tener un minimo de 4 caracteres';
exports.USERNAME_LENGHT = USERNAME_LENGHT;
var CUSTOMER_STATUS = {
  BANNED: 'BANNED',
  NORMAL: 'NORMAL',
  UNBANED: 'UNBANED',
  BANNED_EDITED: 'BANNED_EDITED'
};
exports.CUSTOMER_STATUS = CUSTOMER_STATUS;
var CUSTOMER_PLATFORM = {
  BATCH: 'batch',
  WEB: 'web',
  MOBILE: 'mobile'
};
exports.CUSTOMER_PLATFORM = CUSTOMER_PLATFORM;
var NOT_ALLOWED_NAMES_FIRST_WORD = ['MARIA', 'MA.', 'MA', 'JOSE', 'J', 'J.'];
exports.NOT_ALLOWED_NAMES_FIRST_WORD = NOT_ALLOWED_NAMES_FIRST_WORD;
var SURNAMES_ARTICLES = ['DA', 'DAS', 'DE', 'DEL', 'DER', 'DI', 'DIE', 'DD', 'EL', 'LA', 'LOS', 'LAS', 'LE', 'LES', 'MAC', 'MC', 'VAN', 'VON', 'Y'];
exports.SURNAMES_ARTICLES = SURNAMES_ARTICLES;
var CHARS_TO_REPLACE = ['/', '-', '.', 'ñ'];
exports.CHARS_TO_REPLACE = CHARS_TO_REPLACE;
var acceptedCharacters = /^[a-zA-ZñÑüÜ\-/.\s]+$/;
exports.acceptedCharacters = acceptedCharacters;
var INCONVENIENT_WORDS = ['BACA', 'BAKA', 'BUEI', 'BUEY', 'CACA', 'CACO', 'CAGA', 'CAGO', 'CAKA', 'CAKO', 'COGE', 'COGI', 'COJA', 'COJE', 'COJI', 'COJO', 'COLA', 'CULO', 'FALO', 'FETO', 'GETA', 'GUEI', 'GUEY', 'JETA', 'JOTO', 'KACA', 'KACO', 'KAGA', 'KAGO', 'KAKA', 'KAKO', 'KOGE', 'KOGI', 'KOJA', 'KOJE', 'KOJI', 'KOJO', 'KOLA', 'KULO', 'LILO', 'LOCO', 'LOKA', 'LOKO', 'MAME', 'MAMO', 'MEAR', 'MEAS', 'MEON', 'MIAR', 'MION', 'MOCO', 'MOKO', 'MULA', 'MULO', 'NACA', 'NACO', 'PEDA', 'PEDO', 'PENE', 'PIPI', 'PITO', 'POPO', 'PUTA', 'PUTO', 'QULO', 'RATA', 'ROBA', 'ROBE', 'ROBO', 'RUIN', 'SENO', 'TETA', 'VACA', 'VAGA', 'VAGO', 'VAKA', 'VUEI', 'VUEY', 'WUEI', 'WUEY'];
exports.INCONVENIENT_WORDS = INCONVENIENT_WORDS;
var INCONVENIENT_WORDS_REPLACE = ['BXCA', 'BXKA', 'BXEI', 'BXEY', 'CXCA', 'CXCO', 'CXGA', 'CXGO', 'CXKA', 'CXKO', 'CXGE', 'CXGI', 'CXJA', 'CXJE', 'CXJI', 'CXJO', 'CXLA', 'CXLO', 'FXLO', 'FXTO', 'GXTA', 'GXEI', 'GXEY', 'JXTA', 'JXTO', 'KXCA', 'KXCO', 'KXGA', 'KXGO', 'KXKA', 'KXKO', 'KXGE', 'KXGI', 'KXJA', 'KXJE', 'KXJI', 'KXJO', 'KXLA', 'KXLO', 'LXLO', 'LXCO', 'LXKA', 'LXKO', 'MXME', 'MXMO', 'MXAR', 'MXAS', 'MXON', 'MXAR', 'MXON', 'MXCO', 'MXKO', 'MXLA', 'MXLO', 'NXCA', 'NXCO', 'PXDA', 'PXDO', 'PXNE', 'PXPI', 'PXTO', 'PXPO', 'PXTA', 'PXTO', 'QXLO', 'RXTA', 'RXBA', 'RXBE', 'RXBO', 'RXIN', 'SXNO', 'TXTA', 'VXCA', 'VXGA', 'VXGO', 'VXKA', 'VXEI', 'VXEY', 'WXEI', 'WXEY'];
exports.INCONVENIENT_WORDS_REPLACE = INCONVENIENT_WORDS_REPLACE;
var ADDRESS_FIELDS = ['street', 'indoorNumber', 'outdoorNumber', 'zipCode', 'state', 'municipality', 'colony', 'addressDocumentType', 'period', 'addressDocument'];
exports.ADDRESS_FIELDS = ADDRESS_FIELDS;
var BILLING_FIELDS = ['socialReason', 'rfc', 'cfdiUse', 'useDefault'];
exports.BILLING_FIELDS = BILLING_FIELDS;
var DRIVER_LICENSE_FIELDS = ['licenseType', 'licenseNumber', 'antiquity', 'expedition', 'validityDriverLicense', 'nationality', 'emissionState', 'licenseFrontSide', 'licenseBackSide'];
exports.DRIVER_LICENSE_FIELDS = DRIVER_LICENSE_FIELDS;
var IDENTITY_DOCUMENT_FIELDS = ['identificationType', 'identificationCode', 'emissionYear', 'validity', 'identificationFrontSide', 'identificationBackSide'];
exports.IDENTITY_DOCUMENT_FIELDS = IDENTITY_DOCUMENT_FIELDS;
var JURIDICAL_FIELDS = ['companySocialReason', 'companyRfc', 'companyFiscalReason'];
exports.JURIDICAL_FIELDS = JURIDICAL_FIELDS;
var CUSTOMER_INFO_FIELDS = ['personType', 'names', 'lastName', 'secondLastName', 'birthDate', 'birthPlace', 'gender', 'curp', 'phoneNumber', 'homeNumber', 'email'];
exports.CUSTOMER_INFO_FIELDS = CUSTOMER_INFO_FIELDS;
var BAN_FIELDS = ['ban', 'contractNumber', 'reason'];
exports.BAN_FIELDS = BAN_FIELDS;
var OPTIONS_BAR_TYPES = {
  DEFAULT: 'DEFAULT',
  CHECK: 'CHECK'
};
exports.OPTIONS_BAR_TYPES = OPTIONS_BAR_TYPES;
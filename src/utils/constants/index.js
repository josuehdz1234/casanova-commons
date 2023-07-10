import i18n from '@i18n';

export const SHOW_DROPDOWN_MODE = {
  ROW_CLICK: 'row-click',
  POINTS_CLICK: 'points-click',
};

export const YYYY_MM_DD = 'YYYY-MM-DD';
export const ISO_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
export const AM_PM_DATE_FORMAT = 'YYYY-MM-DD HH:mm A';
export const FULL_DATE_FORMAT = 'YYYY-MM-DD HH:mm';
export const MX_DATE_FORMAT = 'DD MMM YYYY HH:mm [hrs]';
export const timeZone = 'America/Mexico_City';
export const VOWELS = ['a', 'e', 'i', 'o', 'u'];

export const REQUIRED_MESSAGE = i18n('ERROR__COMMONS__REQUIRED_FIELD');
export const UPDATE_DOCUMENT_MESSAGE = 'Se debe subir una versión actualizada';
export const ALLOWED_FORMATS = ['pdf', 'png', 'jpg', 'jpeg'];
export const FORMAT_TYPES_ALLOWED_MESSAGE =
  'Solo se aceptan los formatos jpg, png y pdf';
export const VEHICLE_BUY_DATE_MESSAGE =
  'La fecha debe ser mayor a la compra del vehiculo';
export const PHONE_LENGTH = 'El número teléfonico debe tener 10 digitos';
export const NOT_SUNDAYS = 'Seleccione otro dia que no sea domingo.';
export const RETURN_DATE_MAJOR_THAN_START =
  'La fecha de devolucion no puede ser menor a la de salida.';
export const RETURN_DATE_MAJOR_THAN_ONE_HOUR =
  'Debe haber una hora de diferencia como minimo.';
export const EMAIL_NOT_VALID = i18n('ERROR__COMMONS__EMAIL__INVALID');
export const EMAIL_LENGHT_MIN = 'El correo debe ser superior a 5 caracteres';
export const EMAIL_LENGHT_MAX = 'El correo debe ser inferior a 50 caracteres';
export const USERNAME_LENGHT =
  'El usuario debe tener un minimo de 4 caracteres';

export const CUSTOMER_STATUS = {
  BANNED: 'BANNED',
  NORMAL: 'NORMAL',
  UNBANED: 'UNBANED',
  BANNED_EDITED: 'BANNED_EDITED',
};

export const CUSTOMER_PLATFORM = {
  BATCH: 'batch',
  WEB: 'web',
  MOBILE: 'mobile',
};

export const NOT_ALLOWED_NAMES_FIRST_WORD = [
  'MARIA',
  'MA.',
  'MA',
  'JOSE',
  'J',
  'J.',
];
export const SURNAMES_ARTICLES = [
  'DA',
  'DAS',
  'DE',
  'DEL',
  'DER',
  'DI',
  'DIE',
  'DD',
  'EL',
  'LA',
  'LOS',
  'LAS',
  'LE',
  'LES',
  'MAC',
  'MC',
  'VAN',
  'VON',
  'Y',
];
export const CHARS_TO_REPLACE = ['/', '-', '.', 'ñ'];
export const acceptedCharacters = /^[a-zA-ZñÑüÜ\-/.\s]+$/;

export const INCONVENIENT_WORDS = [
  'BACA',
  'BAKA',
  'BUEI',
  'BUEY',
  'CACA',
  'CACO',
  'CAGA',
  'CAGO',
  'CAKA',
  'CAKO',
  'COGE',
  'COGI',
  'COJA',
  'COJE',
  'COJI',
  'COJO',
  'COLA',
  'CULO',
  'FALO',
  'FETO',
  'GETA',
  'GUEI',
  'GUEY',
  'JETA',
  'JOTO',
  'KACA',
  'KACO',
  'KAGA',
  'KAGO',
  'KAKA',
  'KAKO',
  'KOGE',
  'KOGI',
  'KOJA',
  'KOJE',
  'KOJI',
  'KOJO',
  'KOLA',
  'KULO',
  'LILO',
  'LOCO',
  'LOKA',
  'LOKO',
  'MAME',
  'MAMO',
  'MEAR',
  'MEAS',
  'MEON',
  'MIAR',
  'MION',
  'MOCO',
  'MOKO',
  'MULA',
  'MULO',
  'NACA',
  'NACO',
  'PEDA',
  'PEDO',
  'PENE',
  'PIPI',
  'PITO',
  'POPO',
  'PUTA',
  'PUTO',
  'QULO',
  'RATA',
  'ROBA',
  'ROBE',
  'ROBO',
  'RUIN',
  'SENO',
  'TETA',
  'VACA',
  'VAGA',
  'VAGO',
  'VAKA',
  'VUEI',
  'VUEY',
  'WUEI',
  'WUEY',
];

export const INCONVENIENT_WORDS_REPLACE = [
  'BXCA',
  'BXKA',
  'BXEI',
  'BXEY',
  'CXCA',
  'CXCO',
  'CXGA',
  'CXGO',
  'CXKA',
  'CXKO',
  'CXGE',
  'CXGI',
  'CXJA',
  'CXJE',
  'CXJI',
  'CXJO',
  'CXLA',
  'CXLO',
  'FXLO',
  'FXTO',
  'GXTA',
  'GXEI',
  'GXEY',
  'JXTA',
  'JXTO',
  'KXCA',
  'KXCO',
  'KXGA',
  'KXGO',
  'KXKA',
  'KXKO',
  'KXGE',
  'KXGI',
  'KXJA',
  'KXJE',
  'KXJI',
  'KXJO',
  'KXLA',
  'KXLO',
  'LXLO',
  'LXCO',
  'LXKA',
  'LXKO',
  'MXME',
  'MXMO',
  'MXAR',
  'MXAS',
  'MXON',
  'MXAR',
  'MXON',
  'MXCO',
  'MXKO',
  'MXLA',
  'MXLO',
  'NXCA',
  'NXCO',
  'PXDA',
  'PXDO',
  'PXNE',
  'PXPI',
  'PXTO',
  'PXPO',
  'PXTA',
  'PXTO',
  'QXLO',
  'RXTA',
  'RXBA',
  'RXBE',
  'RXBO',
  'RXIN',
  'SXNO',
  'TXTA',
  'VXCA',
  'VXGA',
  'VXGO',
  'VXKA',
  'VXEI',
  'VXEY',
  'WXEI',
  'WXEY',
];

export const ADDRESS_FIELDS = [
  'street',
  'indoorNumber',
  'outdoorNumber',
  'zipCode',
  'state',
  'municipality',
  'colony',
  'addressDocumentType',
  'period',
  'addressDocument',
];

export const BILLING_FIELDS = ['socialReason', 'rfc', 'cfdiUse', 'useDefault'];

export const DRIVER_LICENSE_FIELDS = [
  'licenseType',
  'licenseNumber',
  'antiquity',
  'expedition',
  'validityDriverLicense',
  'nationality',
  'emissionState',
  'licenseFrontSide',
  'licenseBackSide',
];

export const IDENTITY_DOCUMENT_FIELDS = [
  'identificationType',
  'identificationCode',
  'emissionYear',
  'validity',
  'identificationFrontSide',
  'identificationBackSide',
];

export const JURIDICAL_FIELDS = [
  'companySocialReason',
  'companyRfc',
  'companyFiscalReason',
];

export const CUSTOMER_INFO_FIELDS = [
  'personType',
  'names',
  'lastName',
  'secondLastName',
  'birthDate',
  'birthPlace',
  'gender',
  'curp',
  'phoneNumber',
  'homeNumber',
  'email',
];

export const BAN_FIELDS = ['ban', 'contractNumber', 'reason'];

export const OPTIONS_BAR_TYPES = {
  DEFAULT: 'DEFAULT',
  CHECK: 'CHECK',
};

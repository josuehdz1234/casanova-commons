export const pdfRule = (file) => file && file.type === 'application/pdf';

export const xmlRule = (file) =>
  file && (file.type === 'application/xml' || file.type === 'text/xml');

export const TEXT_AREA_NOT_ALLOWED_CHARACTERS = /[()[\]|&;$%@#"{}¿!¡?^/\\|<>+~=`':*¨]/g; // NOSONAR
export const TEXT_AREA_NOT_ALLOWED_CHARACTERS_PUNCTUATION_MARKS = /[()[\]|&$%@#"{}^/\\|<>+~=`*¨]/g; // NOSONAR
export const REQUIRED_MESSAGE = 'Este campo es obligatorio.';

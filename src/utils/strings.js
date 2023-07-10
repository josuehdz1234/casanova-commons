export const removeAccents = (string) =>
  string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const removeSpaces = (string) => string.replace(/\s/g, '');

export const getWithHoursFormat = (string) => `${string} HRS`;

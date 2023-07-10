export const days = Array.from({ length: 31 }, (_, i) => i + 1);

export const months = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

export const largueMonths = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const years = Array.from(
  { length: 12 },
  (_, i) => new Date().getFullYear() + 1 - i
);

export const customYears = (numberYears, initialYear) =>
  Array.from({ length: numberYears }, (_, i) => initialYear + 1 - i);

export const weekDays = [
  {
    name: 'Domingo',
    short: 'D',
    isWeekend: true,
  },
  {
    name: 'Lunes',
    short: 'L',
  },
  {
    name: 'Martes',
    short: 'M',
  },
  {
    name: 'Miércoles',
    short: 'M',
  },
  {
    name: 'Jueves',
    short: 'J',
  },
  {
    name: 'Viernes',
    short: 'V',
  },
  {
    name: 'Sábado',
    short: 'S',
    isWeekend: true,
  },
];

export const LIMIT_HOUR_IN_SAME_DAY = '13:00';

export const LIMIT_HOUR_TODAY_NATURAL_DAY = '15:00';

export const LIMIT_HOUR_TODAY_SATURDAY = '10:00';

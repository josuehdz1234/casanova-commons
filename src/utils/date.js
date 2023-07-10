import moment from 'moment';
import 'moment/locale/es';
import { add, subtract } from '@utils/maths';
import { largueMonths, weekDays } from '@utils/constants/dateAndTime';
import VERSIONS from '@utils/constants/versions';
import {
  AM_PM_DATE_FORMAT,
  ISO_DATE_FORMAT,
  MX_DATE_FORMAT,
} from './constants';

moment.locale('es');

export const YYYY_MM_DD = 'YYYY-MM-DD';
export const DD_MM_YYYY_WITH_SCRIPT = 'DD-MM-YYYY';
const MMMM_YYYY = 'MMMM YYYY';
export const timeZone = 'America/Mexico_City';
export const HH_MM = 'HH:mm';
export const SPANISH_FORMAT = 'DD [de] MMMM [de] YYYY';
export const DD_MM_YYYY = 'DD MMM YYYY';

export function pad(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

export function formatDateFromISO(date) {
  const target = new Date(date);
  return `${target.getUTCFullYear()}-${pad(
    target.getUTCMonth() + 1
  )}-${target.getUTCDate()}`;
}

export const generateYearsArray = (initialYear, numberYears, inverse = false) =>
  Array.from({ length: numberYears }, (_, i) =>
    inverse ? initialYear - i : initialYear + i
  ).sort((a, b) => a - b);

export const generateSelectYearsObject = (
  initialYear,
  numberYears,
  inverse = false
) => {
  const years = generateYearsArray(initialYear, numberYears, inverse);
  return years.map((year) => ({ value: year, label: year }));
};

export const generateSelectMonthsObject = (
  initialDate,
  numberOfMonths,
  inverse = false
) => {
  initialDate.setDate(1);

  const dates = Array.from({ length: numberOfMonths + 1 }, (_, i) => i).map(
    (monthsAmount) => {
      const modifiedDate = moment(initialDate);

      if (monthsAmount === 0) {
        return modifiedDate;
      }

      if (inverse) modifiedDate.subtract(monthsAmount, 'month');
      else modifiedDate.add(monthsAmount, 'month');

      return modifiedDate;
    }
  );

  const formatted = dates.map((date) => ({
    value: moment(date).tz(timeZone).format(YYYY_MM_DD),
    label: moment(date).tz(timeZone).format(MMMM_YYYY),
  }));

  return formatted;
};

export const generateHoursSelect = (date, hourStart, hourEnd) => {
  const dateEnd = moment(`${date} ${hourEnd}`, 'YYYY-MM-DD HH:mm');
  const periodDate = moment(`${date} ${hourStart}`, 'YYYY-MM-DD HH:mm');

  const datesList = [];
  while (periodDate <= dateEnd) {
    datesList.push({
      value: periodDate.format('YYYY-MM-DD HH:mm'),
      label: `${periodDate.format('HH:mm')} HRS`,
    });
    periodDate.add(30, 'minutes');
  }
  return datesList;
};

export const formattedDateToPickerV2 = (date) => {
  const newDate = new Date(date);
  const day = moment(newDate).date();
  const year = moment(newDate).year();
  const month = moment(newDate).month() + 1;

  return { year, month, day };
};

export const generateNewDateFromNow = (params = {}, nextYear = true) => {
  const {
    version = VERSIONS.V2,
    years = 1,
    months = new Date().getMonth(),
    day = new Date().getDate(),
  } = params;

  const getNewDate = nextYear ? add : subtract;

  const newYear = getNewDate(new Date().getFullYear(), years);

  const newDate = new Date(new Date().setFullYear(newYear, months, day));

  const newDateByPickerVersion =
    version === VERSIONS.V2 ? formattedDateToPickerV2(newDate) : newDate;

  return newDateByPickerVersion;
};

export const getNextYear = (params) => generateNewDateFromNow(params);

export const getPrevYear = (params) => generateNewDateFromNow(params, false);

export const cleanDate = (date) => {
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0
  );
  return newDate;
};

// Date picker V2
export const spanishLocale = {
  months: largueMonths,
  weekDays,
  weekStartingIndex: 0,
  getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },
  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },
  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },
  transformDigit(digit) {
    return digit;
  },
  nextMonth: 'Siguiente mes',
  previousMonth: 'Mes anterior',
  openMonthSelector: 'Open Month Selector',
  openYearSelector: 'Open Year Selector',
  closeMonthSelector: 'Close Month Selector',
  closeYearSelector: 'Close Year Selector',
  defaultPlaceholder: 'Seleccionar...',
  from: 'desde',
  to: 'hasta',
  digitSeparator: ',',
  yearLetterSkip: 0,
  isRtl: false,
};

export const isToday = (date) => {
  const currentDate = moment(date, YYYY_MM_DD).date();
  const now = moment().date();
  return currentDate === now;
};

export const notSunday = (date) => moment(date, YYYY_MM_DD).weekday() !== 6;

export const generateCalendarMinimumDate = (
  years = 0,
  months = 0,
  days = 0
) => {
  const today = moment().tz(timeZone);
  let minimal = today.subtract(years, 'years');
  minimal = today.subtract(months, 'months');
  minimal = today.subtract(days, 'days');
  const date = minimal.toDate();

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export const generateCalendarMaxDate = (years = 0, months = 0, days = 0) => {
  const today = moment().tz(timeZone);
  let minimal = today.add(years, 'years');
  minimal = today.add(months, 'months');
  minimal = today.add(days, 'days');
  const date = minimal.toDate();

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export const date2CalendarDate = (dateStr) => {
  const momentDate = moment(dateStr, YYYY_MM_DD).tz(timeZone);
  const date = momentDate.toDate();

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export const today2CalendarDate = () => {
  const date = new Date();

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export const generateDateFromValidity = (validity) => {
  const elements = validity.split('/');
  const month = parseInt(elements[0], 10);
  const year = parseInt(elements[1], 10) + 2000;

  return new Date(year, month, 1);
};

export const generateListOfYears = (params = {}) => {
  const { numberOfYears = 8, fullDate = false } = params;

  const years = [];
  const dateStart = moment();
  const dateEnd = moment().subtract(numberOfYears, 'y');

  while (dateEnd.diff(dateStart, 'years') <= 0) {
    years.push(dateStart.format('YYYY'));
    dateStart.subtract(1, 'year');
  }

  return !fullDate ? years : years.map((year) => moment(year));
};

export const transformDateToHour = (hour = '') => `${hour} HRS`;

export const realDate = (date, datetime) => {
  const dateFormatted = moment(date, YYYY_MM_DD);
  const result = moment(datetime, AM_PM_DATE_FORMAT).tz(timeZone);

  result.set({
    year: dateFormatted.year(),
    month: dateFormatted.month(),
    date: dateFormatted.date(),
  });

  return result;
};

export const getCurrentDateByTime = (time) => {
  const currentDate = moment(`${moment().format('YYYY-MM-DD')} ${time}`);
  return currentDate;
};

export const getTimeParts = (time) => {
  if (!time) return [];

  const listOfTime = time.replaceAll(':', ' ').split(' ');

  if (listOfTime.length <= 0) return [];

  const formattedTimeParts = listOfTime.map((timePart) => Number(timePart));
  return formattedTimeParts;
};

export const getDateByTime = (time) => {
  const [hours, minutes, seconds] = getTimeParts(time);

  const currentTime = new Date();

  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);
  currentTime.setSeconds(seconds);

  return currentTime;
};

export const getCleanTime = (time) => {
  if (!time) return '00';

  const timeString = time.toString();

  if (timeString.length < 2) {
    return `0${timeString}`;
  }

  return timeString;
};

export const getCurrentTime = (params = {}) => {
  const {
    incrementHours = 0,
    incrementMinutes = 0,
    incrementSeconds = 0,
  } = params;

  const hour = moment().add('hours', incrementHours).get('hours');
  const cleanHour = getCleanTime(hour);

  const minutes = moment().add('minutes', incrementMinutes).get('minutes');
  const cleanMinutes = getCleanTime(minutes);

  const seconds = moment().add('seconds', incrementSeconds).get('seconds');
  const cleanSeconds = getCleanTime(seconds);

  const currentTime = `${cleanHour}:${cleanMinutes}:${cleanSeconds}`;
  return currentTime;
};

export const formatDateWithTime = (date, time) => {
  const dateWithTime = moment(`${date}T${time}`, ISO_DATE_FORMAT).format(
    MX_DATE_FORMAT
  );

  return dateWithTime;
};

export const getFormattedTzDate = (
  date,
  format = YYYY_MM_DD,
  tz = timeZone
) => {
  moment(date).tz(tz).format(format);
};

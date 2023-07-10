"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date2CalendarDate = exports.cleanDate = exports.YYYY_MM_DD = exports.SPANISH_FORMAT = exports.HH_MM = exports.DD_MM_YYYY_WITH_SCRIPT = exports.DD_MM_YYYY = void 0;
exports.formatDateFromISO = formatDateFromISO;
exports.notSunday = exports.isToday = exports.getTimeParts = exports.getPrevYear = exports.getNextYear = exports.getFormattedTzDate = exports.getDateByTime = exports.getCurrentTime = exports.getCurrentDateByTime = exports.getCleanTime = exports.generateYearsArray = exports.generateSelectYearsObject = exports.generateSelectMonthsObject = exports.generateNewDateFromNow = exports.generateListOfYears = exports.generateHoursSelect = exports.generateDateFromValidity = exports.generateCalendarMinimumDate = exports.generateCalendarMaxDate = exports.formattedDateToPickerV2 = exports.formatDateWithTime = void 0;
exports.pad = pad;
exports.transformDateToHour = exports.today2CalendarDate = exports.timeZone = exports.spanishLocale = exports.realDate = void 0;
var _moment = _interopRequireDefault(require("moment"));
require("moment/locale/es");
var _maths = require("./maths");
var _dateAndTime = require("./constants/dateAndTime");
var _versions = _interopRequireDefault(require("./constants/versions"));
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_moment["default"].locale('es');
var YYYY_MM_DD = 'YYYY-MM-DD';
exports.YYYY_MM_DD = YYYY_MM_DD;
var DD_MM_YYYY_WITH_SCRIPT = 'DD-MM-YYYY';
exports.DD_MM_YYYY_WITH_SCRIPT = DD_MM_YYYY_WITH_SCRIPT;
var MMMM_YYYY = 'MMMM YYYY';
var timeZone = 'America/Mexico_City';
exports.timeZone = timeZone;
var HH_MM = 'HH:mm';
exports.HH_MM = HH_MM;
var SPANISH_FORMAT = 'DD [de] MMMM [de] YYYY';
exports.SPANISH_FORMAT = SPANISH_FORMAT;
var DD_MM_YYYY = 'DD MMM YYYY';
exports.DD_MM_YYYY = DD_MM_YYYY;
function pad(number) {
  if (number < 10) {
    return "0".concat(number);
  }
  return number;
}
function formatDateFromISO(date) {
  var target = new Date(date);
  return "".concat(target.getUTCFullYear(), "-").concat(pad(target.getUTCMonth() + 1), "-").concat(target.getUTCDate());
}
var generateYearsArray = function generateYearsArray(initialYear, numberYears) {
  var inverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return Array.from({
    length: numberYears
  }, function (_, i) {
    return inverse ? initialYear - i : initialYear + i;
  }).sort(function (a, b) {
    return a - b;
  });
};
exports.generateYearsArray = generateYearsArray;
var generateSelectYearsObject = function generateSelectYearsObject(initialYear, numberYears) {
  var inverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var years = generateYearsArray(initialYear, numberYears, inverse);
  return years.map(function (year) {
    return {
      value: year,
      label: year
    };
  });
};
exports.generateSelectYearsObject = generateSelectYearsObject;
var generateSelectMonthsObject = function generateSelectMonthsObject(initialDate, numberOfMonths) {
  var inverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  initialDate.setDate(1);
  var dates = Array.from({
    length: numberOfMonths + 1
  }, function (_, i) {
    return i;
  }).map(function (monthsAmount) {
    var modifiedDate = (0, _moment["default"])(initialDate);
    if (monthsAmount === 0) {
      return modifiedDate;
    }
    if (inverse) modifiedDate.subtract(monthsAmount, 'month');else modifiedDate.add(monthsAmount, 'month');
    return modifiedDate;
  });
  var formatted = dates.map(function (date) {
    return {
      value: (0, _moment["default"])(date).tz(timeZone).format(YYYY_MM_DD),
      label: (0, _moment["default"])(date).tz(timeZone).format(MMMM_YYYY)
    };
  });
  return formatted;
};
exports.generateSelectMonthsObject = generateSelectMonthsObject;
var generateHoursSelect = function generateHoursSelect(date, hourStart, hourEnd) {
  var dateEnd = (0, _moment["default"])("".concat(date, " ").concat(hourEnd), 'YYYY-MM-DD HH:mm');
  var periodDate = (0, _moment["default"])("".concat(date, " ").concat(hourStart), 'YYYY-MM-DD HH:mm');
  var datesList = [];
  while (periodDate <= dateEnd) {
    datesList.push({
      value: periodDate.format('YYYY-MM-DD HH:mm'),
      label: "".concat(periodDate.format('HH:mm'), " HRS")
    });
    periodDate.add(30, 'minutes');
  }
  return datesList;
};
exports.generateHoursSelect = generateHoursSelect;
var formattedDateToPickerV2 = function formattedDateToPickerV2(date) {
  var newDate = new Date(date);
  var day = (0, _moment["default"])(newDate).date();
  var year = (0, _moment["default"])(newDate).year();
  var month = (0, _moment["default"])(newDate).month() + 1;
  return {
    year: year,
    month: month,
    day: day
  };
};
exports.formattedDateToPickerV2 = formattedDateToPickerV2;
var generateNewDateFromNow = function generateNewDateFromNow() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var nextYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var _params$version = params.version,
    version = _params$version === void 0 ? _versions["default"].V2 : _params$version,
    _params$years = params.years,
    years = _params$years === void 0 ? 1 : _params$years,
    _params$months = params.months,
    months = _params$months === void 0 ? new Date().getMonth() : _params$months,
    _params$day = params.day,
    day = _params$day === void 0 ? new Date().getDate() : _params$day;
  var getNewDate = nextYear ? _maths.add : _maths.subtract;
  var newYear = getNewDate(new Date().getFullYear(), years);
  var newDate = new Date(new Date().setFullYear(newYear, months, day));
  var newDateByPickerVersion = version === _versions["default"].V2 ? formattedDateToPickerV2(newDate) : newDate;
  return newDateByPickerVersion;
};
exports.generateNewDateFromNow = generateNewDateFromNow;
var getNextYear = function getNextYear(params) {
  return generateNewDateFromNow(params);
};
exports.getNextYear = getNextYear;
var getPrevYear = function getPrevYear(params) {
  return generateNewDateFromNow(params, false);
};
exports.getPrevYear = getPrevYear;
var cleanDate = function cleanDate(date) {
  var newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  return newDate;
};

// Date picker V2
exports.cleanDate = cleanDate;
var spanishLocale = {
  months: _dateAndTime.largueMonths,
  weekDays: _dateAndTime.weekDays,
  weekStartingIndex: 0,
  getToday: function getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },
  toNativeDate: function toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },
  getMonthLength: function getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },
  transformDigit: function transformDigit(digit) {
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
  isRtl: false
};
exports.spanishLocale = spanishLocale;
var isToday = function isToday(date) {
  var currentDate = (0, _moment["default"])(date, YYYY_MM_DD).date();
  var now = (0, _moment["default"])().date();
  return currentDate === now;
};
exports.isToday = isToday;
var notSunday = function notSunday(date) {
  return (0, _moment["default"])(date, YYYY_MM_DD).weekday() !== 6;
};
exports.notSunday = notSunday;
var generateCalendarMinimumDate = function generateCalendarMinimumDate() {
  var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var months = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var today = (0, _moment["default"])().tz(timeZone);
  var minimal = today.subtract(years, 'years');
  minimal = today.subtract(months, 'months');
  minimal = today.subtract(days, 'days');
  var date = minimal.toDate();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
};
exports.generateCalendarMinimumDate = generateCalendarMinimumDate;
var generateCalendarMaxDate = function generateCalendarMaxDate() {
  var years = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var months = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var today = (0, _moment["default"])().tz(timeZone);
  var minimal = today.add(years, 'years');
  minimal = today.add(months, 'months');
  minimal = today.add(days, 'days');
  var date = minimal.toDate();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
};
exports.generateCalendarMaxDate = generateCalendarMaxDate;
var date2CalendarDate = function date2CalendarDate(dateStr) {
  var momentDate = (0, _moment["default"])(dateStr, YYYY_MM_DD).tz(timeZone);
  var date = momentDate.toDate();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
};
exports.date2CalendarDate = date2CalendarDate;
var today2CalendarDate = function today2CalendarDate() {
  var date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
};
exports.today2CalendarDate = today2CalendarDate;
var generateDateFromValidity = function generateDateFromValidity(validity) {
  var elements = validity.split('/');
  var month = parseInt(elements[0], 10);
  var year = parseInt(elements[1], 10) + 2000;
  return new Date(year, month, 1);
};
exports.generateDateFromValidity = generateDateFromValidity;
var generateListOfYears = function generateListOfYears() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$numberOfYears = params.numberOfYears,
    numberOfYears = _params$numberOfYears === void 0 ? 8 : _params$numberOfYears,
    _params$fullDate = params.fullDate,
    fullDate = _params$fullDate === void 0 ? false : _params$fullDate;
  var years = [];
  var dateStart = (0, _moment["default"])();
  var dateEnd = (0, _moment["default"])().subtract(numberOfYears, 'y');
  while (dateEnd.diff(dateStart, 'years') <= 0) {
    years.push(dateStart.format('YYYY'));
    dateStart.subtract(1, 'year');
  }
  return !fullDate ? years : years.map(function (year) {
    return (0, _moment["default"])(year);
  });
};
exports.generateListOfYears = generateListOfYears;
var transformDateToHour = function transformDateToHour() {
  var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(hour, " HRS");
};
exports.transformDateToHour = transformDateToHour;
var realDate = function realDate(date, datetime) {
  var dateFormatted = (0, _moment["default"])(date, YYYY_MM_DD);
  var result = (0, _moment["default"])(datetime, _constants.AM_PM_DATE_FORMAT).tz(timeZone);
  result.set({
    year: dateFormatted.year(),
    month: dateFormatted.month(),
    date: dateFormatted.date()
  });
  return result;
};
exports.realDate = realDate;
var getCurrentDateByTime = function getCurrentDateByTime(time) {
  var currentDate = (0, _moment["default"])("".concat((0, _moment["default"])().format('YYYY-MM-DD'), " ").concat(time));
  return currentDate;
};
exports.getCurrentDateByTime = getCurrentDateByTime;
var getTimeParts = function getTimeParts(time) {
  if (!time) return [];
  var listOfTime = time.replaceAll(':', ' ').split(' ');
  if (listOfTime.length <= 0) return [];
  var formattedTimeParts = listOfTime.map(function (timePart) {
    return Number(timePart);
  });
  return formattedTimeParts;
};
exports.getTimeParts = getTimeParts;
var getDateByTime = function getDateByTime(time) {
  var _getTimeParts = getTimeParts(time),
    _getTimeParts2 = _slicedToArray(_getTimeParts, 3),
    hours = _getTimeParts2[0],
    minutes = _getTimeParts2[1],
    seconds = _getTimeParts2[2];
  var currentTime = new Date();
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);
  currentTime.setSeconds(seconds);
  return currentTime;
};
exports.getDateByTime = getDateByTime;
var getCleanTime = function getCleanTime(time) {
  if (!time) return '00';
  var timeString = time.toString();
  if (timeString.length < 2) {
    return "0".concat(timeString);
  }
  return timeString;
};
exports.getCleanTime = getCleanTime;
var getCurrentTime = function getCurrentTime() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$incrementHour = params.incrementHours,
    incrementHours = _params$incrementHour === void 0 ? 0 : _params$incrementHour,
    _params$incrementMinu = params.incrementMinutes,
    incrementMinutes = _params$incrementMinu === void 0 ? 0 : _params$incrementMinu,
    _params$incrementSeco = params.incrementSeconds,
    incrementSeconds = _params$incrementSeco === void 0 ? 0 : _params$incrementSeco;
  var hour = (0, _moment["default"])().add('hours', incrementHours).get('hours');
  var cleanHour = getCleanTime(hour);
  var minutes = (0, _moment["default"])().add('minutes', incrementMinutes).get('minutes');
  var cleanMinutes = getCleanTime(minutes);
  var seconds = (0, _moment["default"])().add('seconds', incrementSeconds).get('seconds');
  var cleanSeconds = getCleanTime(seconds);
  var currentTime = "".concat(cleanHour, ":").concat(cleanMinutes, ":").concat(cleanSeconds);
  return currentTime;
};
exports.getCurrentTime = getCurrentTime;
var formatDateWithTime = function formatDateWithTime(date, time) {
  var dateWithTime = (0, _moment["default"])("".concat(date, "T").concat(time), _constants.ISO_DATE_FORMAT).format(_constants.MX_DATE_FORMAT);
  return dateWithTime;
};
exports.formatDateWithTime = formatDateWithTime;
var getFormattedTzDate = function getFormattedTzDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : YYYY_MM_DD;
  var tz = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : timeZone;
  (0, _moment["default"])(date).tz(tz).format(format);
};
exports.getFormattedTzDate = getFormattedTzDate;
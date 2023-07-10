"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.years = exports.weekDays = exports.months = exports.largueMonths = exports.days = exports.customYears = exports.LIMIT_HOUR_TODAY_SATURDAY = exports.LIMIT_HOUR_TODAY_NATURAL_DAY = exports.LIMIT_HOUR_IN_SAME_DAY = void 0;
var days = Array.from({
  length: 31
}, function (_, i) {
  return i + 1;
});
exports.days = days;
var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
exports.months = months;
var largueMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
exports.largueMonths = largueMonths;
var years = Array.from({
  length: 12
}, function (_, i) {
  return new Date().getFullYear() + 1 - i;
});
exports.years = years;
var customYears = function customYears(numberYears, initialYear) {
  return Array.from({
    length: numberYears
  }, function (_, i) {
    return initialYear + 1 - i;
  });
};
exports.customYears = customYears;
var weekDays = [{
  name: 'Domingo',
  "short": 'D',
  isWeekend: true
}, {
  name: 'Lunes',
  "short": 'L'
}, {
  name: 'Martes',
  "short": 'M'
}, {
  name: 'Miércoles',
  "short": 'M'
}, {
  name: 'Jueves',
  "short": 'J'
}, {
  name: 'Viernes',
  "short": 'V'
}, {
  name: 'Sábado',
  "short": 'S',
  isWeekend: true
}];
exports.weekDays = weekDays;
var LIMIT_HOUR_IN_SAME_DAY = '13:00';
exports.LIMIT_HOUR_IN_SAME_DAY = LIMIT_HOUR_IN_SAME_DAY;
var LIMIT_HOUR_TODAY_NATURAL_DAY = '15:00';
exports.LIMIT_HOUR_TODAY_NATURAL_DAY = LIMIT_HOUR_TODAY_NATURAL_DAY;
var LIMIT_HOUR_TODAY_SATURDAY = '10:00';
exports.LIMIT_HOUR_TODAY_SATURDAY = LIMIT_HOUR_TODAY_SATURDAY;
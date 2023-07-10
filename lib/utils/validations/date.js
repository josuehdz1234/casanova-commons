"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareHigherHourTest = void 0;
var _date = require("../date");
var compareHigherHourTest = function compareHigherHourTest(_ref) {
  var principalHour = _ref.principalHour,
    hourToCompare = _ref.hourToCompare,
    _ref$strict = _ref.strict,
    strict = _ref$strict === void 0 ? false : _ref$strict;
  var hourValue = (0, _date.getDateByTime)(principalHour).getHours();
  var currentHour = (0, _date.getDateByTime)(hourToCompare).getHours();
  var minutesValue = (0, _date.getDateByTime)(principalHour).getMinutes();
  var currentMinute = (0, _date.getDateByTime)(hourToCompare).getMinutes();
  var higherHourValue = hourValue >= currentHour;
  var sameHour = hourValue === currentHour;
  var higherMinutesValue = strict ? minutesValue > currentMinute : minutesValue >= currentMinute;
  return sameHour ? higherHourValue && higherMinutesValue : higherHourValue;
};
exports.compareHigherHourTest = compareHigherHourTest;
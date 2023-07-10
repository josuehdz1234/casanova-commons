"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformIdOfList = exports.transformForSelect = exports.transformForRadioGroup = exports.transformForOptionBar = exports.transformDropdownElements = exports.transformDisableSelectOption = exports.replaceElement = exports.getLastSearchField = exports.getFieldSearch = exports.fieldSearch = void 0;
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getObjectProp = function getObjectProp(obj, prop) {
  return prop.split('.').reduce(function (r, e) {
    return r[e];
  }, obj);
};
var transformForSelect = function transformForSelect(elements, value, label) {
  var levels = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _levels$moreLevels = levels.moreLevels,
    moreLevels = _levels$moreLevels === void 0 ? false : _levels$moreLevels,
    _levels$levelsValuesK = levels.levelsValuesKey,
    levelsValuesKey = _levels$levelsValuesK === void 0 ? '' : _levels$levelsValuesK,
    _levels$levelsLabelsK = levels.levelsLabelsKey,
    levelsLabelsKey = _levels$levelsLabelsK === void 0 ? '' : _levels$levelsLabelsK;
  var selectElements = elements.map(function (element) {
    return _objectSpread(_objectSpread({}, element), {}, {
      value: moreLevels ? getObjectProp(element[value], levelsValuesKey) : element[value],
      label: moreLevels ? getObjectProp(element[label], levelsLabelsKey) : element[label]
    });
  });
  return selectElements;
};
exports.transformForSelect = transformForSelect;
var transformIdOfList = function transformIdOfList(list, id) {
  var transformedList = list.map(function () {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var idx = arguments.length > 1 ? arguments[1] : undefined;
    // eslint-disable-next-line no-param-reassign
    element.id = id ? element[id] : idx;
    return element;
  });
  return transformedList;
};
exports.transformIdOfList = transformIdOfList;
var transformForRadioGroup = function transformForRadioGroup(elements, value, label) {
  return elements.map(function (element) {
    return _objectSpread(_objectSpread({}, element), {}, {
      value: Boolean(element[value]),
      label: element[label]
    });
  });
};
exports.transformForRadioGroup = transformForRadioGroup;
var replaceElement = function replaceElement(elements, elementToReplace, elementIdToReplace, valueToCompare) {
  return elements.map(function (element) {
    var sameElement = element[elementIdToReplace] === valueToCompare;
    return sameElement ? elementToReplace : element;
  });
};
exports.replaceElement = replaceElement;
var transformForOptionBar = function transformForOptionBar(_ref) {
  var elements = _ref.elements,
    value = _ref.value,
    label = _ref.label,
    _ref$sub = _ref.sub,
    sub = _ref$sub === void 0 ? '' : _ref$sub,
    _ref$check = _ref.check,
    check = _ref$check === void 0 ? '' : _ref$check,
    _ref$verifyCheck = _ref.verifyCheck,
    verifyCheck = _ref$verifyCheck === void 0 ? null : _ref$verifyCheck;
  return elements.map(function (element) {
    return _objectSpread(_objectSpread({}, element), {}, {
      value: element[value],
      label: element[label],
      sub: sub ? element[sub] : '',
      check: verifyCheck ? verifyCheck(element) : element[check] || ''
    });
  });
};
exports.transformForOptionBar = transformForOptionBar;
var transformDropdownElements = function transformDropdownElements(_ref2) {
  var _ref2$elements = _ref2.elements,
    elements = _ref2$elements === void 0 ? [] : _ref2$elements,
    _ref2$name = _ref2.name,
    name = _ref2$name === void 0 ? 'name' : _ref2$name,
    _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? 'label' : _ref2$label,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? 'disabled' : _ref2$disabled,
    options = _ref2.options;
  return elements.map(function (element) {
    return _objectSpread(_objectSpread({}, element), {}, {
      name: element[name],
      label: element[label],
      disabled: element[disabled],
      options: element[options]
    });
  });
};
exports.transformDropdownElements = transformDropdownElements;
var getFieldSearch = function getFieldSearch() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(field, "_search");
};
exports.getFieldSearch = getFieldSearch;
var fieldSearch = getFieldSearch;
exports.fieldSearch = fieldSearch;
var getLastSearchField = function getLastSearchField() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(field, "_lastSearch");
};
exports.getLastSearchField = getLastSearchField;
var transformDisableSelectOption = function transformDisableSelectOption() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var optionToDisable = arguments.length > 1 ? arguments[1] : undefined;
  if (!optionToDisable) return options;
  var filteredOptions = options.map(function (option) {
    var sameField = option.uuid === optionToDisable;
    if ((0, _isArray2["default"])(optionToDisable)) {
      var disabled = optionToDisable.map(function (current) {
        return (0, _isObject2["default"])(current) ? current.uuid : current;
      }).includes(option.uuid);
      return _objectSpread(_objectSpread({}, option), {}, {
        disabled: disabled
      });
    }
    return _objectSpread(_objectSpread({}, option), {}, {
      disabled: sameField
    });
  });
  return filteredOptions;
};
exports.transformDisableSelectOption = transformDisableSelectOption;
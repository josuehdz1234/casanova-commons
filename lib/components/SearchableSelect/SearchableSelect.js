"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _formik = require("formik");
var _transformHelpers = require("../../utils/transformHelpers");
var _MaskedInput = _interopRequireDefault(require("../../Input/MaskedInput"));
require("./SearchableSelect.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SearchableSelect = function SearchableSelect(props) {
  var initialValue = props.initialValue,
    disabled = props.disabled,
    name = props.name,
    onChange = props.onChange,
    onSearching = props.onSearching,
    placeholder = props.placeholder,
    mask = props.mask,
    icon = props.icon,
    noResultsLabel = props.noResultsLabel,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    infoText = props.infoText;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    elementSelected = _useState4[0],
    setElementSelected = _useState4[1];
  var _useFormikContext = (0, _formik.useFormikContext)(),
    setFieldValue = _useFormikContext.setFieldValue,
    setFieldTouched = _useFormikContext.setFieldTouched;
  var searchField = (0, _transformHelpers.getFieldSearch)(name);
  var lastSearchField = (0, _transformHelpers.getLastSearchField)(name);
  var handleSelection = (0, _react.useCallback)(function (_ref) {
    var value = _ref.value,
      label = _ref.label;
    setFieldValue(name, value);
    setFieldValue(searchField, label);
    setFieldValue(lastSearchField, label);
    setTimeout(function () {
      setFieldTouched(searchField, true);
      setFieldTouched(name, true);
    }, 1);
    setElementSelected(value);
    setOpen(false);
    if (onChange) {
      onChange(value);
    }
  }, [onChange, name, setFieldValue, searchField, lastSearchField]);
  var toogleOpen = (0, _react.useCallback)(function () {
    setOpen(!open);
  }, [open]);
  var handleOpen = (0, _react.useCallback)(function () {
    setOpen(true);
  }, []);
  (0, _react.useEffect)(function () {
    if (initialValue) {
      setFieldValue(searchField, initialValue);
    }
  }, [initialValue, name, setFieldValue]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    setTimeout(function () {
      var target = document.activeElement;
      var focusedElement = target ? target.id || target || target.tagName : '';
      var isFocusedCalendar = focusedElement.className.indexOf('SercheableSelect__options--open') !== -1;
      setOpen(isFocusedCalendar);
      if (props.onBlur) {
        props.onBlur(e);
      }
    }, 1);
  }, [props]);
  var handleOnChange = (0, _react.useCallback)(function (e) {
    if (onSearching) {
      var value = e.target.value;
      onSearching(value);
    }
  }, [onSearching]);

  // Starts classNames block
  var containerCN = (0, _classnames["default"])('SercheableSelect__input', {
    'SercheableSelect__input--open': open
  });
  var calendarCN = (0, _classnames["default"])("SercheableSelect__options", {
    'SercheableSelect__options--open': open
  });
  var iconOpen = open ? 'svg-icon-chevron-up' : 'svg-icon-chevron-down';
  var iconCn = (0, _classnames["default"])("svg-icon", icon || iconOpen);
  var withoutResultsLabel = noResultsLabel || 'No hay resultados';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "SercheableSelect"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: containerCN
  }, /*#__PURE__*/_react["default"].createElement(_MaskedInput["default"], {
    label: props.label,
    type: "text",
    mask: mask,
    placeholder: props.placeholder,
    name: "".concat(props.name, "_search"),
    id: props.id,
    maskPlaceholder: "",
    disabled: disabled,
    onBlur: handleBlur,
    onChange: handleOnChange,
    infoText: infoText,
    right: /*#__PURE__*/_react["default"].createElement("div", {
      onClick: function onClick() {
        return disabled ? {} : toogleOpen();
      },
      onKeyPress: function onKeyPress() {
        return disabled ? {} : toogleOpen();
      },
      role: "button",
      tabIndex: "0",
      className: iconCn
    }),
    onFocus: handleOpen
  })), /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: 0,
    onBlur: function onBlur(e) {
      setOpen(false);
      if (props.onBlur) {
        props.onBlur(_objectSpread({}, e));
      }
    },
    className: calendarCN
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "col-form-label"
  }, placeholder), options && (0, _transformHelpers.transformIdOfList)(options).map(function (_ref2) {
    var value = _ref2.value,
      label = _ref2.label,
      disabled = _ref2.disabled,
      id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: id,
      onClick: function onClick() {
        return disabled ? {} : handleSelection({
          value: value,
          label: label
        });
      },
      className: (0, _classnames["default"])("SercheableSelect__options__element ".concat(disabled ? '__element-disabled' : ''), {
        'SercheableSelect__options__element--selected': value === elementSelected
      })
    }, label);
  }), (!options || options && options.length === 0) && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('SercheableSelect__options__element', '__element-disabled')
  }, withoutResultsLabel)));
};
SearchableSelect.propTypes = {
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
};
SearchableSelect.defaultProps = {
  label: '',
  name: '',
  placeholder: ''
};
var _default = SearchableSelect;
exports["default"] = _default;
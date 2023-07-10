"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@popperjs/core");
var _classnames = _interopRequireDefault(require("classnames"));
var _RadioGroup = _interopRequireDefault(require("../RadioGroup"));
var _config = require("./config");
require("./Dropdown.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function RadioList(props) {
  var name = props.name,
    value = props.value,
    onChange = props.onChange,
    options = props.options;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-inline text-left inline-dropdown-options"
  }, /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
    options: options,
    name: name,
    size: "sm",
    value: value,
    onChange: onChange
  }));
}
function InlineDropdown(props) {
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var item = props.item,
    onSelect = props.onSelect,
    expanded = props.expanded,
    onClickOpen = props.onClickOpen;
  var name = item.name,
    label = item.label,
    options = item.options,
    disabled = item.disabled,
    _item$showExpanded = item.showExpanded,
    showExpanded = _item$showExpanded === void 0 ? true : _item$showExpanded;
  var handleClick = (0, _react.useCallback)(function (evt) {
    return showExpanded ? onClickOpen(evt) : onSelect(item);
  }, [showExpanded, onClickOpen, onSelect, item]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "inline-dropdown"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-dropdown-item ".concat(disabled ? 'my-dropdown-item--disabled' : ''),
    onClick: handleClick,
    "aria-hidden": "true",
    tabIndex: "0",
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement("span", null, label), showExpanded && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '1.5rem',
      lineHeight: '.9'
    }
  }, expanded ? '-' : '+')), showExpanded && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-item-options"
  }, expanded ? /*#__PURE__*/_react["default"].createElement(RadioList, {
    options: options,
    value: value,
    name: name,
    onChange: function onChange(data) {
      setValue(data.value);
      onSelect(data);
    }
  }) : null));
}
var Dropdown = function Dropdown(props) {
  var placement = props.placement,
    onSelect = props.onSelect,
    menuItems = props.menuItems,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$buttonClassNam = props.buttonClassName,
    buttonClassName = _props$buttonClassNam === void 0 ? '' : _props$buttonClassNam,
    _props$isVisible = props.isVisible,
    isVisible = _props$isVisible === void 0 ? false : _props$isVisible,
    _props$onDimmerClick = props.onDimmerClick,
    onDimmerClick = _props$onDimmerClick === void 0 ? function () {} : _props$onDimmerClick,
    _props$children = props.children,
    children = _props$children === void 0 ? null : _props$children,
    _props$withStyles = props.withStyles,
    withStyles = _props$withStyles === void 0 ? true : _props$withStyles;
  var trigger = (0, _react.useRef)();
  var popup = (0, _react.useRef)();
  var arrow = (0, _react.useRef)();
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  var _useState7 = (0, _react.useState)({
      placement: placement
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    params = _useState8[0],
    setParams = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    selected = _useState10[0],
    setSelected = _useState10[1];
  var handleDimmerClick = (0, _react.useCallback)(function () {
    onDimmerClick();
    setShow(false);
    setTimeout(function () {
      setVisible(false);
    }, 100);
  }, [onDimmerClick]);
  var handleContentClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
  }, []);
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    if (e.key === 'Escape') {
      handleDimmerClick();
    }
  }, [handleDimmerClick]);
  var handleClickButton = (0, _react.useCallback)(function () {
    if (!props.disabled) {
      setVisible(!visible);
    }
  }, [props]);
  (0, _react.useEffect)(function () {
    if (arrow.current && (trigger.current || isVisible) && popup.current) {
      document.addEventListener('keydown', handleKeyDown);
      var instance = (0, _core.createPopper)(trigger.current, popup.current, {
        placement: placement,
        modifiers: [].concat(_toConsumableArray(_config.modifiers), [{
          name: 'arrow',
          options: {
            element: arrow.current,
            padding: 25
          }
        }]),
        strategy: 'fixed',
        onFirstUpdate: function onFirstUpdate(state) {
          setParams(state);
          setTimeout(function () {
            setShow(true);
          }, 100);
        }
      });
      return function () {
        if (instance) instance.destroy();
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return function () {};
  }, [visible, isVisible]);
  (0, _react.useEffect)(function () {
    setVisible(isVisible);
  }, [isVisible]);
  var containerClassName = (0, _react.useMemo)(function () {
    var cntClassName = (0, _classnames["default"])(withStyles && 'd-inline-block dropdown-container Dropdown', className);
    return cntClassName;
  }, [className, withStyles]);
  var fullButtonClassName = (0, _react.useMemo)(function () {
    var btnClassName = (0, _classnames["default"])('btn', !children ? 'btn-outline-primary btn-rounded' : '', buttonClassName);
    return withStyles ? btnClassName : undefined;
  }, [children, buttonClassName, withStyles]);
  var popupClassName = (0, _react.useMemo)(function () {
    var popClassName = (0, _classnames["default"])("my-dropdown bs-tooltip-".concat(params.placement), show && 'show');
    return popClassName;
  }, [params.placement, show, popup.current]);
  var childrenHelpers = (0, _react.useMemo)(function () {
    return {
      onClick: handleClickButton,
      ref: trigger
    };
  }, [handleClickButton, trigger]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: containerClassName
  }, children && typeof children === 'function' ? children(childrenHelpers) : /*#__PURE__*/_react["default"].createElement("button", {
    className: fullButtonClassName,
    type: "button",
    ref: trigger,
    onClick: handleClickButton
  }, children || /*#__PURE__*/_react["default"].createElement("span", null, "+")), visible && /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-layer Dropdown__Popup",
    "aria-hidden": "true",
    tabIndex: "0",
    role: "button",
    onClick: handleDimmerClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleContentClick,
    ref: popup,
    className: popupClassName,
    "aria-hidden": "true",
    tabIndex: "0",
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "arrow",
    ref: arrow
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-dropdown-inner"
  }, menuItems.map(function (item) {
    var name = item.name,
      label = item.label;
    return /*#__PURE__*/_react["default"].createElement(InlineDropdown, {
      key: "".concat(name, "_").concat(label),
      onClickOpen: function onClickOpen() {
        return setSelected(name);
      },
      expanded: selected === name,
      onSelect: onSelect,
      item: item
    });
  })))), document.getElementById('portal-root')));
};
Dropdown.propTypes = {
  placement: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  menuItems: _propTypes["default"].arrayOf(_propTypes["default"].object),
  onSelect: _propTypes["default"].func,
  className: _propTypes["default"].string,
  buttonClassName: _propTypes["default"].string,
  isVisible: _propTypes["default"].bool,
  onDimmerClick: _propTypes["default"].func,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  withStyles: _propTypes["default"].bool
};
Dropdown.defaultProps = {
  placement: 'auto',
  disabled: false,
  menuItems: []
};
var _default = Dropdown;
exports["default"] = _default;
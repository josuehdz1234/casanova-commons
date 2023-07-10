"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@popperjs/core");
var _Icons = require("../Icons");
var _Input = _interopRequireDefault(require("../Input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Icon.defaultProps = {
// viewBox: '0 0 24 24',
// }
var popperModifiers = [{
  name: 'offset',
  options: {
    offset: [10, 20]
  }
}, {
  name: 'arrow',
  options: {
    element: arrow.current,
    padding: 25
  }
}, {
  name: 'computeStyles',
  options: {
    gpuAcceleration: false // true by default
  }
}];

var options = [{
  value: 'v1',
  label: 'Sale caamaron'
}, {
  value: 'v2',
  label: 'Sale OPERcaamaron'
}, {
  value: 'v3',
  label: 'Sale CAMEOcaamaron'
}];
function Select(props) {
  var label = props.label,
    name = props.name,
    placement = props.placement;
  var trigger = (0, _react.useRef)();
  var popup = (0, _react.useRef)();
  var arrow = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  var handleDimmerClick = (0, _react.useCallback)(function () {
    setShow(false);
    setTimeout(function () {
      setVisible(false);
    }, 100);
  });
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    if (e.key === 'Escape') {
      handleDimmerClick();
    }
  });
  (0, _react.useEffect)(function () {
    if (arrow.current && trigger.current && popup.current) {
      document.addEventListener('keydown', handleKeyDown);
      var instance = (0, _core.createPopper)(trigger.current, popup.current, {
        placement: placement,
        modifiers: popperModifiers,
        strategy: 'fixed',
        onFirstUpdate: function onFirstUpdate(state) {
          setTimeout(function () {
            setShow(true);
          }, 100);
        }
      });
      return function () {
        if (instance) {
          instance.destroy();
        }
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return function () {};
  }, [visible]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-container"
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    label: label,
    name: name,
    ref: trigger,
    right: /*#__PURE__*/_react["default"].createElement(_Icons.ChevronDown, {
      onClick: function onClick() {
        return setVisible(!visible);
      }
    })
  }), visible && /*#__PURE__*/_react["default"].createElement("div", {
    ref: popup,
    className: "dropdown "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "arrow",
    ref: arrow
  }), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "select dropdown-menu ".concat(show && 'show')
  }, options.map(function (option) {
    var value = option.value,
      label = option.label;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: value,
      className: "dropdown-item"
    }, label);
  }))));
}
Select.propTypes = {
  placement: _propTypes["default"].string
};
Select.defaultProps = {
  placement: 'bottom'
};
var _default = Select;
exports["default"] = _default;
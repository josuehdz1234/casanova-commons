"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _ChevronLeft = _interopRequireDefault(require("../Icons/ChevronLeft"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Breadcrumb(props) {
  var activeRoute = props.activeRoute,
    _props$back = props.back,
    back = _props$back === void 0 ? true : _props$back,
    onBack = props.onBack;
  var history = (0, _reactRouterDom.useHistory)();
  var handleBack = (0, _react.useCallback)(function (evt) {
    if (onBack) onBack(evt);else history.goBack();
  }, [history.goBack, onBack]);
  if (!activeRoute) return null;
  var general = activeRoute.general,
    specific = activeRoute.specific;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, back && /*#__PURE__*/_react["default"].createElement("span", {
    className: _stylesModule["default"].leftBack,
    onClick: handleBack
  }, /*#__PURE__*/_react["default"].createElement(_ChevronLeft["default"], {
    width: "2.20rem",
    height: "2.20rem"
  })), general && /*#__PURE__*/_react["default"].createElement("span", {
    className: _stylesModule["default"].title
  }, " ", general.label, " "), specific && specific.label && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "|", /*#__PURE__*/_react["default"].createElement("span", {
    className: _stylesModule["default"].subTitle
  }, " ", specific.label, " "), ' '));
}
Breadcrumb.propTypes = {
  activeRoute: _propTypes["default"].shape({
    general: _propTypes["default"].shape({
      label: _propTypes["default"].string
    }),
    specific: _propTypes["default"].shape({
      label: _propTypes["default"].string
    })
  })
};
Breadcrumb.defaultProps = {
  activeRoute: {
    general: null,
    specific: null
  }
};
var _default = Breadcrumb;
exports["default"] = _default;
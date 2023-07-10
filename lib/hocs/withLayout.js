"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));
var _Button = _interopRequireDefault(require("../Button"));
var _Layout = _interopRequireDefault(require("../Layout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var withLayout = function withLayout(Component) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var download = args.download,
    aside = args.aside,
    _args$centerClass = args.centerClass,
    centerClass = _args$centerClass === void 0 ? '' : _args$centerClass,
    _args$breadcrumbProps = args.breadcrumbProps,
    breadcrumbProps = _args$breadcrumbProps === void 0 ? {
      back: false
    } : _args$breadcrumbProps,
    _args$withLoader = args.withLoader,
    withLoader = _args$withLoader === void 0 ? true : _args$withLoader,
    _args$className = args.className,
    className = _args$className === void 0 ? '' : _args$className;
  function WrappedChildren(props) {
    var _props$showTitle = props.showTitle,
      showTitle = _props$showTitle === void 0 ? true : _props$showTitle,
      handleClickDownload = props.handleClickDownload;
    var loader = (0, _reactRedux.useSelector)(function (state) {
      return state.commons.loader;
    });
    var activeRoute = (0, _reactRedux.useSelector)(function (state) {
      return state.app.activeRoute;
    });
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showTitle && /*#__PURE__*/_react["default"].createElement(_Layout["default"].Title, {
      label: /*#__PURE__*/_react["default"].createElement(_Breadcrumb["default"], _extends({
        activeRoute: activeRoute
      }, breadcrumbProps)),
      right: download && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: handleClickDownload,
        outline: true
      }, "Descargar informaci\xF3n")
    }), /*#__PURE__*/_react["default"].createElement(_Layout["default"].Body, {
      showLoader: withLoader && loader,
      aside: aside,
      centerClass: centerClass,
      className: className
    }, /*#__PURE__*/_react["default"].createElement(Component, props)));
  }
  return WrappedChildren;
};
var _default = withLayout;
exports["default"] = _default;
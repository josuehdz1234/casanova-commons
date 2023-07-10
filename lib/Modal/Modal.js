"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _branch = _interopRequireDefault(require("recompose/branch"));
var _renderNothing = _interopRequireDefault(require("recompose/renderNothing"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _classnames = _interopRequireDefault(require("classnames"));
var _hooks = require("../hooks");
var _Times = _interopRequireDefault(require("../Icons/Times"));
var _Button = _interopRequireDefault(require("../Button"));
require("./Modal.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Modal(props) {
  var _props$topContainerCl = props.topContainerClassName,
    topContainerClassName = _props$topContainerCl === void 0 ? '' : _props$topContainerCl,
    _props$backdropClassN = props.backdropClassName,
    backdropClassName = _props$backdropClassN === void 0 ? '' : _props$backdropClassN,
    _props$containerClass = props.containerClassName,
    containerClassName = _props$containerClass === void 0 ? '' : _props$containerClass,
    _props$contentClassNa = props.contentClassName,
    contentClassName = _props$contentClassNa === void 0 ? '' : _props$contentClassNa,
    className = props.className,
    open = props.open,
    id = props.id,
    children = props.children,
    header = props.header,
    footer = props.footer,
    onClose = props.onClose,
    closeButton = props.closeButton,
    data = props.data,
    _props$bigModal = props.bigModal,
    bigModal = _props$bigModal === void 0 ? false : _props$bigModal,
    _props$disableScroll = props.disableScroll,
    disableScroll = _props$disableScroll === void 0 ? false : _props$disableScroll;
  (0, _hooks.useScroll)({
    disableScroll: disableScroll
  });
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    if (e.key === 'Escape') {
      onClose(data);
    }
  }, [onClose]);
  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  var handleClose = (0, _react.useCallback)(function () {
    onClose(data);
  }, [onClose]);
  var modalClassNames = (0, _react.useMemo)(function () {
    var topContainer = (0, _classnames["default"])(topContainerClassName);
    var modal = (0, _classnames["default"])('modal', bigModal && 'BigModal', className);
    var container = (0, _classnames["default"])('modal-dialog modal-md modal-dialog-centered', bigModal && 'BigModal__Container', containerClassName);
    var content = (0, _classnames["default"])('modal-content', bigModal && 'BigModal__Content px-4 py-4', contentClassName);
    return {
      topContainer: topContainer,
      container: container,
      content: content,
      modal: modal
    };
  }, [bigModal, topContainerClassName, containerClassName, contentClassName, className]);
  return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClassNames.topContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-backdrop fade show ".concat(backdropClassName)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClassNames.modal,
    id: id,
    role: "dialog",
    style: {
      display: 'block'
    }
  }, closeButton && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    outline: true,
    onClick: handleClose,
    className: "close"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      width: '1rem',
      display: 'inline-block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Times["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClassNames.container,
    role: "document"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClassNames.content
  }, header, children, footer)))), document.getElementById('root'));
}
Modal.propTypes = {
  onClose: _propTypes["default"].func,
  closeButton: _propTypes["default"].bool
};
Modal.defaultProps = {
  onClose: _noop2["default"],
  closeButton: false
};
var _default = (0, _branch["default"])(function (props) {
  return !props.open;
}, _renderNothing["default"])(Modal);
exports["default"] = _default;
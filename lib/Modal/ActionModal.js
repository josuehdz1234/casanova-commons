"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _transformers = require("../utils/transformers");
var _Button = _interopRequireDefault(require("../Button"));
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ActionModal(_ref) {
  var open = _ref.open,
    message = _ref.message,
    id = _ref.id,
    title = _ref.title,
    icon = _ref.icon,
    onClose = _ref.onClose,
    onAction = _ref.onAction,
    actionLabel = _ref.actionLabel,
    modalType = _ref.modalType,
    closeLabel = _ref.closeLabel,
    closeButton = _ref.closeButton,
    code = _ref.code,
    _ref$messageBold = _ref.messageBold,
    messageBold = _ref$messageBold === void 0 ? false : _ref$messageBold,
    _ref$textBold = _ref.textBold,
    textBold = _ref$textBold === void 0 ? '' : _ref$textBold,
    _ref$withBr = _ref.withBr,
    withBr = _ref$withBr === void 0 ? [] : _ref$withBr,
    _ref$subDescription = _ref.subDescription,
    subDescription = _ref$subDescription === void 0 ? '' : _ref$subDescription,
    onClickSubDescription = _ref.onClickSubDescription,
    _ref$topContainerClas = _ref.topContainerClassName,
    topContainerClassName = _ref$topContainerClas === void 0 ? '' : _ref$topContainerClas,
    _ref$backdropClassNam = _ref.backdropClassName,
    backdropClassName = _ref$backdropClassNam === void 0 ? '' : _ref$backdropClassNam;
  var header = /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon"
  }, icon), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "modal-title text-center",
    id: "".concat(id, "-label")
  }, title));
  var footer = /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-footer container"
  }, (modalType === 'action' || !modalType) && modalType !== 'empty' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    block: true,
    outline: true,
    onClick: onClose
  }, closeLabel)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    block: true,
    onClick: onAction
  }, actionLabel))), modalType === 'confirmation' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "offset-3 col-6"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    block: true,
    onClick: onAction
  }, actionLabel))), modalType === 'inverted' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    block: true,
    outline: true,
    onClick: onAction
  }, actionLabel)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    block: true,
    onClick: onClose
  }, closeLabel))));
  return /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    closeButton: closeButton,
    onClose: onClose,
    header: header,
    footer: modalType !== 'empty' ? footer : null,
    className: "action-modal",
    topContainerClassName: topContainerClassName,
    backdropClassName: backdropClassName
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-body"
  }, messageBold && message && textBold ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: (0, _transformers.makeBold)({
        section: message,
        keyword: textBold,
        withBr: withBr
      })
    }
  }) : /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
  }, message), subDescription && /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12 text-center m-0 p-0"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClickSubDescription,
    className: "btn text-secondary m-0 p-0",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center m-0 p-0"
  }, subDescription)))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center modal-code"
  }, code)));
}
ActionModal.defaultProps = {
  closeLabel: 'Cancelar'
};
var _default = ActionModal;
exports["default"] = _default;
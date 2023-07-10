"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactRedux = require("react-redux");
var _reactRouterDom = require("react-router-dom");
var _formik = require("formik");
var Icons = _interopRequireWildcard(require("../Icons"));
var _Button = _interopRequireDefault(require("../Button"));
var _Modal = require("../Modal");
var _excluded = ["loader", "responseDialog", "closeResponseDialog", "IconsResponseDialog", "onCancelPath", "onCancel", "onActionCancel", "onSuccess", "left", "middle", "leftCol", "middleCol", "rightCol", "cancelClass", "continueClass", "confirmationMessage", "disabledSubmit"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var withForm = function withForm(parentProps) {
  var config = (0, _get2["default"])(parentProps, 'config', {});
  var enableReinitialize = (0, _get2["default"])(config, 'enableReinitialize', false);
  var validateOnBlur = (0, _get2["default"])(config, 'validateOnBlur', false);
  var validateOnMount = (0, _get2["default"])(config, 'validateOnBlur', false);
  var showContinue = (0, _get2["default"])(config, 'showContinue', true);
  var showCancel = (0, _get2["default"])(config, 'showCancel', true);
  var validateOnChange = (0, _get2["default"])(config, 'validateOnChange', false);
  var disableOnDirty = (0, _get2["default"])(config, 'disableOnDirty', false);
  var initialTouched = (0, _get2["default"])(config, 'initialTouched', {});
  var btnCancelLabel = (0, _get2["default"])(config, 'btnCancelLabel', 'Cancelar');
  var btnSubmitLabel = (0, _get2["default"])(config, 'btnSubmitLabel', 'Guardar');
  var withButtons = (0, _get2["default"])(config, 'withButtons', true);
  var dialogs = (0, _get2["default"])(config, 'dialogs', {});
  var submitForm = (0, _get2["default"])(config, 'submitForm', function () {
    return console.warn('No submit action defined');
  });
  var textBold = (0, _get2["default"])(config, 'textBold', '');
  var messageBold = (0, _get2["default"])(config, 'messageBold', false);
  var schema = (0, _get2["default"])(config, 'schema', {});
  var onConfigSuccess = (0, _get2["default"])(config, 'onSuccess', null);
  var onSuccessAction = (0, _get2["default"])(config, 'onSuccessAction', null);
  var onClose = (0, _get2["default"])(config, 'onClose', null);
  var onCloseAction = (0, _get2["default"])(config, 'onCloseAction', null);
  var alwaysSetTemporalValues = (0, _get2["default"])(config, 'alwaysSetTemporalValues', false);
  var disableSubmit = (0, _get2["default"])(config, 'disableSubmit', false);
  var handleClickSubmit = (0, _get2["default"])(config, 'handleClickSubmit', null);
  var redirectInSuccess = (0, _get2["default"])(config, 'redirectInSuccess', true);
  var initialShowResponseDialog = (0, _get2["default"])(config, 'disableResponseDialog', true);
  var validateIsValidProp = (0, _get2["default"])(config, 'validateIsValidProp', false);
  var onBeforeSubmit = (0, _get2["default"])(config, 'onBeforeSubmit', function () {});
  return function (Component) {
    return function (_ref) {
      var loader = _ref.loader,
        _ref$responseDialog = _ref.responseDialog,
        responseDialog = _ref$responseDialog === void 0 ? {} : _ref$responseDialog,
        closeResponseDialog = _ref.closeResponseDialog,
        _ref$IconsResponseDia = _ref.IconsResponseDialog,
        IconsResponseDialog = _ref$IconsResponseDia === void 0 ? {
          Success: null,
          Error: null
        } : _ref$IconsResponseDia,
        onCancelPath = _ref.onCancelPath,
        onCancel = _ref.onCancel,
        _ref$onActionCancel = _ref.onActionCancel,
        onActionCancel = _ref$onActionCancel === void 0 ? null : _ref$onActionCancel,
        onSuccess = _ref.onSuccess,
        left = _ref.left,
        middle = _ref.middle,
        _ref$leftCol = _ref.leftCol,
        leftCol = _ref$leftCol === void 0 ? '4' : _ref$leftCol,
        _ref$middleCol = _ref.middleCol,
        middleCol = _ref$middleCol === void 0 ? '4' : _ref$middleCol,
        _ref$rightCol = _ref.rightCol,
        rightCol = _ref$rightCol === void 0 ? '4' : _ref$rightCol,
        _ref$cancelClass = _ref.cancelClass,
        cancelClass = _ref$cancelClass === void 0 ? '' : _ref$cancelClass,
        _ref$continueClass = _ref.continueClass,
        continueClass = _ref$continueClass === void 0 ? '' : _ref$continueClass,
        _ref$confirmationMess = _ref.confirmationMessage,
        confirmationMessage = _ref$confirmationMess === void 0 ? true : _ref$confirmationMess,
        _ref$disabledSubmit = _ref.disabledSubmit,
        disabledFormikSubmit = _ref$disabledSubmit === void 0 ? null : _ref$disabledSubmit,
        rest = _objectWithoutProperties(_ref, _excluded);
      var onCancelPathWrapper = onCancelPath || '/vehicle';
      var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        submitted = _useState2[0],
        setSubmitted = _useState2[1];
      var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        openConfirmationMessage = _useState4[0],
        setOpenConfirmationMessage = _useState4[1];
      var _useState5 = (0, _react.useState)({}),
        _useState6 = _slicedToArray(_useState5, 2),
        temporalValues = _useState6[0],
        setTemporalValues = _useState6[1];
      var _useState7 = (0, _react.useState)({}),
        _useState8 = _slicedToArray(_useState7, 2),
        detailValues = _useState8[0],
        setDetailValues = _useState8[1];
      var _useState9 = (0, _react.useState)(false),
        _useState10 = _slicedToArray(_useState9, 2),
        withInitialValues = _useState10[0],
        setWithInitialValues = _useState10[1];
      var _useState11 = (0, _react.useState)(initialShowResponseDialog),
        _useState12 = _slicedToArray(_useState11, 2),
        showResponseDialog = _useState12[0],
        setShowResponseDialog = _useState12[1];
      var _useState13 = (0, _react.useState)(initialTouched),
        _useState14 = _slicedToArray(_useState13, 2),
        fieldsTouched = _useState14[0],
        setFieldsTouched = _useState14[1];
      var dispatch = (0, _reactRedux.useDispatch)();
      var history = (0, _reactRouterDom.useHistory)();
      var handleDefaultCancel = (0, _react.useCallback)(function () {
        history.push(onCancelPathWrapper);
        if (onCloseAction) dispatch(onCloseAction());
      }, [history, onCancelPathWrapper, dispatch]);
      var getCancelWrapper = (0, _react.useCallback)(function () {
        if (onActionCancel) {
          return dispatch(onActionCancel());
        }
        return onCancel || handleDefaultCancel;
      }, [dispatch, onActionCancel, onCancel, handleDefaultCancel]);
      var onCancelWrapper = getCancelWrapper();
      var handleFormik = (0, _react.useCallback)(function (values) {
        onBeforeSubmit(values);
        if (alwaysSetTemporalValues) {
          setTemporalValues(values);
        }
        if (confirmationMessage) {
          setOpenConfirmationMessage(true);
          setTemporalValues(values);
        } else {
          var request = config.formatter ? config.formatter(values, detailValues) : values;
          dispatch(submitForm(request));
        }
      }, [confirmationMessage, dispatch, detailValues, submitForm, onBeforeSubmit]);
      var handleValidation = (0, _react.useCallback)(function (values) {
        try {
          var context = {
            initialValues: withInitialValues ? detailValues : undefined
          };
          (0, _formik.validateYupSchema)(values, schema, true, context);
        } catch (error) {
          return (0, _formik.yupToFormErrors)(error);
        }
      }, [withInitialValues, detailValues, schema]);
      var handleConfirmAction = (0, _react.useCallback)(function () {
        if (responseDialog.closeInConfirmation) {
          closeResponseDialog();
          return;
        }
        var request = config.formatter ? config.formatter(temporalValues, detailValues) : temporalValues;
        setOpenConfirmationMessage(false);
        dispatch(submitForm(request));
      }, [temporalValues, dispatch, detailValues, submitForm, responseDialog, closeResponseDialog]);
      var handleCancelAction = (0, _react.useCallback)(function () {
        if (onClose) onClose();
        setOpenConfirmationMessage(false);
        setTemporalValues({});
      }, [onClose]);
      var handleSuccessAction = (0, _react.useCallback)(function () {
        closeResponseDialog();
        if (dialogs.response.successPath === 'refresh') {
          window.location.reload();
        } else {
          var handleSuccess = onConfigSuccess || onSuccess;
          if (handleSuccess) handleSuccess(temporalValues);
          if (onSuccessAction) dispatch(onSuccessAction(temporalValues));
          if (redirectInSuccess) history.push(dialogs.response.successPath);
        }
      }, [closeResponseDialog, dialogs, history.push, temporalValues, onSuccess, onConfigSuccess, onSuccessAction, redirectInSuccess]);
      var finalInitialValues = (0, _react.useMemo)(function () {
        return !withInitialValues ? config.initialValues : _objectSpread(_objectSpread({}, config.initialValues), detailValues);
      }, [config.initialValues, withInitialValues, detailValues]);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Modal.ActionModal, {
        open: openConfirmationMessage,
        icon: IconsResponseDialog.Warning ? /*#__PURE__*/_react["default"].createElement(IconsResponseDialog.Warning, null) : /*#__PURE__*/_react["default"].createElement(Icons.StatusWarning, null),
        onClose: handleCancelAction,
        onAction: handleConfirmAction,
        title: dialogs.confirmation.title,
        actionLabel: dialogs.confirmation.actionLabel,
        closeButton: true,
        message: dialogs.confirmation.message || '',
        textBold: textBold,
        messageBold: messageBold
      }), responseDialog && showResponseDialog && /*#__PURE__*/_react["default"].createElement(_Modal.ActionModal, {
        open: responseDialog.open,
        icon: responseDialog.success ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, IconsResponseDialog.Success ? /*#__PURE__*/_react["default"].createElement(IconsResponseDialog.Success, null) : /*#__PURE__*/_react["default"].createElement(Icons.IcoCarOk, null)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, IconsResponseDialog.Error ? /*#__PURE__*/_react["default"].createElement(IconsResponseDialog.Error, null) : /*#__PURE__*/_react["default"].createElement(Icons.IcoCarError, null)),
        onClose: closeResponseDialog,
        onAction: responseDialog.success ? handleSuccessAction : handleConfirmAction,
        title: responseDialog.success ? dialogs.response.successTitle : dialogs.response.errorTitle,
        actionLabel: responseDialog.success ? responseDialog.successLabel || dialogs.response.successLabel : responseDialog.errorLabel || dialogs.response.errorLabel,
        message: responseDialog.success ? dialogs.response.successMessage : responseDialog.message,
        modalType: responseDialog.modalType || 'confirmation',
        code: responseDialog.errorCode,
        closeButton: true,
        textBold: textBold,
        messageBold: messageBold
      }), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
        initialValues: finalInitialValues,
        validate: handleValidation,
        validateOnChange: validateOnChange,
        validateOnBlur: validateOnBlur,
        validateOnMount: validateOnMount,
        enableReinitialize: enableReinitialize,
        onSubmit: handleFormik,
        initialTouched: submitted ? fieldsTouched : {}
      }, function (formikProps) {
        var values = formikProps.values,
          initialValues = formikProps.initialValues,
          handleSubmit = formikProps.handleSubmit,
          dirty = formikProps.dirty,
          isValid = formikProps.isValid;
        var shouldDisabledSubmit = function shouldDisabledSubmit() {
          if (disabledFormikSubmit !== null) return disabledFormikSubmit;
          return validateIsValidProp ? !isValid : disableOnDirty && !dirty;
        };
        var handleUpdateFormValues = (0, _react.useCallback)(function (fullValues) {
          var shouldFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var setInitialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var newValues = config.transformer && shouldFormat ? config.transformer(fullValues) : fullValues;
          setWithInitialValues(setInitialValues);
          setDetailValues(newValues);
        }, [config.transformer]);
        var cancelCls = (0, _classnames["default"])(!showContinue && !cancelClass && 'offset-6', cancelClass || 'col-12 col-sm-6 mb-2 mb-sm-0 pl-0');
        var continueCls = (0, _classnames["default"])(continueClass || 'col-12 col-sm-6 pl-0');
        var bottom = /*#__PURE__*/_react["default"].createElement("div", {
          className: "row mb-3"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "col-md-".concat(leftCol)
        }, left || /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
          style: {
            marginRight: '1rem'
          }
        }, /*#__PURE__*/_react["default"].createElement(Icons.Coment, {
          height: "2rem"
        })), "* Campos obligatorios.")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "col-md-".concat(middleCol)
        }, middle), /*#__PURE__*/_react["default"].createElement("div", {
          className: "col-md-".concat(rightCol, " text-right pl-0")
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "row"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: cancelCls
        }, showCancel && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          onClick: function onClick() {
            return onCancelWrapper(formikProps);
          },
          outline: true,
          block: true
        }, btnCancelLabel)), showContinue && /*#__PURE__*/_react["default"].createElement("div", {
          className: continueCls
        }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          disabled: shouldDisabledSubmit(),
          type: "submit",
          block: true,
          onClick: function onClick() {
            if (!disableSubmit) {
              setSubmitted(true);
              handleSubmit(values, initialValues);
            }
            if (handleClickSubmit) handleClickSubmit(formikProps);
          }
        }, btnSubmitLabel)))));
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Component, _extends({
          values: values,
          initialValues: initialValues,
          onUpdateForm: handleUpdateFormValues,
          dirty: dirty,
          submitted: submitted,
          loader: loader,
          responseDialog: responseDialog,
          bottom: !withButtons && bottom,
          openConfirmationMessage: openConfirmationMessage,
          setShowResponseDialog: setShowResponseDialog,
          setFieldsTouched: setFieldsTouched
        }, rest)), withButtons && bottom);
      }));
    };
  };
};
var _default = withForm;
exports["default"] = _default;
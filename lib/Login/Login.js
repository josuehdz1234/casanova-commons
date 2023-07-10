"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Login;
var _react = _interopRequireWildcard(require("react"));
var _formik = require("formik");
var Yup = _interopRequireWildcard(require("yup"));
var _ = require("..");
var Icons = _interopRequireWildcard(require("../Icons"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LoginSchema = Yup.object().shape({
  username: Yup.string().min(4, 'Muy corto!').max(20, 'Muy Largo!').required('Requerido'),
  password: Yup.string().required('Requerido')
});
var initialValues = {
  username: '',
  password: '' // NOSONAR
};

var errorMessage = 'Tu usuario y/o contraseña son inválidos.';
function Login(_ref) {
  var login = _ref.login,
    loading = _ref.loading,
    error = _ref.error,
    resetLogin = _ref.resetLogin;
  var formikRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    submitted = _useState2[0],
    setSubmitted = _useState2[1];
  (0, _react.useEffect)(function () {
    if (formikRef.current && error) {
      formikRef.current.setErrors(initialValues);
    }
  }, [formikRef, error]);
  var handleFormik = (0, _react.useCallback)(function (values) {
    login(values);
  }, [login]);
  var resetForm = (0, _react.useCallback)(function () {
    setSubmitted(false);
    resetLogin();
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-login"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, loading && !error ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-1"
  }, /*#__PURE__*/_react["default"].createElement(Icons.Logo, {
    className: "page-login-scaling",
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6 text-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-white",
    style: {
      fontSize: '20px'
    }
  }, "Cargando...")))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xs-11 col-sm-10 col-md-6 col-lg-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-login-form"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center page-login-form-top"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col d-flex justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-login-logo"
  }, /*#__PURE__*/_react["default"].createElement(Icons.Logo, {
    width: "100px"
  })))), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-center sub text-uppercase"
  }, "Iniciar Sesi\xF3n"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
  }, "Antes de continuar, por favor ingresa tu usuario y contrase\xF1a"), /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    initialValues: initialValues,
    validationSchema: LoginSchema,
    validateOnChange: submitted,
    validateOnBlur: true,
    onSubmit: handleFormik,
    innerRef: formikRef
  }, function (_ref2) {
    var isValid = _ref2.isValid,
      handleSubmit = _ref2.handleSubmit;
    return /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: function onSubmit(evt) {
        evt.preventDefault();
        setSubmitted(true);
        resetLogin();
        handleSubmit();
      }
    }, /*#__PURE__*/_react["default"].createElement(_.PlainInput, {
      name: "username",
      label: "Usuario",
      type: "text",
      onlyError: true,
      displayError: false
    }), /*#__PURE__*/_react["default"].createElement(_.PasswordInput, {
      onBlur: resetForm,
      name: "password",
      label: "Contrase\xF1a",
      onlyError: true,
      displayError: false
    }), (error || !isValid && submitted) && /*#__PURE__*/_react["default"].createElement("span", {
      className: "col-form-error text-danger"
    }, error || errorMessage), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-bold text-center mt-4 mb-4"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      className: "small",
      href: "#"
    }, "Olvid\xE9 mi contrase\xF1a")), /*#__PURE__*/_react["default"].createElement(_.Button, {
      block: true
    }, "Aceptar"));
  })))))));
}
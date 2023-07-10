"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSession;
var _react = require("react");
var _auth = require("../services/auth");
var _auth2 = require("../utils/constants/auth");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useSession(_ref) {
  var _ref$redirect = _ref.redirect,
    redirect = _ref$redirect === void 0 ? window.location.href.includes('login') : _ref$redirect,
    _ref$redirectPath = _ref.redirectPath,
    redirectPath = _ref$redirectPath === void 0 ? '' : _ref$redirectPath,
    _ref$exception = _ref.exception,
    exception = _ref$exception === void 0 ? false : _ref$exception;
  var _useState = (0, _react.useState)((0, _auth.getToken)()),
    _useState2 = _slicedToArray(_useState, 2),
    currentToken = _useState2[0],
    setCurrentToken = _useState2[1];
  (0, _react.useEffect)(function () {
    window.addEventListener('storage', function (evt) {
      var token = evt.storageArea[_auth2.AUTH.TOKEN];
      setCurrentToken(token);
      if (exception) return;
      var counter = Number(sessionStorage.getItem('counter'));
      if (!counter || counter > 1) return;
      if (!token) {
        (0, _auth.logout)();
      }
    });
  }, []);
  (0, _react.useEffect)(function () {
    var counter = sessionStorage.getItem('counter');
    if (!counter) {
      sessionStorage.setItem('counter', 1);
    }
    return function () {
      sessionStorage.setItem('counter', 0);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (redirect && currentToken) {
      window.location.pathname = redirectPath;
    }
  }, [currentToken, redirect]);
  return [currentToken];
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useScroll;
var _react = require("react");
function useScroll(_ref) {
  var _ref$disableScroll = _ref.disableScroll,
    disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll;
  var noScroll = (0, _react.useCallback)(function () {
    window.scrollTo(0, 0);
  }, []);
  (0, _react.useEffect)(function () {
    if (disableScroll) window.addEventListener('scroll', noScroll);
    return function () {
      window.removeEventListener('scroll', noScroll);
    };
  }, [disableScroll, noScroll]);
  return {
    noScroll: noScroll
  };
}
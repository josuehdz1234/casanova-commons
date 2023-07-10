"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useOutsideAlerter;
var _react = require("react");
function useOutsideAlerter(_ref) {
  var ref = _ref.ref,
    onClick = _ref.onClick;
  (0, _react.useEffect)(function () {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onClick) {
          onClick(event);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick]);
}
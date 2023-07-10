"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFirstRender;
var _react = require("react");
function useFirstRender() {
  var ref = (0, _react.useRef)(true);
  var firstRender = ref.current;
  ref.current = false;
  return firstRender;
}
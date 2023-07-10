"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgMastercard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 50 50",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "tgdkp56d1a",
    d: "M33.985.869v2.1c-.23-.38-.55-.594-.979-.594-.879 0-1.562.883-1.562 2.1 0 1.219.683 2.1 1.562 2.1.456 0 .782-.21.98-.588v.5h.685V.87h-.686zM32.16 4.475c0-.715.359-1.298.942-1.298.554 0 .948.548.948 1.298 0 .715-.394 1.3-.948 1.3-.583-.038-.942-.585-.942-1.3zM13.775 1.248v1.214h-.619v.796h.619v1.844c0 .925.294 1.473 1.075 1.473a1.5 1.5 0 00.85-.296l-.2-.754a.88.88 0 01-.581.212c-.327 0-.457-.254-.457-.67V3.258h1.105v-.796h-1.104V1.248h-.688zm16.198 1.72v-.506h-.683v4.026h.683V4.223c0-.669.23-1.046.656-1.046.131 0 .292.04.421.081l.194-.837c-.13-.046-.323-.046-.452-.046-.394 0-.652.254-.82.594zm-4.819 1.507c0 1.219.677 2.1 1.56 2.1.459 0 .788-.21.982-.588v.5h.683V2.463h-.683v.506c-.231-.38-.556-.594-.981-.594-.884 0-1.56.883-1.56 2.1zm.715 0c0-.715.358-1.298.948-1.298.55 0 .943.548.943 1.298 0 .715-.393 1.3-.943 1.3-.59-.038-.948-.585-.948-1.3zm-3.813 0c0 1.219.648 2.1 1.66 2.1.457 0 .782-.125 1.111-.469l-.33-.706c-.26.252-.518.375-.812.375-.556 0-.943-.502-.943-1.3 0-.75.387-1.258.943-1.298.294 0 .553.123.813.377l.33-.714c-.33-.336-.655-.465-1.111-.465-1.013 0-1.66.883-1.66 2.1zm-1.502-1.506v-.506h-.679v4.024h.68V4.223c0-.669.228-1.046.651-1.046.134 0 .294.04.425.081l.196-.837c-.131-.046-.327-.046-.458-.046-.39 0-.652.254-.815.594zm-4.431 1.506c0 1.263.65 2.1 1.596 2.1.456 0 .912-.17 1.273-.548l-.325-.627c-.26.252-.586.419-.915.419-.425 0-.846-.25-.942-.967h2.31v-.335c.036-1.3-.553-2.142-1.428-2.142-.92 0-1.57.842-1.57 2.1zm1.569-1.342c.42 0 .714.336.779.967h-1.634c.07-.546.365-.967.855-.967zm-7.667.548c0 .673.394 1.042 1.077 1.171l.33.046c.355.083.553.204.553.417 0 .291-.264.504-.716.504-.457 0-.817-.213-1.04-.419l-.331.669c.358.335.848.506 1.337.506.913 0 1.434-.548 1.434-1.302 0-.713-.427-1.09-1.077-1.215l-.323-.043c-.296-.042-.523-.127-.523-.377 0-.296.227-.46.59-.46.385 0 .777.21.976.335l.292-.713c-.327-.296-.783-.425-1.269-.425-.785 0-1.31.506-1.31 1.306zm-3.973.794c0 1.219.681 2.1 1.563 2.1.456 0 .785-.21.98-.588v.5h.684V2.463h-.683v.506c-.227-.38-.554-.594-.981-.594-.882 0-1.563.883-1.563 2.1zm.681 0c0-.715.365-1.298.948-1.298.554 0 .948.548.948 1.298 0 .715-.394 1.3-.948 1.3-.583-.038-.948-.585-.948-1.3zM3.088 3.092c-.23-.463-.559-.717-1.044-.717-.327 0-.65.13-.913.594v-.506H.446v4.024h.685v-2.22c0-.713.292-1.05.748-1.05.458 0 .683.379.683 1.05v2.22h.688v-2.22c0-.713.33-1.05.748-1.05.458 0 .687.379.687 1.05v2.22h.746V3.974c0-.965-.458-1.598-1.24-1.598-.387 0-.81.169-1.103.717z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "i8teepe5zc",
    d: "M1.758 13.035c0 7.096 5.523 12.834 12.352 12.834 2.88 0 5.521-1.032 7.617-2.746-2.85-2.317-4.704-5.988-4.704-10.088 0-4.098 1.854-7.735 4.704-10.085C19.631 1.237 16.99.204 14.11.204 7.281.204 1.758 5.942 1.758 13.035z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "61ze8d22pe",
    d: "M.894 2.95C3.738 5.3 5.592 8.937 5.592 13.035c0 4.1-1.823 7.738-4.698 10.088 2.091 1.714 4.733 2.746 7.612 2.746 6.825 0 12.35-5.738 12.35-12.834 0-7.056-5.525-12.83-12.35-12.83-2.879 0-5.52 1.033-7.612 2.745z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(7.292 34.889)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "ses8dz2qkb",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#tgdkp56d1a"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#050305",
    d: "M-13.815 20.833h62.742v-34.22h-62.742z",
    mask: "url(#ses8dz2qkb)"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#E65E20",
    d: "M19.148 32.908h11.404V12.944H19.148z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(3.125 9.889)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "nzsflo4l4d",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#i8teepe5zc"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#DB1D21",
    d: "M-12.5 40.131h48.481v-54.187H-12.5z",
    mask: "url(#nzsflo4l4d)"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(23.958 9.889)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "c2uel9ccgf",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#61ze8d22pe"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#EC9927",
    d: "M-13.369 40.131h48.481v-54.187h-48.481z",
    mask: "url(#c2uel9ccgf)"
  }))));
}
var _default = SvgMastercard;
exports["default"] = _default;
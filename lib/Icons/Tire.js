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
function SvgTire(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 84 50",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "path-1",
    d: "M0 .122h40.15v40.206H0z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path-3",
    d: "M.081.077H39.34v16.95H.081z"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Auto/compacto/LLanta",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-3",
    transform: "translate(22 4)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M0 20.225c0 11.102 8.988 20.103 20.076 20.103 11.087 0 20.075-9 20.075-20.103C40.15 9.122 31.163.122 20.076.122 8.988.122 0 9.122 0 20.225",
    id: "Fill-1",
    fill: "#3E3E3E",
    mask: "url(#mask-2)"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M52.245 20.406c-2.26-5.934-8.902-8.91-14.836-6.65-5.934 2.262-8.913 8.905-6.653 14.838 2.259 5.934 8.9 8.91 14.835 6.65 5.934-2.262 8.913-8.905 6.654-14.838",
    id: "Fill-4",
    fill: "#131313"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M51.343 20.44c-1.964-5.16-7.74-7.748-12.9-5.782-5.16 1.966-7.75 7.743-5.786 12.902 1.965 5.16 7.74 7.748 12.9 5.782 5.16-1.966 7.75-7.743 5.786-12.902",
    id: "Fill-6",
    fill: "#4C4C4C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.113 36.231c-6.85.057-12.283-5.482-12.331-12.13-.062-6.747 5.373-12.277 12.13-12.332 6.85-.057 12.284 5.482 12.332 12.13.062 6.747-5.373 12.277-12.13 12.332m-.23-26.23c-7.733.063-13.954 6.393-13.883 14.114.055 7.61 6.274 13.949 14.114 13.885C49.85 37.936 56.07 31.607 56 23.885c-.055-7.61-6.274-13.95-14.114-13.885",
    id: "Fill-8",
    fill: "#E7E7E7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M51.027 29.122c-.74 1.308-2.464 3.408-2.799 1.818l-.277-1.316a2.953 2.953 0 011.926-3.4l1.27-.438c1.536-.53.619 2.032-.12 3.336m-6.151-13.997l-1 .897a2.952 2.952 0 01-3.907.032l-1.015-.88c-1.227-1.066 1.45-1.552 2.948-1.565 1.504-.012 4.184.43 2.974 1.516M42.073 34.39c-1.498.012-4.183-.43-2.974-1.515l1.001-.898a2.952 2.952 0 013.906-.032l1.015.88c1.228 1.066-1.444 1.553-2.948 1.565m-7.975-12.615l-1.27.439c-1.536.53-.622-2.028.12-3.336.738-1.304 2.464-3.408 2.798-1.818l.277 1.315a2.952 2.952 0 01-1.925 3.4m2.018 7.945l-.255 1.32c-.308 1.596-2.068-.48-2.828-1.772-.763-1.296-1.72-3.838-.175-3.333l1.278.418a2.952 2.952 0 011.98 3.367M47.858 18.28l.255-1.32c.309-1.596 2.066.475 2.829 1.771.76 1.292 1.719 3.839.175 3.334l-1.278-.418a2.953 2.953 0 01-1.981-3.367M41.9 12c-6.629.055-11.961 5.48-11.9 12.099.047 6.522 5.378 11.956 12.098 11.9 6.629-.054 11.961-5.48 11.9-12.098-.047-6.522-5.378-11.956-12.098-11.9",
    id: "Fill-10",
    fill: "#CDCDCD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37.757 19.757a6 6 0 108.486 8.486 6 6 0 00-8.486-8.486",
    id: "Fill-12",
    fill: "#B4B4B4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 24.498c.007.915.363 1.756.945 2.385a.71.71 0 01.834.007.725.725 0 01.266.793c.45.207.952.321 1.484.317a3.467 3.467 0 001.458-.334.726.726 0 01.264-.799.714.714 0 01.828-.01 3.533 3.533 0 00.894-2.827.717.717 0 01-.67-.5.727.727 0 01.245-.798A3.498 3.498 0 0042.16 21a.721.721 0 01-.679.49.713.713 0 01-.677-.482 3.503 3.503 0 00-2.37 1.755.728.728 0 01-.1 1.221.705.705 0 01-.312.082 3.573 3.573 0 00-.022.432",
    id: "Fill-14",
    fill: "#818181"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Fill-16",
    fill: "#131313",
    d: "M41.477 19.03l-.477 1 .523.97 1-.03.477-1-.523-.97z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Fill-18",
    fill: "#131313",
    d: "M46.66 22.193l-1-.193-.66.807.34 1 1 .193.66-.807z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Fill-20",
    fill: "#131313",
    d: "M45 27.386l-.142-1-1-.386-.858.614.142 1 1 .386z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Fill-22",
    fill: "#131313",
    d: "M39.913 28l1-.432.087-1-.913-.568-1 .432-.087 1z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Fill-24",
    fill: "#131313",
    d: "M37 23.243l.708.757 1-.243.292-1-.708-.757-1 .243z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.5 7.025C50.474 7.025 58.115 12.85 61 21c-1.488-9.633-9.651-17-19.5-17S23.487 11.367 22 21c2.885-8.15 10.526-13.975 19.5-13.975",
    id: "Fill-26",
    fill: "#585858"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Group-30",
    transform: "translate(22 27)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-4",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-3"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M19.71 14.011C10.677 14.011 2.985 8.203.081.077c1.498 9.605 9.715 16.95 19.629 16.95 9.914 0 18.132-7.345 19.63-16.95-2.905 8.126-10.597 13.934-19.63 13.934",
    id: "Fill-28",
    fill: "#212121",
    mask: "url(#mask-4)"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M41.878 11.035c5.61-.044 10.454 2.783 13.122 6.963-2.231-4.71-7.221-8.043-13.114-7.998-5.75.045-10.675 3.325-12.886 8 2.641-4.137 7.41-6.922 12.878-6.965",
    id: "Fill-31",
    fill: "#CDCDCD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.122 36.965c-5.61.044-10.454-2.783-13.122-6.963 2.231 4.71 7.22 8.043 13.114 7.998 5.75-.045 10.675-3.325 12.886-8-2.641 4.137-7.41 6.922-12.878 6.965",
    id: "Fill-33",
    fill: "#FAFAFA"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.317 13.65c5.666.142 10.305 4.11 11.683 9.347-.613-6.133-5.735-11.05-12.099-10.997-6.215.052-11.295 4.872-11.901 11 1.516-5.787 6.858-9.575 12.317-9.35",
    id: "Fill-35",
    fill: "#B4B4B4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.683 34.35c-5.666-.142-10.305-4.11-11.683-9.347.613 6.133 5.735 11.05 12.099 10.997 6.215-.052 11.295-4.872 11.901-11-1.516 5.787-6.858 9.575-12.317 9.35",
    id: "Fill-37",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M46.611 22.124A5.932 5.932 0 0148 24c-.122-1.237-.702-2.443-1.74-3.39-2.352-2.147-6.168-2.147-8.52 0-1.038.947-1.618 2.153-1.74 3.39.318-.681.78-1.32 1.389-1.876 2.546-2.324 6.676-2.324 9.222 0",
    id: "Fill-39",
    fill: "#9A9A9A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37.389 26.876A5.93 5.93 0 0136 25c.122 1.237.702 2.443 1.74 3.39 2.352 2.147 6.168 2.147 8.52 0 1.038-.947 1.618-2.153 1.74-3.39a5.93 5.93 0 01-1.389 1.876c-2.546 2.324-6.676 2.324-9.222 0",
    id: "Fill-41",
    fill: "#E7E7E7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 24a2.258 2.258 0 00-.514-.9 2.09 2.09 0 00-.68-.488 1.973 1.973 0 00-.806-.17c-.563 0-1.09.233-1.488.658-.242.261-.414.57-.512.9.032-.5.226-.99.581-1.372a1.908 1.908 0 012.186-.466 2 2 0 01.652.466c.356.381.549.871.581 1.372",
    id: "Fill-43",
    fill: "#CDCDCD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 25c-.098.33-.27.639-.514.9a2.09 2.09 0 01-.68.488c-.253.113-.526.17-.806.17-.563 0-1.09-.233-1.488-.658A2.274 2.274 0 0140 25c.032.5.226.99.581 1.372a1.908 1.908 0 002.186.466c.241-.107.462-.263.652-.466.356-.381.549-.871.581-1.372",
    id: "Fill-45",
    fill: "#4C4C4C"
  })));
}
var _default = SvgTire;
exports["default"] = _default;
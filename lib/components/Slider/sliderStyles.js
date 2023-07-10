"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderStyles = void 0;
var _colors = require("../../utils/colors");
var sliderStyles = {
  railStyle: {
    backgroundColor: _colors.COLORS.PRIMARY,
    width: 14
  },
  trackStyle: {
    backgroundColor: _colors.COLORS.SECONDARY,
    width: 14
  },
  handleStyle: {
    border: 'none',
    height: 26,
    width: 26,
    backgroundColor: _colors.COLORS.WHITE,
    zIndex: '10',
    left: 4
  }
};
exports.sliderStyles = sliderStyles;
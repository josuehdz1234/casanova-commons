"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _renderer = require("@react-pdf/renderer");
var _colors = require("../../../utils/colors");
var styles = _renderer.StyleSheet.create({
  page: {
    backgroundColor: _colors.COLORS.WHITE,
    width: '100vw',
    paddingHorizontal: 3,
    paddingVertical: 40
  }
});
var _default = styles;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _renderer = require("@react-pdf/renderer");
var _colors = require("../../../utils/colors");
var styles = _renderer.StyleSheet.create({
  infoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoTextLabel: {
    fontSize: 14,
    fontWeight: 'extra-bold',
    textTransform: 'uppercase',
    color: _colors.COLORS.BLACK,
    marginRight: 4
  },
  infoTextValue: {
    fontSize: 14,
    color: _colors.COLORS.BLACK
  }
});
var _default = styles;
exports["default"] = _default;
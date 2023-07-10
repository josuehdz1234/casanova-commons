"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _renderer = require("@react-pdf/renderer");
var _colors = require("../../../utils/colors");
var border = "1px solid ".concat(_colors.COLORS.GOLD);
var styles = _renderer.StyleSheet.create({
  table: {
    width: '100vw',
    flexShrink: 0
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: _colors.COLORS.GOLD
  },
  header: {
    minHeight: 8,
    padding: 7,
    border: 0
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: _colors.COLORS.WHITE
  },
  body: {},
  bodyRow: {
    flexDirection: 'row',
    width: '100%',
    borderBottom: border
  },
  bodyColumn: {
    borderRight: border,
    paddingLeft: 1,
    paddingRight: 3,
    paddingVertical: 4
  },
  bodyText: {
    fontSize: 13,
    paddingBottom: 2,
    textAlign: 'center'
  }
});
var _default = styles;
exports["default"] = _default;
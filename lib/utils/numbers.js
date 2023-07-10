"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
function range(min, max) {
  var list = [];
  for (var i = min; i <= max; i++) {
    list.push(i);
  }
  return list;
}
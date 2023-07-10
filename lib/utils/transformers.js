"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBold = void 0;
var makeBold = function makeBold(_ref) {
  var section = _ref.section,
    keyword = _ref.keyword,
    withBr = _ref.withBr;
  if (Array.isArray(keyword)) {
    var modifySection = null;
    keyword.map(function (text, i) {
      var re = new RegExp(text, 'g');
      if (!modifySection) {
        modifySection = section;
      }
      var br = withBr[i] ? '<br>' : '';
      var PBold = modifySection.replace(re, "\n        ".concat(br, "\n        <p class=\"d-inline font-weight-bold\">").concat(text, "</p>"));
      modifySection = PBold;
      return PBold;
    });
    return modifySection;
  }
  var re = new RegExp(keyword, 'g');
  return section.replace(re, "<p class=\"d-inline font-weight-bold\">".concat(keyword, "</p>"));
};
exports.makeBold = makeBold;
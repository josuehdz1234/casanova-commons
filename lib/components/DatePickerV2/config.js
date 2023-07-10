"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopperConfig = void 0;
var getPopperConfig = function getPopperConfig(_ref) {
  var placement = _ref.placement,
    element = _ref.element,
    onFirstUpdate = _ref.onFirstUpdate;
  return {
    placement: placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: [10, 20]
      }
    }, {
      name: 'arrow',
      options: {
        element: element,
        padding: 25
      }
    }],
    strategy: 'fixed',
    onFirstUpdate: onFirstUpdate
  };
};
exports.getPopperConfig = getPopperConfig;
const HaikuReactAdapter = require('@haiku/core/dom/react');
let HaikuReactComponent = HaikuReactAdapter(require('./dom'));

if (HaikuReactComponent.default)
  HaikuReactComponent = HaikuReactComponent.default;

module.exports = HaikuReactComponent;

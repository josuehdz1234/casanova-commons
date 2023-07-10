"use strict";

var HaikuReactAdapter = require('@haiku/core/dom/react');
var HaikuReactComponent = HaikuReactAdapter(require("./dom"));
if (HaikuReactComponent["default"]) HaikuReactComponent = HaikuReactComponent["default"];
module.exports = HaikuReactComponent;
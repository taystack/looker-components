"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _XYLegend = require("./XYLegend");

Object.keys(_XYLegend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _XYLegend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _XYLegend[key];
    }
  });
});
//# sourceMappingURL=index.js.map
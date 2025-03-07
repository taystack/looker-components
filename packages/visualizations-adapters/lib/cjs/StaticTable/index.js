"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StaticTable = require("./StaticTable");

Object.keys(_StaticTable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StaticTable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StaticTable[key];
    }
  });
});
//# sourceMappingURL=index.js.map
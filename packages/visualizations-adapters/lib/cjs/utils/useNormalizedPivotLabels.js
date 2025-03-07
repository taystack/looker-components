"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNormalizedPivotLabels = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _useTranslation2 = require("./useTranslation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useNormalizedPivotLabels = function useNormalizedPivotLabels(pivots) {
  var _useTranslation = (0, _useTranslation2.useTranslation)('useNormalizedPivotLabels'),
      t = _useTranslation.t;

  if (!pivots) {
    return undefined;
  }

  return pivots.map(function (pivot) {
    var key = pivot.key,
        is_total = pivot.is_total;
    var capitalizedPivotValue = is_total ? t('Row Total') : key[0].toUpperCase() + key.slice(1);
    return _objectSpread(_objectSpread({}, pivot), {}, {
      label: capitalizedPivotValue
    });
  });
};

exports.useNormalizedPivotLabels = useNormalizedPivotLabels;
//# sourceMappingURL=useNormalizedPivotLabels.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesCellVisualization = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@looker/components");

var _has = _interopRequireDefault(require("lodash/has"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var renderFor = ['table'];

var SeriesCellVisualization = function SeriesCellVisualization(props) {
  var chartType = props.chartType,
      series = props.series,
      onSeriesChange = props.onSeriesChange;

  if (!renderFor.includes(chartType) && !(0, _has["default"])(series, 'cell_visualization')) {
    return null;
  }

  var handleChange = function handleChange(e) {
    var draft = _objectSpread(_objectSpread({}, series), {}, {
      cell_visualization: e.target.checked
    });

    onSeriesChange(draft);
  };

  return _react["default"].createElement(_components.FieldCheckbox, {
    label: "Cell visualization",
    onChange: handleChange,
    checked: !!series.cell_visualization
  });
};

exports.SeriesCellVisualization = SeriesCellVisualization;
//# sourceMappingURL=SeriesCellVisualization.js.map
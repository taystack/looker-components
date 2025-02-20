"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TickDensity = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@looker/components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var TickDensity = function TickDensity(props) {
  var axis = props.axis,
      onAxisChange = props.onAxisChange;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      densityToggle = _useState2[0],
      setDensityToggle = _useState2[1];

  var handleSliderChange = function handleSliderChange(e) {
    var draft = _objectSpread(_objectSpread({}, axis), {}, {
      tick_density: parseInt(e.target.value)
    });

    onAxisChange(draft);
  };

  var handleToggleChange = function handleToggleChange(e) {
    var _ref = e.target,
        value = _ref.value;
    setDensityToggle(value);
  };

  var groupID = (0, _components.useID)();
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_components.Field, {
    id: groupID,
    label: "Tick Density"
  }, _react["default"].createElement(_components.FieldRadio, {
    name: "".concat(groupID, "-default"),
    label: "Default",
    value: "default",
    checked: densityToggle === 'default',
    onChange: handleToggleChange
  }), _react["default"].createElement(_components.FieldRadio, {
    name: "".concat(groupID, "-custom"),
    label: "Custom",
    value: "custom",
    checked: densityToggle === 'custom',
    onChange: handleToggleChange
  })), densityToggle === 'custom' && _react["default"].createElement(_components.Slider, {
    min: 0,
    max: 100,
    onChange: handleSliderChange
  }));
};

exports.TickDensity = TickDensity;
//# sourceMappingURL=TickDensity.js.map
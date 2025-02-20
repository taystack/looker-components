"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../../utils");

var _Form = require("../../Form");

var _InputText = require("../../Inputs/InputText");

var _Field = require("../Field");

var _useFloatingLabel = require("../Field/useFloatingLabel");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldTextComponent = (0, _react.forwardRef)(function (props, ref) {
  var id = (0, _utils.useID)(props.id);
  var validationMessage = (0, _Form.useFormContext)(props);

  var _useTheme = (0, _styledComponents.useTheme)(),
      space = _useTheme.space;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      beforeWidth = _useState2[0],
      setBeforeWidth = _useState2[1];

  var labelOffset;

  if (props.iconBefore) {
    labelOffset = space.u8;
  } else if (props.before) {
    labelOffset = "".concat(beforeWidth, "px");
  }

  return _react["default"].createElement(_InputText.InputTextContext.Provider, {
    value: {
      beforeWidth: beforeWidth,
      setBeforeWidth: setBeforeWidth
    }
  }, _react["default"].createElement(_Field.FloatingLabelField, (0, _extends2["default"])({
    id: id,
    validationMessage: validationMessage,
    hasValue: (0, _useFloatingLabel.getHasValue)(props),
    labelOffset: labelOffset
  }, (0, _Field.pickFieldProps)(props)), _react["default"].createElement(_InputText.InputText, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    id: id,
    "aria-describedby": "describedby-".concat(id),
    validationType: validationMessage && validationMessage.type,
    ref: ref
  }))));
});
FieldTextComponent.displayName = 'FieldTextComponent';
var FieldText = (0, _styledComponents["default"])(FieldTextComponent).withConfig({
  displayName: "FieldText",
  componentId: "sc-rg64oz-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldText = FieldText;
//# sourceMappingURL=FieldText.js.map
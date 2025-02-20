"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _components = require("@looker/components");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ButtonGroup = require("./ButtonGroup");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var options = [{
  label: 'label1',
  value: 'value1'
}, {
  label: 'label2',
  value: 'value2'
}, {
  label: 'label3',
  value: 'value3'
}];
describe('ButtonGroup', function () {
  it('buttons have a red border with validationMessage', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonGroup.ButtonGroup, {
      options: options,
      validationMessage: {
        type: 'error'
      },
      onChange: jest.fn,
      value: []
    }));

    var buttons = _react.screen.getAllByRole('button');

    var _iterator = _createForOfIteratorHelper(buttons),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var button = _step.value;
        expect(button).toHaveStyleRule("border-color: ".concat(_components.theme.colors.criticalBorder));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  it('handles loading state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonGroup.ButtonGroup, {
      isLoading: true,
      options: options,
      onChange: jest.fn(),
      value: []
    }));
    expect(_react.screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
//# sourceMappingURL=ButtonGroup.spec.js.map
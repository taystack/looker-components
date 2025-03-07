import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures';
import { truncateText } from './truncateText';
describe('truncateText', () => {
  test('config.truncate_text === undefined', () => {
    const config = _objectSpread({}, mockLineConfig);

    const {
      config: transformedConfig
    } = truncateText({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.truncate_text).toEqual(true);
  });
  test('config.truncate_text === true', () => {
    const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
      truncate_text: true
    });

    const {
      config: transformedConfig
    } = truncateText({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.truncate_text).toEqual(true);
  });
  test('config.truncate_text === false', () => {
    const config = _objectSpread(_objectSpread({}, mockLineConfig), {}, {
      truncate_text: false
    });

    const {
      config: transformedConfig
    } = truncateText({
      config,
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.truncate_text).toEqual(false);
  });
});
//# sourceMappingURL=truncateText.spec.js.map
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Label } from './Label';
export default {
  argTypes,
  component: Label,
  title: 'Label'
};

const Template = args => React.createElement(Label, args);

export const Basic = Template.bind({});
Basic.args = {
  children: "It's a label!"
};
export const Typography = Template.bind({});
Typography.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'key',
  fontSize: 'xlarge',
  fontWeight: 'normal'
});
//# sourceMappingURL=Label.stories.js.map
/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { AccountCircle, Settings } from '@styled-icons/material-outlined'
import type { Story } from '@storybook/react/types-6-0'
import { AddAlert, Favorite } from '@styled-icons/material'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import React from 'react'
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Button } from '../../../Button'
import { Icon } from '../../../Icon'
import { Space, SpaceVertical } from '../../../Layout'
import { Text } from '../../../Text'
import { Tooltip } from '../../../Tooltip'
import { useToggle } from '../../../utils'
import { FieldCheckbox } from '../FieldCheckbox'
import { FieldRadio } from '../FieldRadio'
import { FieldToggleSwitch } from '../FieldToggleSwitch'
import type { FieldTextProps } from './FieldText'
import { FieldText } from './FieldText'

export default {
  argTypes,
  component: FieldText,
  title: 'FieldText',
}

const Template: Story<FieldTextProps & { externalLabel: boolean }> = ({
  externalLabel = true,
  ...args
}) => (
  <ExtendComponentsThemeProvider
    themeCustomizations={{ defaults: { externalLabel } }}
  >
    <FieldText {...args} />
  </ExtendComponentsThemeProvider>
)

export const Basic = Template.bind({})
Basic.args = { label: 'Text Input' }

export const NoLabel = Template.bind({})
NoLabel.args = {}

export const Detail = Template.bind({})
Detail.args = { ...Basic.args, detail: '0/50' }

export const Description = Template.bind({})
Description.args = {
  ...Basic.args,
  description: 'Some important information about this field',
}

export const Inline = Template.bind({})
Inline.args = {
  ...Basic.args,
  detail: 'Detail inline looks like this',
  inline: true,
}

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, disabled: true }

export const Required = Template.bind({})
Required.args = { ...Basic.args, required: true }

export const Placeholder = Template.bind({})
Placeholder.args = { ...Basic.args, placeholder: 'Placeholder text here' }

export const Value = Template.bind({})
Value.args = { ...Basic.args, value: 'Text here' }

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'Error Message', type: 'error' },
}

export const Before = Template.bind({})
Before.args = { ...Basic.args, before: '$', label: 'Dollars' }

export const After = Template.bind({})
After.args = { ...Basic.args, after: '%', label: 'Percent' }

export const IconBefore = Template.bind({})
IconBefore.args = { ...Basic.args, iconBefore: <Settings />, label: 'Settings' }

export const IconAfter = Template.bind({})
IconAfter.args = { ...Basic.args, iconAfter: <Settings />, label: 'Settings' }

export const FloatingLabel = Template.bind({})
FloatingLabel.args = {
  description: 'Some important information about this field',
  detail: '0/50',
  externalLabel: false,
  label: 'Floating Label',
}

export const FloatingLabelValue = Template.bind({})
FloatingLabelValue.args = {
  ...FloatingLabel.args,
  defaultValue: 'Value',
}

export const FloatingLabelIcon = Template.bind({})
FloatingLabelIcon.args = {
  ...FloatingLabel.args,
  iconBefore: <Settings />,
}

export const FloatingLabelValidation = Template.bind({})
FloatingLabelValidation.args = {
  ...FloatingLabel.args,
  validationMessage: { message: 'Error Message', type: 'error' },
}

export const FloatingLabelNoLabel = Template.bind({})
FloatingLabelNoLabel.args = {
  externalLabel: false,
}

export const Toggles = () => (
  <>
    <FieldCheckbox label="Checkbox" />
    <FieldCheckbox
      required
      label="Checkbox"
      validationMessage={{ message: 'validation Message', type: 'error' }}
    />
    <FieldCheckbox disabled label="Checkbox" />
    <FieldCheckbox required label="Checkbox" />

    <FieldRadio label="Radio" />
    <FieldRadio disabled label="Radio" />

    <FieldToggleSwitch label="Toggle Switch" />
    <FieldToggleSwitch
      required
      label="Toggle Switch"
      validationMessage={{ message: 'validation Message', type: 'error' }}
    />
    <FieldToggleSwitch disabled label="Toggle Switch" />
    <FieldToggleSwitch required label="Toggle Switch" />
  </>
)

Toggles.parameters = {
  storyshots: { disable: true },
}

export const AutoResize = () => {
  return (
    <Space align="end">
      <FieldText autoResize placeholder="Start typing to resize me" />
      <FieldText
        label="I also resize"
        autoResize
        defaultValue="Some default text"
        detail="Detail lines up"
      />
      <FieldText
        label="Inline autoResize"
        inline
        autoResize
        defaultValue="Some default text"
        detail="Detail text"
      />
    </Space>
  )
}

AutoResize.parameters = {
  storyshots: { disable: true },
}

export const BeforeAfterValidation = () => {
  const { value, toggle } = useToggle(true)
  const validation = value
    ? { validationMessage: { message: 'Oops!', type: 'error' as const } }
    : {}
  return (
    <SpaceVertical align="start">
      <Button onClick={toggle}>Toggle error state</Button>
      <Space>
        <FieldText
          label="iconBefore"
          iconBefore={<Favorite />}
          {...validation}
        />
        <FieldText
          label="iconAfter"
          iconAfter={<AccountCircle />}
          {...validation}
        />
        <FieldText label="before string" before="$" {...validation} />
        <FieldText label="after string" after="%" {...validation} />
        <FieldText
          label="before &amp; after"
          before={
            <Tooltip content="Some very important info">
              <Icon
                icon={<AddAlert />}
                size="small"
                style={{ cursor: 'default' }}
              />
            </Tooltip>
          }
          after={
            <Text fontSize="small" color={value ? 'critical' : 'info'}>
              Helper text
            </Text>
          }
          {...validation}
        />
      </Space>
    </SpaceVertical>
  )
}

BeforeAfterValidation.parameters = {
  storyshots: { disable: true },
}

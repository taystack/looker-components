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

import React from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes } from '@looker/storybook'
import { DialogLongContent } from '../../fixtures/DialogLongContent'
import { DialogMediumContent } from '../../fixtures/DialogMediumContent'
import { SpaceVertical } from '../../Layout/Space/SpaceVertical'
import { CopyToClipboard } from '../../CopyToClipboard'
import { Button, ButtonOutline } from '../../Button'
import type { DialogProps } from '../Dialog'
import { Dialog } from '../Dialog'
import { dialogSizes } from '../dialogWidth'
import { dialogPlacements } from '../DialogSurface'
import { DialogLayout } from '../Layout'
import { Checkbox } from '../../Form/Inputs/Checkbox'
import ActiveElement from './ActiveElement'

export * from './Controlled'
export * from './SaveChanges'
export { ActiveElement }
Object.assign(ActiveElement, { parameters: { storyshots: { disable: true } } })

const Template: Story<DialogProps> = args => (
  <Dialog {...args}>
    <ButtonOutline>Open Dialog</ButtonOutline>
  </Dialog>
)

export const Basic = Template.bind({})
Basic.args = {
  content: 'Simple Content',
}
Basic.parameters = {
  storyshots: { disable: true },
}

export const Open = Template.bind({})
Open.args = {
  ...Basic.args,
  defaultOpen: true,
}
Open.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const AnimationCallbacks = Template.bind({})
AnimationCallbacks.args = {
  ...Basic.args,
  onAfterClose: () => {
    // eslint-disable-next-line no-console
    console.log('Close')
  },
  onAfterOpen: () => {
    // eslint-disable-next-line no-console
    console.log('Open')
  },
}
AnimationCallbacks.parameters = {
  storyshots: { disable: true },
}

export const MediumContent = Template.bind({})
MediumContent.args = {
  content: <DialogMediumContent />,
  defaultOpen: true,
  id: 'CustomDialogId',
}
MediumContent.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const Height = Template.bind({})
Height.args = {
  ...MediumContent.args,
  height: '1000rem',
}
Height.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const PlacementTop = Template.bind({})
PlacementTop.args = {
  ...MediumContent.args,
  defaultOpen: true,
  placement: 'top',
}
PlacementTop.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const PlacementCover = Template.bind({})
PlacementCover.args = {
  ...MediumContent.args,
  defaultOpen: true,
  placement: 'cover',
}
PlacementCover.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const LongContent = Template.bind({})
LongContent.args = {
  content: <DialogLongContent />,
  defaultOpen: true,
}
LongContent.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const withCheckbox = Template.bind({})
withCheckbox.args = {
  content: (
    <DialogLayout footer="Footer" header="Header">
      The top line & bottom shadow should not be there.
      <Checkbox checked />
    </DialogLayout>
  ),
}
withCheckbox.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const ClickOutside = () => {
  return (
    <>
      <input
        type="text"
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 100,
        }}
      />
      <Dialog
        content={
          <>
            <button>button 1</button>
            <button>button 2</button>
          </>
        }
      >
        <button>Open Dialog</button>
      </Dialog>
    </>
  )
}

ClickOutside.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const MultiFunctionButton = () => {
  return (
    <Dialog
      content={
        <DialogLayout header="A Dialog Example">
          <SpaceVertical>
            <CopyToClipboard success="Copied" content="Copy content">
              <Button>Copy</Button>
            </CopyToClipboard>
          </SpaceVertical>
        </DialogLayout>
      }
    >
      <Button>Open Dialog</Button>
    </Dialog>
  )
}
MultiFunctionButton.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

export const CloseIconButton = () => {
  return (
    <Dialog
      content={
        <DialogLayout header="Has a close icon button">
          Some content
        </DialogLayout>
      }
    >
      <Button>Open Dialog</Button>
    </Dialog>
  )
}

CloseIconButton.parameters = {
  storyshots: { disable: true },
}

export default {
  argTypes: {
    ...defaultArgTypes,
    placement: {
      control: {
        options: dialogPlacements,
        type: 'select',
      },
    },
    width: {
      control: {
        options: Object.keys(dialogSizes),
        type: 'select',
      },
    },
  },
  component: Dialog,
  title: 'Dialog',
}

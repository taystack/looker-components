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

import React, { useEffect, useContext } from 'react'
import {
  ScrollLockContext,
  FocusTrapContext,
} from '@looker/components-providers'
import { defaultArgTypes as argTypes } from '@looker/storybook'
import {
  Box2,
  Button,
  ButtonOutline,
  CopyToClipboard,
  Dialog,
  FieldSelect,
  FieldToggleSwitch,
  Heading,
  Menu,
  MenuItem,
  DialogContent,
  Paragraph,
  Space,
  SpaceVertical,
  useToggle,
  PopoverLayout,
  FieldRadioGroup,
  DialogContext,
  FieldCheckbox,
  ComponentsProvider,
} from '../..'
import { Tooltip } from '../../Tooltip'
import { Popover } from '../Popover'
import { PopoverContent } from '../Layout/PopoverContent'
import { usePopover } from '../usePopover'
import { Constitution, ConstitutionShort } from '../../fixtures/Constitution'

export * from './OverflowExamples'

export default {
  argTypes,
  component: Popover,
  title: 'Popover',
}

export const Basic = () => (
  <Popover content={<PopoverContent>Some content</PopoverContent>}>
    <Button>Open</Button>
  </Popover>
)

Basic.parameters = {
  storyshots: { disable: true },
}

export const PopoverWithLayout = () => (
  <Popover
    width={640}
    content={
      <PopoverLayout header="Header text" footer>
        <Constitution />
      </PopoverLayout>
    }
  >
    <Button>Open</Button>
  </Popover>
)
PopoverWithLayout.parameters = {
  storyshots: {
    disable: true,
  },
}

export const PopoverWithLayoutBasic = () => (
  <Popover
    width={640}
    content={
      <PopoverLayout header="Header text" footer={false}>
        <ConstitutionShort fontSize="small" />
      </PopoverLayout>
    }
  >
    <Button>Open Popover</Button>
  </Popover>
)
PopoverWithLayoutBasic.parameters = {
  storyshots: {
    disable: true,
  },
}

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
  { label: 'Apples2', value: '12' },
  { label: 'Bananas2', value: '22' },
  { label: 'Oranges2', value: '32' },
  { label: 'Pineapples2', value: '42' },
  { label: 'Kiwis3', value: '52' },
  { label: 'Apples3', value: '13' },
  { label: 'Bananas3', value: '23' },
  { label: 'Oranges3', value: '33' },
  { label: 'Pineapples3', value: '43' },
  { label: 'Kiwis3', value: '53' },
  { label: 'Apples4', value: '14' },
  { label: 'Bananas4', value: '24' },
  { label: 'Oranges4', value: '34' },
  { label: 'Pineapples4', value: '44' },
  { label: 'Kiwis4', value: '54' },
  { label: 'Apples5', value: '15' },
  { label: 'Bananas5', value: '25' },
  { label: 'Oranges5', value: '35' },
  { label: 'Pineapples5', value: '45' },
  { label: 'Kiwis5', value: '55' },
]

export const PopoverFocusTrap = () => {
  const { value, toggle } = useToggle(false)
  function getButtonAlert(text: string) {
    return () => alert(text)
  }

  return (
    <SpaceVertical mt="large">
      <Heading>Focus Trap Test</Heading>
      <FieldToggleSwitch
        on={value}
        onChange={() => toggle()}
        label="Cancel Click Outside"
      />
      <Space>
        <Popover
          cancelClickOutside={value}
          content={
            <PopoverContent p="u5" width="360px">
              <Paragraph>
                Does tabbing focus only loop through these 3 buttons &amp;
                Select?
              </Paragraph>
              <Paragraph>
                Does clicking (or mousedown) each trigger an alert?
              </Paragraph>
              <Button mr="small" onClick={getButtonAlert('First')}>
                First
              </Button>
              <Button mr="small" onClick={getButtonAlert('Second')}>
                Second
              </Button>
              <Button
                mt="small"
                mb="medium"
                onMouseDown={getButtonAlert('Third')}
              >
                Third (mousedown)
              </Button>
              <FieldSelect
                label="Default Value"
                width={300}
                options={options}
                aria-label="Fruits"
                defaultValue="1"
              />
              <Paragraph>
                Does it scroll here when the Select is closed?
              </Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
            </PopoverContent>
          }
        >
          <Button>Open Focus Trap Test Popover</Button>
        </Popover>
        <ButtonOutline onClick={() => alert(`You clicked the button!`)}>
          Click me with the popover open
        </ButtonOutline>
      </Space>
      <Paragraph>Does it scroll here when the Popover is closed?</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
    </SpaceVertical>
  )
}

PopoverFocusTrap.parameters = {
  storyshots: { disable: true },
}

export const OverlayOpenDialog = () => {
  const { value, setOn, setOff } = useToggle()
  return (
    <SpaceVertical mt="large" align="start" width={1000} mx="auto">
      <Paragraph>
        Centered layout would be affected by the scrollbar "jump" bug on scroll
        lock.
      </Paragraph>
      <Heading>Popover Opening a Dialog</Heading>
      <Popover
        content={
          <SpaceVertical p="u5">
            <Button onClick={setOn}>Open Dialog</Button>
            <Box2 height={500} />
          </SpaceVertical>
        }
      >
        <Button>Open Popover</Button>
      </Popover>
      <Dialog isOpen={value} onClose={setOff}>
        <DialogInner />
      </Dialog>
      <Heading>Menu Opening a Dialog</Heading>
      <Menu content={<MenuItem onClick={setOn}>Open Dialog</MenuItem>}>
        <Tooltip content="Select your favorite kind">
          <Button mt="medium">Open Menu</Button>
        </Tooltip>
      </Menu>
      <Heading>Opening a Dialog Directly</Heading>
      <Button onClick={setOn}>Open Dialog</Button>
      <Box2 height={1000} />
    </SpaceVertical>
  )
}

OverlayOpenDialog.parameters = {
  storyshots: { disable: true },
}

const DialogInner = () => {
  const {
    activeTrapRef: activeLockRef,
    disableCurrentTrap: disableCurrentLock,
    enableCurrentTrap: enableCurrentLock,
  } = useContext(ScrollLockContext)
  const toggleScrollLock = () => {
    if (activeLockRef && activeLockRef.current) {
      disableCurrentLock?.()
    } else {
      enableCurrentLock?.()
    }
  }
  const { activeTrapRef, disableCurrentTrap, enableCurrentTrap } = useContext(
    FocusTrapContext
  )
  const toggleFocusTrap = () => {
    if (activeTrapRef && activeTrapRef.current) {
      disableCurrentTrap?.()
    } else {
      enableCurrentTrap?.()
    }
  }
  function openAlert() {
    alert(`It's working!`)
  }
  return (
    <DialogContent>
      <SpaceVertical align="start">
        <Paragraph>
          Scroll lock can be disabled via ScrollLockContext but due to fixed
          positioning in Dialog, there will be a scrollbar jump.
        </Paragraph>
        <Button onClick={toggleScrollLock}>Toggle Scroll Lock</Button>
        <Button onClick={toggleFocusTrap}>Toggle Focus Trap</Button>
        <Paragraph>Try opening the Select and picking an option:</Paragraph>
        <FieldSelect
          label="Default Value"
          width={300}
          options={options}
          aria-label="Fruits"
          defaultValue="1"
        />
        <Paragraph>Try clicking the button:</Paragraph>
        <Button onClick={openAlert}>Open Alert</Button>
        <Box2 height={500} />
      </SpaceVertical>
    </DialogContent>
  )
}

const popoverContent = (
  <PopoverContent>
    <Paragraph width={300} p="u10">
      👋 Hello, I am a popover!
    </Paragraph>
  </PopoverContent>
)
export const RenderProps = () => (
  <Popover content={popoverContent}>
    {props => <button {...props}>Test</button>}
  </Popover>
)

RenderProps.parameters = {
  storyshots: { disable: true },
}

export const RenderPropsSpread = () => (
  <Popover content={popoverContent}>
    {props => <button {...props}>Test</button>}
  </Popover>
)

RenderPropsSpread.parameters = {
  storyshots: { disable: true },
}

export const Placement = () => {
  const popoverContent = (
    <PopoverContent>
      <Paragraph width={300} p="u10">
        👋 Hello, I am a popover!
      </Paragraph>
    </PopoverContent>
  )

  return (
    <Box2 mt="large">
      <Heading>Placement</Heading>
      <Box2 my="medium">
        <Popover content={popoverContent}>
          <Button>Default</Button>
        </Popover>

        <Popover content={popoverContent}>
          <Button>Default</Button>
        </Popover>
      </Box2>
    </Box2>
  )
}

Placement.parameters = {
  storyshots: { disable: true },
}

// Can't have usePopover at the top level of a story because it ends up at the same level
// as ComponentsProvider and can't access FocusTrapContext or ScrollLockContext
const MovingTargetInner = () => {
  const { value, toggle } = useToggle()
  const { popover, popperInstanceRef, open, ref, isOpen } = usePopover({
    content: (
      <PopoverContent p="u5" width="360px">
        <Paragraph>
          The anchor is moving around so the Popover position must be updated
          via popperInstanceRef.current.update.
        </Paragraph>
      </PopoverContent>
    ),
    placement: 'right-end',
  })

  useEffect(() => {
    popperInstanceRef.current && popperInstanceRef.current.update()
  }, [popperInstanceRef, value])

  useEffect(() => {
    const int = setInterval(() => {
      toggle()
    }, 6000)
    return () => {
      clearInterval(int)
    }
  }, [toggle])
  return (
    <Box2 mt="large">
      <Heading>Moving Target</Heading>
      {popover}
      <Box2
        mt={value ? 'xxxlarge' : 'medium'}
        border
        width={150}
        p="u3"
        cursor="pointer"
        height={value ? 80 : undefined}
        onClick={open}
        ref={ref}
        className={isOpen ? 'active' : ''}
      >
        Open Popover
      </Box2>
    </Box2>
  )
}

export const MovingTarget = () => <MovingTargetInner />

MovingTarget.parameters = {
  storyshots: { disable: true },
}

export const MouseUp = () => {
  return (
    <SpaceVertical>
      <Paragraph>
        Test that the the 1st click outside is cancelled and that clicking the
        Popover's trigger a 2nd time closes the Popover
      </Paragraph>
      <Paragraph>
        Previously, the useCapture = true on the mouseup listener caused the
        click outside behavior to break on any page that has a React onMouseUp
        on any element.
      </Paragraph>
      <Space>
        <Popover content="Popover 1">
          <Button>Open 1st Popover</Button>
        </Popover>
        <Popover content="Popover 2">
          <Button>Open 2nd Popover</Button>
        </Popover>
        <Button
          onClick={() => alert('I should be canceled if a Popover was open')}
        >
          Click
        </Button>
        <Button onMouseUp={() => alert('A simple onMouseUp')}>onMouseUp</Button>
      </Space>
    </SpaceVertical>
  )
}

MouseUp.parameters = {
  storyshots: { disable: true },
}

export const MultiFunctionButton = () => {
  return (
    <Popover
      content={
        <PopoverContent>
          <CopyToClipboard success="Copied" content="Copy content">
            <Button>Copy</Button>
          </CopyToClipboard>
        </PopoverContent>
      }
    >
      <Button>Open Popover</Button>
    </Popover>
  )
}
MultiFunctionButton.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}

const Wrapper = () => {
  const [value, setValue] = React.useState('')
  const { closeModal } = React.useContext(DialogContext)

  return (
    <Box2 pt="u3" width="100%">
      <FieldCheckbox label="Checkbox" value="checked" />
      <Box2 pl="u6" pt="u2">
        <FieldRadioGroup
          options={[
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3' },
          ]}
          value={value}
          onChange={setValue}
        />
      </Box2>
      <Button onClick={closeModal}>Done</Button>
    </Box2>
  )
}

export const PopoverFieldRadioGroup = () => {
  return (
    <ComponentsProvider>
      <Box2 p="ui1" className="App">
        <Popover aria-haspopup width="300px" content={<Wrapper />}>
          <Button>Open Popover</Button>
        </Popover>
      </Box2>
    </ComponentsProvider>
  )
}

PopoverFieldRadioGroup.parameters = {
  storyshots: { disable: true },
}

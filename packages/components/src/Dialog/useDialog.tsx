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

import type { FC, ReactNode } from 'react'
import React, { useState } from 'react'
import type {
  DrawerPlacements,
  DialogDrawerWidth,
} from '../Drawer/DrawerSurface'
import { Portal } from '../Portal'
import {
  useAnimationState,
  useControlWarn,
  useFocusTrap,
  useID,
  useScrollLock,
} from '../utils'
import { Backdrop } from './Backdrop'
import { DialogContext } from './DialogContext'
import type { DialogSurfaceProps, DialogPlacements } from './DialogSurface'
import { DialogSurface } from './DialogSurface'
import type { DialogWidth } from './dialogWidth'

export interface UseDialogBaseProps {
  /**
   * Specify a callback to be called before trying to close the Popover. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Popover is closed
   */
  canClose?: () => boolean

  /**
   * Content to rendered within the Dialog surface.
   * @required
   */
  content: ReactNode

  /**
   * Dialog will be displayed immediately when rendered.
   * NOTE: Once rendered, changes to this value will be ignored. This property cannot
   * be used treat this component as "controlled"
   * @default false
   */
  defaultOpen?: boolean

  /**
   * The id of the dialog (if absent, a random id will be generated)
   */
  id?: string

  /**
   * Dialog will be displayed immediately when rendered.
   * @default undefined
   */
  isOpen?: boolean

  /**
   * function available after dialog is closed
   */
  onAfterClose?: () => void

  /**
   * function available after dialog is opened
   */
  onAfterOpen?: () => void

  /**
   * Specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void

  /**
   * Optional, for a controlled version of the component
   */
  setOpen?: (open: boolean) => void
}

export interface UseDialogProps extends UseDialogBaseProps, DialogSurfaceProps {
  /**
   * Specify a custom surface to use for Dialog surface.
   * This is intended for internal components use only (specifically `Drawer`)
   * @private
   */
  Surface?: FC
}

export interface UseDialogPropsInternal
  extends Omit<UseDialogProps, 'placement' | 'width'> {
  placement?: DialogPlacements | DrawerPlacements
  width?: DialogWidth | DialogDrawerWidth
}

export interface UseDialogResponseDom {
  onClick: () => void
  role: string
  'aria-expanded': boolean
}

export interface UseDialogResponse {
  isOpen: boolean
  setOpen: (open: boolean) => void
  dialog: ReactNode
  domProps: UseDialogResponseDom
}

export const useDialog = ({
  content,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  canClose,
  onAfterClose,
  onAfterOpen,
  onClose,
  setOpen: controlledSetOpen,
  Surface: CustomSurface,
  placement,
  id,
  ...surfaceProps
}: UseDialogPropsInternal): UseDialogResponse => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen)
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'useDialog',
  })

  if (Boolean(onClose) && Boolean(controlledSetOpen)) {
    // eslint-disable-next-line no-console
    throw new Error(
      'useDialog does not support setting both `setOpen` and `onClose`. Use just `setOpen`'
    )
  }

  /**
   * LEGACY SUPPORT
   * Eventually we need to deprecate support for `isOpen` without specifying a `setOpen`
   *  explicitly so we can unwind this semi-controlled state.
   */
  const isPartiallyControlled = controlledIsOpen !== undefined

  const isOpen =
    isPartiallyControlled || isControlled
      ? controlledIsOpen || false
      : uncontrolledIsOpen

  const { busy, className, renderDOM } = useAnimationState({
    enter: defaultOpen ? 'none' : undefined,
    isOpen,
    onAfterEntered: onAfterOpen,
    onAfterExited: onAfterClose,
  })

  const setOpen =
    isControlled && controlledSetOpen
      ? controlledSetOpen
      : setUncontrolledIsOpen

  const [, focusRef] = useFocusTrap({ clickOutsideDeactivates: true })
  const [, portalRef] = useScrollLock({ ref: focusRef })

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    if (canClose && !canClose()) return
    setOpen(false)
    onClose && onClose()
  }

  const RenderSurface = CustomSurface || DialogSurface

  const dialogId = useID(id)

  const dialog = renderDOM && (
    <DialogContext.Provider
      value={{
        busy,
        closeModal: handleClose,
        id: dialogId,
      }}
    >
      <Portal ref={portalRef}>
        <Backdrop className={className} onClick={handleClose} />
        <RenderSurface
          id={dialogId}
          aria-labelledby={`${dialogId}-heading`}
          aria-busy={busy ? true : undefined}
          className={className}
          placement={placement as DialogPlacements}
          {...surfaceProps}
        >
          {content}
        </RenderSurface>
      </Portal>
    </DialogContext.Provider>
  )

  return {
    dialog,
    domProps: {
      'aria-expanded': isOpen,
      onClick: handleOpen,
      role: 'button',
    },
    isOpen,
    setOpen,
  }
}

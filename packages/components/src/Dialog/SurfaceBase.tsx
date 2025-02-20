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

import { reset, omitStyledProps } from '@looker/design-tokens'
import type { FC } from 'react'
import React, { useContext, useRef } from 'react'
import styled, { css } from 'styled-components'
import { useGlobalHotkeys } from '../utils'
import { DialogContext } from './DialogContext'

const SurfaceLayout: FC<{ className?: string; id?: string }> = props => {
  const { closeModal } = useContext(DialogContext)

  const ref = useRef<null | HTMLDivElement>(null)

  useGlobalHotkeys('esc', closeModal, ref)

  return (
    <div
      data-overlay-surface={true}
      ref={ref}
      tabIndex={-1}
      {...omitStyledProps(props)}
    />
  )
}

export const surfaceTransition = () => css`
  ${({ theme }) => `${theme.transitions.moderate}ms ${theme.easings.ease}`}
`

export const SurfaceBase = styled(SurfaceLayout).attrs(() => ({
  'aria-modal': true,
  role: 'dialog',
}))`
  ${reset}

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`

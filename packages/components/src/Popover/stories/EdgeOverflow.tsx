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

import type { FC } from 'react'
import React from 'react'
import { ArrowDropDown } from '@styled-icons/material'
import { ButtonOutline } from '../../Button'
import { Box2 } from '../../Layout'
import { Popover } from '../Popover'
import { PopoverContent } from '../Layout/PopoverContent'

interface Props {
  top?: number
  left?: number
  bottom?: number
  right?: number
}

export const EdgeOverflow: FC<Props> = ({
  children,
  top,
  left,
  bottom,
  right,
}) => (
  <Box2 position="absolute" top={top} left={left} bottom={bottom} right={right}>
    <Popover
      content={
        <PopoverContent width="18rem" height="5rem">
          There's stuff here... it hits the edge{' '}
        </PopoverContent>
      }
    >
      <ButtonOutline iconAfter={<ArrowDropDown />} m="xxlarge">
        {children}
      </ButtonOutline>
    </Popover>
  </Box2>
)

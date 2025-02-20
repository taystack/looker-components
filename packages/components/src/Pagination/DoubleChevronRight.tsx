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
import type { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const DoubleChevronRight: StyledIcon = React.forwardRef<
  SVGSVGElement,
  StyledIconProps
>((props, ref) => {
  const attrs: React.SVGProps<SVGSVGElement> = {
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
  }

  return (
    <StyledIconBase
      iconAttrs={attrs}
      iconVerticalAlign="middle"
      iconViewBox="0 0 24 24"
      {...props}
      ref={ref}
    >
      <path d="M6 16.59L10.58 12L6 7.41L7.41 6L13.41 12L7.41 18L6 16.59Z" />

      <path d="M11 16.59L15.58 12L11 7.41L12.41 6L18.41 12L12.41 18L11 16.59Z" />
    </StyledIconBase>
  )
})

DoubleChevronRight.displayName = 'DoubleChevronRight'

export const DoubleChevronRightDimensions = { height: 24, width: 24 }

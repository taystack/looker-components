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

import type {
  CompatibleHTMLProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextColorProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  layout,
  position,
  reset,
  space,
  shouldForwardProp,
  textColor,
  typography,
  variant,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface UnorderedListProps
  extends CompatibleHTMLProps<HTMLUListElement>,
    PositionProps,
    LayoutProps,
    SpaceProps,
    TextColorProps,
    TypographyProps {
  /**
   * Specify the type of marker to place next to list items.
   *
   * @default none
   */
  type?: 'none' | 'bullet'
}

const typeVariant = variant({
  prop: 'type',
  variants: {
    bullet: {
      listStyleType: 'disc',
      pl: 'u4',
    },
    none: {
      listStyleType: 'none',
    },
  },
})

export const UnorderedList = styled.ul
  .withConfig({
    shouldForwardProp,
  })
  .attrs<UnorderedListProps>(({ color = 'body', type = 'none' }) => ({
    color,
    type,
  }))<UnorderedListProps>`
  ${reset}
  ${textColor}
  ${typography}
  ${typeVariant}
  ${space}

  ${position}
  ${layout}

  li {
    margin-bottom: ${({ theme }) => theme.space.u1};
  }
`

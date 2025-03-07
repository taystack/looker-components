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

import type { FlexboxProps } from '@looker/design-tokens'
import { flexbox, shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { ComplexLayoutProps } from '../utils/complex'
import { complexLayoutCSS } from '../utils/complex'

export interface FlexItemProps extends ComplexLayoutProps, FlexboxProps {}

/**
 * @deprecated - Use `Box2` or `div` instead.
 * NOTE: It's quite possible you don't need `FlexItem` at all
 */
export const FlexItem = styled.div.withConfig({
  shouldForwardProp,
})<FlexItemProps>`
  ${complexLayoutCSS}
  ${flexbox}
  /*
   * A min-width must be set here to resolve a firefox bug where any children
   * with style of text-overflow: ellipsis; will otherwise not truncate the
   * text appropriately. */
  min-width: 0; /* IMPORTANT!! Do not delete! */
`

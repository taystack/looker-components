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

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  color,
  reset,
  space,
  shouldForwardProp,
  typography,
} from '@looker/design-tokens'

export interface LegendProps
  extends SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLLegendElement> {}

export const Legend = styled.legend
  .withConfig({ shouldForwardProp })
  .attrs<LegendProps>(
    ({
      color = 'text4',
      fontFamily = 'brand',
      fontSize = 'medium',
      fontWeight = 'semiBold',
    }) => ({
      color,
      fontFamily,
      fontSize,
      fontWeight,
    })
  )<LegendProps>`
  ${reset}
  border: none;
  ${color}
  ${space}
  ${typography}
`

/**
 * `border: none;` override is a product-targeted fix
 * @TODO - Remove targeted fix when mitigated downstream
 **/

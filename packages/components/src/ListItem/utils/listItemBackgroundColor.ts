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

import type { Colors, Theme } from '@looker/design-tokens'
import { itemSelectedColor } from '@looker/design-tokens'
import { css } from 'styled-components'
import type { ListItemColorProp, ListItemStatefulProps } from '../types'

export type ListItemBackgroundColorProps = ListItemStatefulProps &
  ListItemColorProp & {
    /**
     * Indicates ripple is enabled and hover should not be used
     */
    ripple?: boolean
  }

/**
 * @TODO Remove hovered prop and hovered logic when ripple effect
 * is implemented in LkField components. All other ListItem related
 * components (i.e. ListItem, NavTreeItem, TreeItem) all use ripple
 * to handle hover state.
 */
export const listItemBackgroundColor = ({
  color,
  disabled,
  hovered: propsHovered,
  ripple,
  selected,
  theme: { colors },
}: ListItemBackgroundColorProps & { theme: Theme }) => {
  const stateColors = color
    ? {
        all: colors[`${color}Subtle` as keyof Colors],
        hovered: colors.ui1,
        selected: colors[`${color}Subtle` as keyof Colors],
      }
    : {
        all: itemSelectedColor(colors.ui2),
        hovered: colors.ui1,
        selected: itemSelectedColor(colors.ui2),
      }

  let renderedColor
  const hovered = !ripple && propsHovered

  if (disabled) renderedColor = 'transparent'
  else if (selected && hovered) renderedColor = stateColors.all
  else if (selected) renderedColor = stateColors.selected
  else if (hovered) renderedColor = stateColors.hovered
  else renderedColor = 'transparent'

  return css`
    background: ${renderedColor};
  `
}

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
import React, { cloneElement, isValidElement, useContext, useMemo } from 'react'
import { Flex } from '../../../Layout'
import {
  ComboboxContext,
  ComboboxMultiContext,
  OptionContext,
} from './ComboboxContext'
import type {
  ComboboxOptionIndicatorFunction,
  ComboboxOptionIndicatorProps,
} from './types'

function isIndicatorFunction(
  children: ReactNode | ComboboxOptionIndicatorFunction
): children is ComboboxOptionIndicatorFunction {
  return typeof children === 'function'
}

export const ComboboxOptionIndicator: FC<ComboboxOptionIndicatorProps> = ({
  children,
  indicator: propsIndicator,
  isActive,
  isSelected,
  isMulti,
  ...props
}) => {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const { indicatorPropRef } = contextToUse
  const indicatorToUse =
    propsIndicator !== undefined
      ? propsIndicator
      : indicatorPropRef && indicatorPropRef.current

  const option = useContext(OptionContext) || { value: '' }
  const { label, value } = option

  const indicator = useMemo(() => {
    const indicatorProps = { isActive, isSelected, label, value }
    if (isValidElement(indicatorToUse)) {
      return cloneElement(indicatorToUse, indicatorProps)
    } else if (isIndicatorFunction(indicatorToUse)) {
      return indicatorToUse(indicatorProps)
    }
    return indicatorToUse
  }, [indicatorToUse, isActive, isSelected, value, label])

  const content = indicator === undefined ? children : indicator

  return (
    <Flex
      width={content ? 'small' : 'none'}
      alignItems="flex-start"
      flexShrink={0}
      justifyContent="center"
      mr="xsmall"
      {...props}
    >
      {content}
    </Flex>
  )
}

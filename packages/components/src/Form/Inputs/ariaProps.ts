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

import omit from 'lodash/omit'
import pick from 'lodash/pick'
import type { AriaAttributes } from 'react'
import type { ValidationType } from '../ValidationMessage'

const ariaKeys = [
  'aria-describedby',
  'aria-invalid',
  'aria-label',
  'aria-labelledby',
] as const

type SelectedAriaAttributes = Pick<AriaAttributes, typeof ariaKeys[number]>

export interface AriaAndValidationProps extends SelectedAriaAttributes {
  required?: boolean
  validationType?: ValidationType
}

export function pickAriaAndValidationProps({
  required,
  validationType,
  ...props
}: AriaAndValidationProps) {
  const ariaProps = pick(props, ariaKeys)
  return { ...ariaProps, 'aria-invalid': validationType === 'error', required }
}

export function omitAriaAndValidationProps(props: AriaAndValidationProps) {
  return omit(props, [...ariaKeys, 'validationType', 'required'])
}

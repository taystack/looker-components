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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Basic, Detail, HideClose } from './DialogHeader.stories'
import { DialogHeader } from './DialogHeader'

describe('DialogHeader', () => {
  test('basic', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Heading')).toBeInTheDocument()
  })

  test('Close visible by default', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('Detail text visible', () => {
    renderWithTheme(<Detail />)
    expect(screen.getByText('Detail text')).toBeInTheDocument()
  })

  test('hideClose', () => {
    renderWithTheme(<HideClose />)
    expect(screen.queryByText('Close')).not.toBeInTheDocument()
  })

  test('aria-label', () => {
    renderWithTheme(
      <DialogHeader aria-label="label test">Hello World</DialogHeader>
    )
    expect(screen.getByLabelText('label test')).toBeInTheDocument()
  })

  test('detail = null, no close option', () => {
    renderWithTheme(<DialogHeader detail={null}>Hello World</DialogHeader>)
    expect(screen.queryByText('Close')).not.toBeInTheDocument()
  })
})

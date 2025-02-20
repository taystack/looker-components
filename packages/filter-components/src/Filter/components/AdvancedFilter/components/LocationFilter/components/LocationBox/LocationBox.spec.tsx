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
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { LocationBox } from './LocationBox'

describe('LocationBox filter test', () => {
  it('should render a LocationBox', () => {
    const item = {
      id: '1',
      type: 'anywhere',
      is: true,
      lat: 1,
      lon: 1,
      lat1: 5,
      lon1: 5,
    }
    renderWithTheme(<LocationBox item={item} onChange={jest.fn()} />)
    expect(screen.getByText('FROM LATITUDE')).toBeVisible()
    expect(screen.getByText('TO LATITUDE')).toBeVisible()
    expect(screen.getAllByText('LONGITUDE')).toHaveLength(2)
    expect(screen.getAllByDisplayValue('1')).toHaveLength(2)
    expect(screen.getAllByDisplayValue('5')).toHaveLength(2)
  })
})

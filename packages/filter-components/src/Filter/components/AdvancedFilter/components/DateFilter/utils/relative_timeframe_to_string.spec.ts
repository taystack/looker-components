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

import { renderHook } from '@testing-library/react-hooks'
import { AllPresetTimeframes } from '../types/relative_timeframe_types'
import { useRelativeTimeframeToString } from './relative_timeframe_to_string'

jest.mock('@looker/i18n', () => ({
  ...jest.requireActual('@looker/i18n'),
  // this mock makes sure any components using the translate hook can use it without breaking tests
  useTranslationBase: () => {
    return {
      t: (str: string) => str,
    }
  },
}))

describe('Relative Timeframe to String', () => {
  it('should return the preset name for presets', () => {
    const {
      result: { current },
    } = renderHook(useRelativeTimeframeToString, {
      initialProps: AllPresetTimeframes.ThisMonth,
    })
    expect(current).toEqual('This Month')
  })

  it('should return a formatted range for custom timeframes', () => {
    const {
      result: { current },
    } = renderHook(useRelativeTimeframeToString, {
      initialProps: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 2, 1),
      },
    })
    expect(current).toEqual('2019/01/01 - 2019/03/01')
  })
})

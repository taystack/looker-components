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
import { useEffect, useRef } from 'react'

// render a console warning if developers pass in a value without a change listener
export function useReadOnlyWarn<V, CB>(name: string, value: V, onChange: CB) {
  const unintentionalReadOnly = useRef(false)
  useEffect(() => {
    if (value && !onChange) {
      // eslint-disable-next-line no-console
      console.error(
        `Warning: Failed prop type: You provided a \`value\` prop to <${name} /> without an \`onChange\` handler. This will render a read-only field. If the field should be mutable use \`defaultValue\` instead. Otherwise, please provide an \`onChange\` callback.`
      )
      unintentionalReadOnly.current = true
    }
  }, [value, onChange, name])
  return unintentionalReadOnly.current
}

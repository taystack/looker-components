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

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import omit from 'lodash/omit'
import { useID } from '../../../utils'
import type { RangeSliderProps } from '../../Inputs/RangeSlider'
import { RangeSlider } from '../../Inputs/RangeSlider'
import type { FieldProps } from '../Field'
import { Field, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldRangeSliderProps
  extends RangeSliderProps,
    Omit<FieldProps, 'validationMessage'> {}

const FieldRangeSliderComponent = forwardRef(
  (props: FieldRangeSliderProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    return (
      <Field
        data-testid="FieldSliderId"
        {...pickFieldProps(omit(props, 'validationMessage'))}
        id={id}
        ariaLabelOnly
      >
        <RangeSlider
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          aria-labelledby={`labelledby-${id}`}
          id={id}
          ref={ref}
        />
      </Field>
    )
  }
)

FieldRangeSliderComponent.displayName = 'FieldRangeSliderComponent'

export const FieldRangeSlider = styled(FieldRangeSliderComponent)``

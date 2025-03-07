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
import {
  ProgressCircular,
  RadioGroup as RadioGroupComponent,
} from '@looker/components'
import compact from 'lodash/compact'
import pick from 'lodash/pick'
import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '../../../../../utils'
import type { StringSingleSelectProps } from '../../../../types/string_select_props'

const InternalRadioGroup: FC<StringSingleSelectProps> = ({
  isLoading,
  value = '',
  options,
  anyOption,
  ...props
}) => {
  const { t } = useTranslation('RadioGroup')
  const optionsWithAny = compact([
    anyOption && { label: t('any value'), value: '' },
    ...options,
  ])

  return isLoading ? (
    <ProgressCircular size="medium" />
  ) : (
    <RadioGroupComponent
      options={optionsWithAny}
      value={value}
      {...pick(props, ['inline', 'onChange'])}
    />
  )
}

export const RadioGroup = styled(InternalRadioGroup)``

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
import type {
  FilterTypeMap,
  NumberFilterType,
} from '@looker/filter-expressions'
import { MatchesAdvanced } from '../../MatchesAdvanced'
import { UserAttributes } from '../../UserAttributes'

import { Between } from '../components/Between'
import { MultiInput } from '../components/MultiInput'
import { SingleNumberInput } from '../components/SingleNumberInput'

const Blank = () => ''

const filterTypeToNumberMap: FilterTypeMap<NumberFilterType> = {
  '=': MultiInput,
  '>': SingleNumberInput,
  '<': SingleNumberInput,
  '>=': SingleNumberInput,
  '<=': SingleNumberInput,
  between: Between,
  null: Blank,
  user_attribute: UserAttributes,
}

const filterTypeToNumberMapSingleInput: FilterTypeMap<string> = {
  '=': SingleNumberInput,
}

export const numberFilterTypeToFilter = (
  type: NumberFilterType,
  allowMultipleOptions: boolean,
  isParameterField?: boolean
) => {
  if (
    (!allowMultipleOptions || isParameterField) &&
    filterTypeToNumberMapSingleInput[type]
  ) {
    return filterTypeToNumberMapSingleInput[type]
  }
  return filterTypeToNumberMap[type] || MatchesAdvanced
}

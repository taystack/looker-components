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
import any from 'lodash/fp/any'
import allPass from 'lodash/fp/allPass'
import flow from 'lodash/fp/flow'
import type { FilterModel } from '../types'
import { TYPE_USER_ATTRIBUTE } from '../types'
import { treeToList } from './tree'

const isUserAttributeNode = ({ type }: FilterModel) =>
  type === TYPE_USER_ATTRIBUTE

const hasNoAttributeValue = ({ attributeValue }: FilterModel) => !attributeValue

/**
 * checks if the ast has:
 * - any node of type 'userAttribute'
 * - and that node has no value
 */
export const hasUserAttributeNodeWithoutValue = flow([
  treeToList,
  any(allPass([isUserAttributeNode, hasNoAttributeValue])),
])

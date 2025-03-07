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

import { i18nInitComponents } from '@looker/i18n'
import type { I18nStateWithDates as _I18nStateWithDates } from '@looker/i18n'
import merge from 'lodash/merge'
import { en } from '../locales'

export type I18nStateWithDates = _I18nStateWithDates
/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export async function i18nInit({
  locale = 'en',
  resources,
  dateLocale,
}: I18nStateWithDates = en) {
  // Merge with English in case there are translations missing
  // from the resources passed in
  const mergedResources = merge({}, resources, en.resources)

  return i18nInitComponents({ dateLocale, locale, resources: mergedResources })
}

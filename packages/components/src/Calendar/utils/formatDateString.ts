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

import { getDateLocale } from '@looker/i18n'
import format from 'date-fns-tz/format'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'
import type { Locale } from 'date-fns'
import repeat from 'lodash/repeat'
import trim from 'lodash/trim'

type Full = 'full'
type Long = 'long'
type Medium = 'medium'
type Short = 'short'

type Formats = Full | Long | Medium | Short

const dateFormatRepetitions: Record<Formats, number> = {
  full: 4,
  long: 3,
  medium: 2,
  short: 1,
}

export type DateFormats = keyof typeof dateFormatRepetitions

export type DateTimeOptions = {
  date?: boolean
  time?: boolean
}

const isDateFormat = (stringFormat: string) =>
  dateFormatRepetitions[stringFormat as DateFormats]

const getStringFormat = (
  stringFormat: DateFormats,
  timeZone: undefined | string = undefined,
  { date = true, time = true }: DateTimeOptions
) => {
  const dateFormat = repeat('P', dateFormatRepetitions[stringFormat]) // PPP... is localized date format in date-fns
  const timeFormat = repeat('p', dateFormatRepetitions[stringFormat]) // ppp... is localized time format in date-fns
  const timeZoneFormat = repeat('z', dateFormatRepetitions[stringFormat]) /// zzz... is localize timezone format in date-fns

  return trim(
    `${date ? dateFormat : ''}${time ? timeFormat : ''} ${
      timeZone ? timeZoneFormat : ''
    }`
  )
}

export const formatDateString = (
  date?: Date,
  stringFormat: DateFormats | string = 'P',
  locale: Locale = getDateLocale(),
  timeZone: undefined | string = undefined,
  options: DateTimeOptions = {}
): string | '' => {
  if (!date) {
    return ''
  }

  const renderedDate = timeZone ? utcToZonedTime(date, timeZone) : date

  const actualFormat = isDateFormat(stringFormat)
    ? getStringFormat(stringFormat as DateFormats, timeZone, options)
    : stringFormat

  return format(renderedDate, actualFormat, {
    locale,
    ...(timeZone && { timeZone }),
  })
}

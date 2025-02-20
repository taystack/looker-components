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
import dateLocale from 'date-fns/locale/ko'
import type { I18nStateWithDates } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': '필드 지우기',
  },
  AvatarButton: {
    'Profile Picture': '프로필 사진',
  },
  AvatarUser: {
    Avatar: '아바타',
  },
  BulkActions: {
    AllPageCountDisplayedSelected: '표시된 항목 {{pageCount}}개 모두 선택됨',
    AllTotalCountSelected: '{{totalCount}}개 항목 모두 선택됨',
    'Bulk Actions': '일괄 작업',
    'Clear Selection': '선택 지우기',
    SelectAllCountResults: '{{totalCount}}개 결과 모두 선택',
    SelectedCountOfTotalDisplayed:
      '표시된 항목 {{selectedItemCount}}/{{pageCount}}개 선택됨',
  },
  CalendarNav: {
    'next month': '다음 달',
    'previous month': '이전 달',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': '체크 표시 섞임',
  },
  Chip: {
    Delete: '삭제',
  },
  ColumnSelector: {
    Apply: '적용',
    Cancel: '취소',
    'Select All': '모두 선택',
    'Select None': '선택 안 함',
    'Select columns to display': '표시할 열 선택',
  },
  ConfirmationDialog: {
    Cancel: '취소',
    Confirm: '확인',
  },
  CopyToClipboard: {
    Copied: '복사됨',
    'Copy to Clipboard': '클립보드에 복사',
  },
  DataTable: {
    'No Results': '결과 없음',
  },
  DataTableItem: {
    Options: '옵션',
  },
  FieldTimeSelect: {
    'Please enter a valid time': '올바른 시간을 입력하십시오',
  },
  GetIntentLabel: {
    Error: '오류',
    Inform: '알림',
    Success: '성공',
    Warning: '경고',
  },
  InputDate: {
    'Open calendar': '캘린더 열기',
  },
  InputDateRange: {
    'End date': '종료 날짜',
    'Start date': '시작 날짜',
  },
  InputFilters: {
    'Clear Filters': '필터 지우기',
    'Filter List': '필터 목록',
    'bottom-start': 'bottom-start',
  },
  InputTimeSelect: {
    'Select time': '시간 선택',
  },
  MessageBar: {
    DismissIntent: '{{intent}} 취소',
  },
  ModalHeaderCloseButton: {
    Close: '닫기',
  },
  MonthPickerNav: {
    close: '닫기',
    'next year': '내년',
    'previous year': '작년',
  },
  PageSize: {
    Display: '표시',
    of: '/',
  },
  Pagination: {
    'First page of results': '결과 첫 번째 페이지',
    'Last page of results': '결과 마지막 페이지',
    'Next page of results': '결과 다음 페이지',
    'Previous page of results': '결과 이전 페이지',
    of: '/',
  },
  PanelHeader: {
    CloseTitle: '{{title}} 닫기',
  },
  PopoverFooter: {
    Done: '완료',
  },
  PromptDialog: {
    Cancel: '취소',
    Save: '저장',
  },
  RangeSlider: {
    'Maximum Value': '최댓값',
    'Minimum Value': '최솟값',
  },
  RequiredStar: {
    required: '필수',
  },
  SelectOptions: {
    Loading: '로드 중',
    'No options': '옵션 없음',
  },
  TabList: {
    Tabs: '탭',
  },
}

export const koKR: I18nStateWithDates = {
  dateLocale,
  locale: 'ko-KR',
  resources: { 'ko-KR': resources },
}

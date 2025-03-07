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
import dateLocale from 'date-fns/locale/hi'
import type { I18nStateWithDates } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'फ़ील्ड साफ़ करें',
  },
  AvatarButton: {
    'Profile Picture': 'प्रोफ़ाइल फ़ोटो',
  },
  AvatarUser: {
    Avatar: 'अवतार',
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'सभी {{pageCount}} दिखाए गए आइटम चुने गए',
    AllTotalCountSelected: 'सभी {{totalCount}} आइटम चुने गए',
    'Bulk Actions': 'बल्क क्रियाएं',
    'Clear Selection': 'चुना गया हटाएं',
    SelectAllCountResults: 'सभी {{totalCount}} नतीजे चुनें',
    SelectedCountOfTotalDisplayed:
      '{{pageCount}} के {{selectedItemCount}} दिखाए गए आइटम चुने गए',
  },
  CalendarNav: {
    'next month': 'अगले महीने',
    'previous month': 'पिछले महीने',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'चेक मार्क मिलाया गया',
  },
  Chip: {
    Delete: 'मिटाएं',
  },
  ColumnSelector: {
    Apply: 'लागू करें',
    Cancel: 'रद्द करें',
    'Select All': 'सभी को चुनें',
    'Select None': 'कोई नहीं चुनें',
    'Select columns to display': 'दिखाने के लिए कॉलम चुनें',
  },
  ConfirmationDialog: {
    Cancel: 'रद्द करें',
    Confirm: 'पुष्टि करें',
  },
  CopyToClipboard: {
    Copied: 'कॉपी किया गया',
    'Copy to Clipboard': 'क्लिपबोर्ड पर कॉपी करें',
  },
  DataTable: {
    'No Results': 'कोई नतीजा नहीं',
  },
  DataTableItem: {
    Options: 'विकल्प',
  },
  FieldTimeSelect: {
    'Please enter a valid time': 'कृपया मान्य समय दर्ज करें',
  },
  GetIntentLabel: {
    Error: 'त्रुटि',
    Inform: 'जानकारी दें',
    Success: 'सफल',
    Warning: 'चेतावनी',
  },
  InputDate: {
    'Open calendar': 'कैलेंडर खोलें',
  },
  InputDateRange: {
    'End date': 'समाप्ति दिनांक',
    'Start date': 'शुरू होने का दिनांक',
  },
  InputFilters: {
    'Clear Filters': 'फ़िल्टर साफ़ करें',
    'Filter List': 'सूची फ़िल्टर करें',
    'bottom-start': 'बॉटम-स्टार्ट',
  },
  InputTimeSelect: {
    'Select time': 'समय चुनें',
  },
  MessageBar: {
    DismissIntent: '{{intent}} खारिज करें',
  },
  ModalHeaderCloseButton: {
    Close: 'बंद करें',
  },
  MonthPickerNav: {
    close: 'बंद करें',
    'next year': 'अगला वर्ष',
    'previous year': 'पिछला वर्ष',
  },
  PageSize: {
    Display: 'प्रदर्शित करें',
    of: 'में से',
  },
  Pagination: {
    'First page of results': 'नतीजों का पहला पेज',
    'Last page of results': 'नतीजों का अंतिम पेज',
    'Next page of results': 'नतीजों का अगला पेज',
    'Previous page of results': 'नतीजों का पिछला पेज',
    of: 'में से',
  },
  PanelHeader: {
    CloseTitle: '{{title}} बंद करें',
  },
  PopoverFooter: {
    Done: 'हो गया',
  },
  PromptDialog: {
    Cancel: 'रद्द करें',
    Save: 'सहेजें',
  },
  RangeSlider: {
    'Maximum Value': 'अधिकतम मान',
    'Minimum Value': 'न्यूनतम मान',
  },
  RequiredStar: {
    required: 'आवश्यक',
  },
  SelectOptions: {
    Loading: 'लोड हो रहा है',
    'No options': 'कोई विकल्प नहीं',
  },
  TabList: {
    Tabs: 'टैब',
  },
}

export const hiIN: I18nStateWithDates = {
  dateLocale,
  locale: 'hi-IN',
  resources: { 'hi-IN': resources },
}

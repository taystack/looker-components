"use strict";

var _string_filter_type_to_filter = require("./string_filter_type_to_filter");

describe('string filter options', function () {
  it('should use multi input filter if allowMultipleValues is true', function () {
    expect((0, _string_filter_type_to_filter.stringFilterTypeToFilter)('match', false, true).displayName).toBe('MultiStringInput');
  });
  it('should use single input filter if allowMultipleValues is false', function () {
    expect((0, _string_filter_type_to_filter.stringFilterTypeToFilter)('match', false, false).displayName).toBe('StringInput');
  });
  it('should use single input filter for parameter filters even if allowMultipleValues is true', function () {
    expect((0, _string_filter_type_to_filter.stringFilterTypeToFilter)('match', true, true).displayName).toBe('StringInput');
  });
});
//# sourceMappingURL=string_filter_type_to_filter.spec.js.map
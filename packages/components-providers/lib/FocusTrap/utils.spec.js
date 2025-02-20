import { waitFor } from '@testing-library/react';
import { activateFocusTrap } from './utils';
test('activateFocusTrap calls document.activeElement.matches(":focus-visible") to focus the first element', async () => {
  const mockMatches = jest.fn();
  Object.defineProperty(document, 'activeElement', {
    value: document.createElement('button')
  });

  if (document.activeElement) {
    document.activeElement.matches = mockMatches;
  }

  activateFocusTrap({
    element: document.body
  });
  await waitFor(() => {
    expect(mockMatches).toHaveBeenCalledWith(':focus-visible');
  });
});
//# sourceMappingURL=utils.spec.js.map
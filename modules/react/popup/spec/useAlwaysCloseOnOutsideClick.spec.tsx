import {renderHook} from '@testing-library/react-hooks';
import {useAlwaysCloseOnOutsideClick} from '../lib/useAlwaysCloseOnOutsideClick';

describe('useAlwaysCloseOnOutsideClick', () => {
  it('should add "data-behavior-click-outside-close=topmost" attribute', () => {
    const ref = {current: document.createElement('div')};
    const onClose = jest.fn();

    renderHook(() => useAlwaysCloseOnOutsideClick(ref, onClose));

    expect(ref.current).toHaveAttribute('data-behavior-click-outside-close', 'always');
  });
});

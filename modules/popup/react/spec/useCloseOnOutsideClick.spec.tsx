import {renderHook} from '@testing-library/react-hooks';
import {useCloseOnOutsideClick} from '../lib/useCloseOnOutsideClick';

describe('useCloseOnOutsideClick', () => {
  it('should add "data-behavior-click-outside-close=topmost" attribute', () => {
    const ref = {current: document.createElement('div')};
    const onClose = jest.fn();

    renderHook(() => useCloseOnOutsideClick(ref, onClose));

    expect(ref.current).toHaveAttribute('data-behavior-click-outside-close', 'topmost');
  });
});

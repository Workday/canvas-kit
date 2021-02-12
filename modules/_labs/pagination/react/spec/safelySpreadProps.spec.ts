import {safelySpreadProps} from '../lib/Pagination/common/utils/safelySpreadProps';
const context = describe;

describe('safelySpreadProps', () => {
  const styleProps = {
    display: 'inline-flex',
    margin: 'xs',
    maxHeight: 240,
    width: 55,
  };

  const elementProps = {
    type: 'text',
    id: 'a380d50-e49d-4ebd-bb01-d9fcfeda7a6c',
    class: 'css-byi76b',
    size: '1',
    value: '',
  };
  context('given style and element props', () => {
    it('should remove all style props', () => {
      const safeProps = safelySpreadProps({
        ...styleProps,
        ...elementProps,
      });

      expect(safeProps).not.toEqual(styleProps);
    });

    it('should retain all element props', () => {
      const safeProps = safelySpreadProps({
        ...styleProps,
        ...elementProps,
      });

      expect(safeProps).toEqual(elementProps);
    });
  });
});

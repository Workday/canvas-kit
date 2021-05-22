import {layout, LayoutStyleProps} from '../lib/utils/layout';

describe('Layout Style Props Function', () => {
  it('should ignore non-layout props', () => {
    const props = {
      flex: 1,
      children: null,
      minHeight: '100vh',
    } as LayoutStyleProps;
    const expected = {minHeight: '100vh'};
    const layoutStyles = layout(props);

    expect(layoutStyles).toEqual(expected);
  });

  it('should handle generic props (string and number)', () => {
    const props = {
      display: 'inline-block',
      height: 100,
      listStyle: 'none',
      maxHeight: '150vh',
      maxWidth: '4rem',
      minHeight: '100vh',
      minWidth: '80px',
      overflow: 'initial',
      overflowX: 'auto',
      overflowY: 'scroll',
      verticalAlign: 'baseline',
      width: '4rem',
    } as LayoutStyleProps;
    const expected = props;
    const layoutStyles = layout(props);

    expect(layoutStyles).toEqual(expected);
  });
});

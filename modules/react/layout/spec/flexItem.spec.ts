import {flexItem, FlexItemStyleProps} from '@workday/canvas-kit-react/layout';

describe('FlexItem Style Props Function', () => {
  it('should ignore non-flex-item props', () => {
    const props = {
      depth: 'none',
      children: null,
      flex: 1,
    } as FlexItemStyleProps;
    const expected = {flex: 1};
    const flexItemStyles = flexItem(props);

    expect(flexItemStyles).toEqual(expected);
  });

  it('should handle generic props (string and number)', () => {
    const props = {
      flexGrow: 0,
      flexShrink: '1',
      flexBasis: '330px',
      justifySelf: 'flex-start',
      alignSelf: 'center',
      order: -1,
    } as FlexItemStyleProps;
    const expected = props;
    const flexItemStyles = flexItem(props);

    expect(flexItemStyles).toEqual(expected);
  });
});

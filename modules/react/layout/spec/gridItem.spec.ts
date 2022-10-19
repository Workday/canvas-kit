import {gridItem, GridItemStyleProps} from '../lib/utils/gridItem';

describe('gridItem Style Props Function', () => {
  it('should ignore non-grid-item props', () => {
    const props = {
      depth: 'none',
      children: null,
      placeSelf: 'start center',
    } as GridItemStyleProps;
    const expected = {placeSelf: 'start center'};
    const gridItemStyles = gridItem(props);

    expect(gridItemStyles).toEqual(expected);
  });

  it('should handle generic props (string and number)', () => {
    const props = {
      gridColumnStart: 1,
      gridRowStart: '1',
      gridArea: 'Card',
      justifySelf: 'start',
      alignSelf: 'center',
    } as GridItemStyleProps;
    const expected = props;
    const gridItemStyles = gridItem(props);

    expect(gridItemStyles).toEqual(expected);
  });
});

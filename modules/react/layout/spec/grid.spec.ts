import {grid, GridStyleProps} from '../lib/utils/grid';

describe('Grid Style Props Function', () => {
  it('should ignore non-grid props', () => {
    const props = {
      paddingX: 's',
      children: null,
      gridAutoFlow: 'column',
    } as GridStyleProps;
    const expected = {gridAutoFlow: 'column'};
    const gridStyles = grid(props);

    expect(gridStyles).toEqual(expected);
  });

  it('should handle generic grid props (string)', () => {
    const props = {
      alignItems: 'center',
      alignContent: 'center',
      display: 'grid',
      justifyItems: 'end',
      justifyContent: 'end',
      gridGap: 'inherit',
    } as GridStyleProps;
    const expected = props;
    const gridStyles = grid(props);

    expect(gridStyles).toEqual(expected);
  });
});

import {flex, FlexStyleProps} from '../lib/utils/flex';

describe('Flex Style Props Function', () => {
  it('should ignore non-flex props', () => {
    const props = {
      paddingX: 's',
      children: null,
      flexDirection: 'column',
    } as FlexStyleProps;
    const expected = {flexDirection: 'column'};
    const flexStyles = flex(props);

    expect(flexStyles).toEqual(expected);
  });

  it('should handle generic flex props (string)', () => {
    const props = {
      alignItems: 'center',
      alignContent: 'center',
      display: 'inline-flex',
      justifyItems: 'flex-end',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      flexDirection: 'column',
    } as FlexStyleProps;
    const expected = props;
    const flexStyles = flex(props);

    expect(flexStyles).toEqual(expected);
  });
});

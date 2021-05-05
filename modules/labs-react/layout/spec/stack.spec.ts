import {stack, StackStyleProps} from '../lib/utils/stack';
import {space} from '@workday/canvas-kit-react/tokens';
const context = describe;

const selector = '& > *:not(style) ~ *:not(style)';

describe('Stack Style Props Function', () => {
  it('should ignore non-stack props', () => {
    const props = {
      paddingX: space.s,
      children: null,
      flexDirection: 'column',
      spacing: space.s,
    } as StackStyleProps;
    const expected = {
      [selector]: {
        marginTop: space.s,
      },
    };
    const stackStyles = stack(props);

    expect(stackStyles).toEqual(expected);
  });

  context('given flexDirection is set to column', () => {
    it('should set marginTop spacing', () => {
      const props = {
        flexDirection: 'column',
        spacing: space.m,
      } as StackStyleProps;
      const expected = {
        [selector]: {
          marginTop: space.m,
        },
      };
      const stackStyles = stack(props);

      expect(stackStyles).toEqual(expected);
    });
  });

  context('given flexDirection is set to column-reverse', () => {
    it('should set marginBottom spacing', () => {
      const props = {
        flexDirection: 'column-reverse',
        spacing: space.xxs,
      } as StackStyleProps;
      const expected = {
        [selector]: {
          marginBottom: space.xxs,
        },
      };
      const stackStyles = stack(props);

      expect(stackStyles).toEqual(expected);
    });
  });

  context('given flexDirection is set to row', () => {
    it('should set marginLeft spacing', () => {
      const props = {
        flexDirection: 'row',
        spacing: space.m,
      } as StackStyleProps;
      const expected = {
        [selector]: {
          marginLeft: space.m,
        },
      };
      const stackStyles = stack(props);

      expect(stackStyles).toEqual(expected);
    });
  });

  context('given flexDirection is set to row-reverse', () => {
    it('should set marginRight spacing', () => {
      const props = {
        flexDirection: 'row-reverse',
        spacing: space.m,
      } as StackStyleProps;
      const expected = {
        [selector]: {
          marginRight: space.m,
        },
      };
      const stackStyles = stack(props);

      expect(stackStyles).toEqual(expected);
    });
  });
});

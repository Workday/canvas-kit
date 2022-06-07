import {stack, StackStyleProps} from '../lib/utils/stack';
import {space} from '@workday/canvas-kit-react/tokens';
import {ContentDirection} from '@workday/canvas-kit-react/common';
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

  context('when ContentDirection is set to LTR', () => {
    context('given flexDirection is set to column', () => {
      it('should set marginTop spacing', () => {
        const props = {
          theme: {canvas: {direction: ContentDirection.LTR}},
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
          theme: {canvas: {direction: ContentDirection.LTR}},
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
          theme: {canvas: {direction: ContentDirection.LTR}},
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
          theme: {canvas: {direction: ContentDirection.LTR}},
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

  context('when ContentDirection is set to RTL', () => {
    context('given flexDirection is set to row', () => {
      it('should set marginRight spacing', () => {
        const props = {
          theme: {canvas: {direction: ContentDirection.RTL}},
          flexDirection: 'row',
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

    context('given flexDirection is set to row-reverse', () => {
      it('should set marginLeft spacing', () => {
        const props = {
          theme: {canvas: {direction: ContentDirection.RTL}},
          flexDirection: 'row-reverse',
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
  });
});

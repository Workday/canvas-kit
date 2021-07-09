import {ContentDirection} from '@workday/canvas-kit-react/common';
import {position, PositionStyleProps} from '../lib/utils/position';
const context = describe;

describe('Layout Style Props Function', () => {
  it('should ignore non-position props', () => {
    const props = {
      display: 'block',
      children: null,
      position: 'absolute',
    } as PositionStyleProps;
    const expected = {position: 'absolute'};
    const positionStyles = position(props);

    expect(positionStyles).toEqual(expected);
  });

  context('given standard position properties', () => {
    it('should handle generic props (string and number)', () => {
      const props = {
        position: 'fixed',
        zIndex: 2,
        top: '24',
        right: 0,
        bottom: '24',
        left: 0,
      } as PositionStyleProps;
      const expected = props;
      const positionStyles = position(props);

      expect(positionStyles).toEqual(expected);
    });

    it('should not translate attribute directions when RTL is detected', () => {
      const props = {
        left: '16px',
        right: '24px',
        theme: {
          canvas: {
            direction: ContentDirection.RTL,
          },
        },
      } as PositionStyleProps;
      const expected = {
        left: '16px',
        right: '24px',
      };
      const positionStyles = position(props);

      expect(positionStyles).toEqual(expected);
    });
  });

  context('given logical order position properties', () => {
    it('should translate attribute directions when RTL is detected', () => {
      const props = {
        insetInlineStart: '16px',
        insetInlineEnd: '24px',
        theme: {
          canvas: {
            direction: ContentDirection.RTL,
          },
        },
      } as PositionStyleProps;
      const expected = {
        right: '16px',
        left: '24px',
      };
      const positionStyles = position(props);

      expect(positionStyles).toEqual(expected);
    });
  });
});

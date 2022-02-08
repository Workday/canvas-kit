import {space} from '../lib/utils/space';
import {ContentDirection} from '@workday/canvas-kit-react/common';
const context = describe;

describe('Space Style Props Function', () => {
  it('should ignore non-space props', () => {
    const props = {
      position: 'absolute',
      children: null,
      margin: '12px',
    };
    const expected = {margin: '12px'};
    const colorStyles = space(props);

    expect(colorStyles).toEqual(expected);
  });

  context('given standard space props', () => {
    it('should handle generic props (string and number)', () => {
      const props = {
        margin: 24,
        marginTop: '12px',
        marginRight: 12,
        marginBottom: '12px',
        marginLeft: 12,
        padding: '32px',
        paddingTop: 16,
        paddingRight: '16px',
        paddingBottom: 16,
        paddingLeft: '16px',
      };
      const expected = props;
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });

    it('should translate tokens to style values', () => {
      const props = {
        margin: 'zero',
        marginTop: 'xxxs',
        marginRight: 'xxs',
        marginBottom: 'xs',
        marginLeft: 's',
        padding: 'm',
        paddingTop: 'l',
        paddingRight: 'xl',
        paddingBottom: 'xxl',
        paddingLeft: 'xxxl',
      };
      const expected = {
        margin: '0px',
        marginTop: '4px',
        marginRight: '8px',
        marginBottom: '12px',
        marginLeft: '16px',
        padding: '24px',
        paddingTop: '32px',
        paddingRight: '40px',
        paddingBottom: '64px',
        paddingLeft: '80px',
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });

    it('should properly set paddingX and paddingY values', () => {
      const props = {
        paddingX: 's',
        paddingY: 'm',
      };
      const expected = {
        paddingTop: '24px',
        paddingRight: '16px',
        paddingBottom: '24px',
        paddingLeft: '16px',
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });

    it('should properly set marginX and marginY values', () => {
      const props = {
        marginX: 'l',
        marginY: 'xl',
      };
      const expected = {
        marginTop: '40px',
        marginRight: '32px',
        marginBottom: '40px',
        marginLeft: '32px',
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });

    it('should not translate attribute directions when RTL is detected', () => {
      const props = {
        marginLeft: '16px',
        marginRight: '24px',
        paddingLeft: '32px',
        paddingRight: '40px',
        theme: {
          canvas: {
            direction: ContentDirection.RTL,
          },
        },
      };
      const expected = {
        marginLeft: '16px',
        marginRight: '24px',
        paddingLeft: '32px',
        paddingRight: '40px',
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });
  });

  context('given logical order space props', () => {
    it('should handle generic props (string and number)', () => {
      const props = {
        marginInlineStart: '16px',
        marginInlineEnd: 24,
        paddingInlineStart: '16px',
        paddingInlineEnd: 24,
      };
      const expected = {
        marginLeft: '16px',
        marginRight: 24,
        paddingLeft: '16px',
        paddingRight: 24,
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });

    it('should translate tokens to style values', () => {
      const props = {
        marginInlineStart: 's',
        marginInlineEnd: 'm',
        paddingInlineStart: 'l',
        paddingInlineEnd: 'xl',
      };
      const expected = {
        marginLeft: '16px',
        marginRight: '24px',
        paddingLeft: '32px',
        paddingRight: '40px',
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });

    it('should translate attribute directions when RTL is detected', () => {
      const props = {
        marginInlineStart: 's',
        marginInlineEnd: 'm',
        paddingInlineStart: 'l',
        paddingInlineEnd: 'xl',
        theme: {
          canvas: {
            direction: ContentDirection.RTL,
          },
        },
      };
      const expected = {
        marginLeft: '24px',
        marginRight: '16px',
        paddingLeft: '40px',
        paddingRight: '32px',
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });
  });
});

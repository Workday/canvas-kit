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
  });
});

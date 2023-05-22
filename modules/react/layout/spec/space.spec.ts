import {space} from '../lib/utils/space';
import {ContentDirection} from '@workday/canvas-kit-react/common';
const context = describe;

describe('Space Style Props Function', () => {
  it('should ignore non-space props', () => {
    const props = {
      position: 'absolute',
      children: null,
      margin: '0.75rem',
    };
    const expected = {margin: '0.75rem'};
    const colorStyles = space(props);

    expect(colorStyles).toEqual(expected);
  });

  context('given standard space props', () => {
    it('should handle generic props (string and number)', () => {
      const props = {
        margin: 1.5,
        marginTop: '0.75rem',
        marginRight: 0.75,
        marginBottom: '0.75rem',
        marginLeft: 0.75,
        padding: '2rem',
        paddingTop: 1,
        paddingRight: '1rem',
        paddingBottom: 1,
        paddingLeft: '1rem',
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
        margin: '0',
        marginTop: '0.25rem',
        marginRight: '0.5rem',
        marginBottom: '0.75rem',
        marginLeft: '1rem',
        padding: '1.5rem',
        paddingTop: '2rem',
        paddingRight: '2.5rem',
        paddingBottom: '4rem',
        paddingLeft: '5rem',
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
        paddingTop: '1.5rem',
        paddingRight: '1rem',
        paddingBottom: '1.5rem',
        paddingLeft: '1rem',
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
        marginTop: '2.5rem',
        marginRight: '2rem',
        marginBottom: '2.5rem',
        marginLeft: '2rem',
      };
      const spaceStyles = space(props);

      expect(spaceStyles).toEqual(expected);
    });
  });
});

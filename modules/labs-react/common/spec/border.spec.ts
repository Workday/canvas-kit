import {ContentDirection} from '@workday/canvas-kit-react/common';
import {border} from '../lib/utils/border';
const context = describe;

describe('Border Style Props Function', () => {
  it('should ignore non-border props', () => {
    const props = {
      paddingX: 's',
      children: null,
      border: 'solid 1px',
    };
    const expected = {border: 'solid 1px'};
    const borderStyles = border(props);

    expect(borderStyles).toEqual(expected);
  });

  context('given border-shorthand props', () => {
    it('should handle generic props (string)', () => {
      const props = {
        border: 'solid 1px #333333',
        borderTop: 'solid 1px #333333',
        borderRight: 'solid 1px #333333',
        borderBottom: 'solid 1px #333333',
        borderLeft: 'solid 1px #333333',
      };
      const expected = props;
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });
  });

  context('given border-color props', () => {
    it('should handle generic props (string)', () => {
      const props = {
        borderColor: '#000000',
        borderTopColor: 'rgba(255, 255, 255, 80%)',
        borderRightColor: 'rgb(51,51,51)',
        borderBottomColor: 'hsl(0, 0%, 12%)',
        borderLeftColor: 'papayawhip',
      };
      const expected = props;
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });

    it('should translate tokens to style values', () => {
      const props = {
        borderColor: 'blackPepper400',
        borderTopColor: 'blueberry500',
        borderRightColor: 'soap400',
        borderBottomColor: 'frenchVanilla100',
        borderLeftColor: 'cantaloupe400',
      };
      const expected = {
        borderColor: '#333333',
        borderTopColor: '#005cb9',
        borderRightColor: '#dfe2e6',
        borderBottomColor: '#ffffff',
        borderLeftColor: '#ffa126',
      };
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });
  });

  context('given border-radius props', () => {
    it('should handle generic props (string and number)', () => {
      const props = {
        borderRadius: 12,
        borderTopLeftRadius: '24px',
      };
      const expected = props;
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });

    it('should translate tokens to style values', () => {
      const props = {
        borderRadius: 'zero',
        borderTopLeftRadius: 's',
        borderTopRightRadius: 'm',
        borderBottomLeftRadius: 'l',
        borderBottomRightRadius: 'circle',
      };
      const expected = {
        borderRadius: '0px',
        borderTopLeftRadius: '2px',
        borderTopRightRadius: '4px',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '999px',
      };
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });
  });

  context('given border-style props', () => {
    it('should handle generic props (string)', () => {
      const props = {
        borderStyle: 'none',
        borderTopStyle: 'solid',
        borderRightStyle: 'dashed',
        borderBottomStyle: 'dotted',
        borderLeftStyle: 'double',
      };
      const expected = props;
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });
  });

  context('given border-width props', () => {
    it('should handle generic props (string and number)', () => {
      const props = {
        borderWidth: '1.25em',
        borderTopWidth: 12,
        borderRightWidth: 'thick',
        borderBottomWidth: 'thin',
        borderLeftWidth: 'medium',
      };
      const expected = props;
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });
  });

  context('given border-logical props', () => {
    it('should transform styles correctly for LTR', () => {
      const props = {
        borderInlineStart: 'solid 1px',
        borderInlineEnd: 'dashed 2px',
        borderInlineStartColor: 'blackPepper400',
        borderInlineEndColor: '#000000',
        borderInlineStartStyle: 'solid',
        borderInlineEndStyle: 'dashed',
        borderInlineStartWidth: '1px',
        borderInlineEndWidth: '2px',
        theme: {
          canvas: {
            direction: ContentDirection.LTR,
          },
        },
      };
      const expected = {
        borderLeft: 'solid 1px',
        borderRight: 'dashed 2px',
        borderLeftColor: '#333333',
        borderRightColor: '#000000',
        borderLeftStyle: 'solid',
        borderRightStyle: 'dashed',
        borderLeftWidth: '1px',
        borderRightWidth: '2px',
      };
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });

    it('should transform styles correctly for RTL', () => {
      const props = {
        borderInlineStart: 'solid 1px #333',
        borderInlineEnd: 'dashed 2px #000',
        borderInlineStartColor: 'blackPepper400',
        borderInlineEndColor: '#000000',
        borderInlineStartStyle: 'solid',
        borderInlineEndStyle: 'dashed',
        borderInlineStartWidth: '1px',
        borderInlineEndWidth: '2px',
        theme: {
          canvas: {
            direction: ContentDirection.RTL,
          },
        },
      };
      const expected = {
        borderLeft: 'dashed 2px #000',
        borderRight: 'solid 1px #333',
        borderLeftColor: '#000000',
        borderRightColor: '#333333',
        borderLeftStyle: 'dashed',
        borderRightStyle: 'solid',
        borderLeftWidth: '2px',
        borderRightWidth: '1px',
      };
      const borderStyles = border(props);

      expect(borderStyles).toEqual(expected);
    });
  });
});

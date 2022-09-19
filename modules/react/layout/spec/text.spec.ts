import {text, TextStyleProps} from '@workday/canvas-kit-react/layout';

describe('Color Style Props Function', () => {
  it('should ignore non-color props', () => {
    const props = {
      borderRadius: 's',
      children: null,
      lineHeight: '1rem',
    };

    const expected = {lineHeight: '1rem'};
    const colorStyles = text(props);

    expect(colorStyles).toEqual(expected);
  });

  it('should handle generic props', () => {
    const props: TextStyleProps = {
      lineHeight: '1rem',
      letterSpacing: '0.25em',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'lowercase',
      textShadow: 'none',
      whiteSpace: 'nowrap',
      wordBreak: 'break-all',
    };
    const expected = props;
    const colorStyles = text(props);

    expect(colorStyles).toEqual(expected);
  });
});

// it('should handle generic props', () => {
//   const props: TextStyleProps = {
//     fontFamily: 'Roboto',
//     fontSize: '14px',
//     fontStyle: 'italic',
//     fontWeight: 300,
//   };
//   const expected = props;
//   const colorStyles = font(props);

//   expect(colorStyles).toEqual(expected);
// });

// it('should translate tokens to style values', () => {
//   const props: FontStyleProps = {
//     fontFamily: 'default',
//     fontSize: 14,
//     fontWeight: 'regular',
//   };
//   const expected = {
//     fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", Arial, sans-serif',
//     fontSize: '0.875rem',
//     fontWeight: 400,
//   };
//   const colorStyles = font(props);

//   expect(colorStyles).toEqual(expected);
// });

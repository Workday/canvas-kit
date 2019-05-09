import {CSSObject} from 'create-emotion';

/**
 * A utility to hide the default canvas style focus ring when using mouse input.
 * Requires wrapping your components in an InputProvider component.
 */
const hideMouseFocus: CSSObject = {
  [`[data-whatinput='mouse'] &:focus,
    [data-whatinput='touch'] &:focus,
    [data-whatinput='pointer'] &:focus`]: {
    outline: 'none',
    boxShadow: 'none',
    animation: 'none',
  },
};

export default hideMouseFocus;

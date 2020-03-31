import {styled, type} from '@workday/canvas-kit-labs-react-core';

const Hyperlink = styled('a')({
  fontFamily: type.body.fontFamily,
  ...type.variant.link,
});

export default Hyperlink;

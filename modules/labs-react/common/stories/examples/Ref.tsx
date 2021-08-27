import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const Ref = () => {
  const boxRef = React.useRef(null);
  const [boxWidth, setBoxWidth] = React.useState(0);

  React.useEffect(() => {
    // when the component first renders, use a ref to measure the Box DOM node's width
    setBoxWidth(boxRef.current.clientWidth);
  }, []);

  return (
    <Box ref={boxRef} padding="s" border="solid 1px" borderColor="blackPepper500" borderRadius="l">
      <h3>Initial Box Width</h3>
      <p>{boxWidth}px</p>
    </Box>
  );
};

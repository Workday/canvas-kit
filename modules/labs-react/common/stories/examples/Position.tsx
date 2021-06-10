import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const Position = () => {
  const boxRef = React.useRef(null);
  const [position, setPosition] = React.useState({x: 0, y: 0});

  React.useLayoutEffect(() => {
    const {offsetHeight, offsetWidth} = boxRef.current;
    setPosition({x: offsetWidth / 2, y: offsetHeight / 2});
  }, []);

  return (
    <>
      <Box
        backgroundColor="frenchVanilla100"
        border="solid 1px"
        left={0}
        padding="xs"
        position="absolute"
        top={`calc(50% - ${position.y}px)`}
        zIndex={1}
      >
        Left
      </Box>
      <Box
        backgroundColor="frenchVanilla100"
        border="solid 1px"
        left={`calc(50% - ${position.x}px)`}
        padding="xs"
        position="absolute"
        ref={boxRef}
        top={`calc(50% - ${position.y}px)`}
        zIndex={2}
      >
        Center
      </Box>
      <Box
        backgroundColor="frenchVanilla100"
        border="solid 1px"
        padding="xs"
        position="absolute"
        right={0}
        top={`calc(50% - ${position.y}px)`}
        zIndex={3}
      >
        Right
      </Box>
    </>
  );
};

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
        position="absolute"
        top={`calc(50% - ${position.y}px)`}
        left={0}
        zIndex={1}
        backgroundColor="frenchVanilla100"
        border="solid 1px"
        padding="xs"
      >
        Left
      </Box>
      <Box
        ref={boxRef}
        position="absolute"
        top={`calc(50% - ${position.y}px)`}
        left={`calc(50% - ${position.x}px)`}
        zIndex={2}
        backgroundColor="frenchVanilla100"
        border="solid 1px"
        padding="xs"
      >
        Center
      </Box>
      <Box
        position="absolute"
        top={`calc(50% - ${position.y}px)`}
        right={0}
        zIndex={3}
        backgroundColor="frenchVanilla100"
        border="solid 1px"
        padding="xs"
      >
        Right
      </Box>
    </>
  );
};

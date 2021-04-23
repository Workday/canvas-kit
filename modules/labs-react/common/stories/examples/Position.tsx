import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

const boxStyles = {
  backgroundColor: '#fff',
  border: 'solid 1px',
  padding: '12px',
};

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
        style={boxStyles}
        position="absolute"
        top={`calc(50% - ${position.y}px)`}
        left={0}
        zIndex={1}
      >
        Left
      </Box>
      <Box
        ref={boxRef}
        style={boxStyles}
        position="absolute"
        top={`calc(50% - ${position.y}px)`}
        left={`calc(50% - ${position.x}px)`}
        zIndex={2}
      >
        Center
      </Box>
      <Box
        style={boxStyles}
        position="absolute"
        top={`calc(50% - ${position.y}px)`}
        right={0}
        zIndex={3}
      >
        Right
      </Box>
    </>
  );
};

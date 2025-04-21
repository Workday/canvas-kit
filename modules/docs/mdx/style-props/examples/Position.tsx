import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  margin: 'xxs',
  height: 'xl',
  width: '8rem',
  padding: 'xs',
};

export const Position = () => {
  return (
    <div>
      <Box
        backgroundColor="cinnamon300"
        left={0}
        position="absolute"
        top="calc(50% - 20px)"
        zIndex={1}
        textAlign="center"
        {...baseStyles}
      >
        Left
      </Box>
      <Box
        backgroundColor="sourLemon300"
        left={`calc(50% - 4rem)`}
        position="absolute"
        top="calc(50% - 20px)"
        zIndex={2}
        textAlign="center"
        {...baseStyles}
      >
        Center
      </Box>
      <Box
        backgroundColor="blueberry300"
        position="absolute"
        right={0}
        top="calc(50% - 20px)"
        zIndex={3}
        textAlign="center"
        {...baseStyles}
      >
        Right
      </Box>
    </div>
  );
};

import * as React from 'react';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-react/tokens';
import {
  useResizeObserver,
  ResponsiveContextProvider,
  useResponsiveContainerStyles,
} from '@workday/canvas-kit-react/common';

// temporary placeholder until type components are added to canvas-kit
const H3 = props => (
  <h3
    style={{
      ...type.levels.body.large,
      margin: 0,
      fontWeight: type.properties.fontWeights.bold,
    }}
    {...props}
  />
);

const Body = props => <p style={{...type.levels.body.small, margin: 0}} {...props} />;

export const FlexCardResProps = () => {
  const [isComplete, setIsComplete] = React.useState(false);

  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  useResizeObserver({
    ref: ref,
    onResize: data => {
      setWidth(data.width || 0);
    },
  });

  const resStyles = useResponsiveContainerStyles(
    {
      card: {
        flexDirection: 'column',
        padding: 'm',
        depth: 1,
        borderRadius: 'l',
        zero: {
          backgroundColor: 'Red',
          border: '10px solid green',
        },
        s: {
          backgroundColor: 'Orange',
          border: '10px solid darkblue',
        },
        m: {
          backgroundColor: 'Yellow',
          border: '10px solid purple',
        },
        l: {
          backgroundColor: 'Green',
          border: '10px solid red',
        },
        xl: {
          backgroundColor: 'pink',
          border: '10px solid teal',
        },
      },
      boxWidth: {
        zero: {
          backgroundColor: 'Red',
          border: '2px solid green',
          flexDirection: 'column',
        },
        s: {
          backgroundColor: 'Orange',
          border: '2px solid darkblue',
          flexDirection: 'column',
        },
        m: {
          backgroundColor: 'Yellow',
          border: '2px solid purple',
        },
        l: {
          backgroundColor: 'Green',
          border: '2px solid red',
        },
        xl: {
          backgroundColor: 'pink',
          border: '2px solid teal',
        },
      },
    },
    width
  );

  return (
    <ResponsiveContextProvider width={width}>
      <Box ref={ref}>
        <Flex {...resStyles.card}>
          <Box {...resStyles.boxWidth}>{width}</Box>
          <H3>Learn about Flex {isComplete && '🥳'}</H3>
          <Box paddingY="s">
            <Body>Complete this task when you have a functional understanding of Flex.</Body>
          </Box>
          <Flex justifyContent="flex-end">
            <Box marginRight="xxs">
              <PrimaryButton onClick={() => setIsComplete(true)}>Complete</PrimaryButton>
            </Box>
            <SecondaryButton onClick={() => setIsComplete(false)}>Cancel</SecondaryButton>
          </Flex>
        </Flex>
      </Box>
    </ResponsiveContextProvider>
  );
};

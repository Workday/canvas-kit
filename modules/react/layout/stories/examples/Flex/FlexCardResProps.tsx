import * as React from 'react';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-react/tokens';
import {useResizeObserver} from '@workday/canvas-kit-react/common';
// eslint-disable-next-line workday-custom-rules/restricted-imports
import {useBreakpointValues} from '@workday/canvas-kit-react/layout/lib/utils/responsiveMediaQuery';
// eslint-disable-next-line workday-custom-rules/restricted-imports
import {useContainerValues} from '@workday/canvas-kit-react/layout/lib/utils/responsiveContainer';

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
  const resStyles = useBreakpointValues({
    zero: {
      card: {
        backgroundColor: 'Red',
        border: '10px solid green',
      },
    },
    sm: {
      card: {
        backgroundColor: 'Orange',
        border: '10px solid darkblue',
      },
    },
    md: {
      card: {
        backgroundColor: 'Yellow',
        border: '10px solid purple',
      },
    },
    lg: {
      card: {
        backgroundColor: 'Green',
        border: '10px solid red',
      },
    },
    xl: {
      card: {
        backgroundColor: 'pink',
        border: '10px solid teal',
      },
    },
  });

  const [isComplete, setIsComplete] = React.useState(false);

  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  useResizeObserver({
    ref: ref,
    onResize: data => {
      setWidth(data.width || 0);
    },
  });

  const styles = useContainerValues(
    {
      zero: {
        flex: {
          backgroundColor: 'red',
        },
      },
      sm: {
        flex: {
          backgroundColor: 'orange',
        },
      },
      md: {
        flex: {
          backgroundColor: 'yellow',
        },
      },
      lg: {
        flex: {
          backgroundColor: 'green',
        },
      },
      xl: {
        flex: {
          backgroundColor: 'blue',
        },
      },
    },
    width
  );

  return (
    <Box>
      <Flex
        ref={ref}
        flexDirection="column"
        padding="m"
        depth={1}
        borderRadius="l"
        // maxWidth={815}
        {...styles.flex}
      >
        <Box>{width}</Box>
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
  );
};

import {keyframes} from '@emotion/react';
import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {StyledType, styled} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SystemIconCircle} from '@workday/canvas-kit-react/icon';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {Heading} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {patternIcon} from '@workday/canvas-system-icons-web';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const StyledSimulation = styled(Box)<StyledType>({
  pointerEvents: 'none',
});

export const Simulation = () => {
  const [loading, setLoading] = React.useState(true);
  const [loadTime, setLoadTime] = React.useState('3000');
  const timer = React.useRef(0);
  const loadTimeValue = React.useRef(parseFloat(loadTime));

  const resetTimeout = () => {
    setLoading(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, loadTimeValue.current);
    return () => {
      window.clearTimeout(timer.current);
    };
  };

  const onChangeLoading = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.clearTimeout(timer.current);
    setLoading(event.target.checked);
  };

  const onChangeLoadTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoadTime(event.currentTarget.value);
    const value = parseInt(event.currentTarget.value, 10);

    if (value) {
      loadTimeValue.current = value;
    }
  };

  React.useEffect(resetTimeout, []);

  return (
    <Box>
      <Box marginBottom="l">
        <FormField orientation="horizontalStart">
          <FormField.Label>Load Time</FormField.Label>
          <FormField.Input as={TextInput} onChange={onChangeLoadTime} value={loadTime} />
        </FormField>
        <FormField orientation="horizontalStart">
          <FormField.Label>Loading</FormField.Label>
          <FormField.Input as={Checkbox} checked={loading} onChange={onChangeLoading} />
        </FormField>
        <SecondaryButton onClick={resetTimeout}>Simulate Loading</SecondaryButton>
      </Box>
      <Card>
        <Card.Body>
          <Box minHeight={180} position="relative">
            {loading ? (
              <StyledSimulation
                position="absolute"
                top={0}
                left={0}
                width="100%"
                animation={!loading ? `${fadeOut} 150ms ease-out forwards` : undefined}
              >
                <Skeleton>
                  <Flex alignItems="center">
                    <Skeleton.Shape
                      width={space.xl}
                      height={space.xl}
                      borderRadius={borderRadius.circle}
                    />
                    <Box flex={1} marginLeft="xs">
                      <Skeleton.Header />
                    </Box>
                  </Flex>
                  <Skeleton.Text lineCount={3} />
                </Skeleton>
              </StyledSimulation>
            ) : (
              <Box>
                <Flex alignItems="center" display="inline-flex" marginBottom="s">
                  <SystemIconCircle icon={patternIcon} />
                  <Heading as="h3" size="small" margin={`0 0 0 ${space.xxs}`}>
                    Patterns
                  </Heading>
                </Flex>
                <p>
                  Canvas Patterns classify and document reusable solutions built to respond to
                  common user scenarios. Following these guidelines allows us to design experiences
                  that feel consistent and natural for users as they move between applications and
                  ensures that our approach aligns with industry standards.
                </p>
              </Box>
            )}
          </Box>
        </Card.Body>
      </Card>
    </Box>
  );
};

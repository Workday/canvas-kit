import React from 'react';
import {keyframes} from '@emotion/react';

import {Card} from '@workday/canvas-kit-react/card';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SystemIconCircle} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {patternIcon} from '@workday/canvas-system-icons-web';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const styles = {
  forms: createStyles({
    marginBottom: system.space.x8,
  }),
  wrapper: createStyles({
    minHeigh: 180,
    position: 'relative',
  }),
  simulation: createStencil({
    vars: {
      fadeOut: '',
    },
    base: {
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
    modifiers: {
      loading: {
        true: ({fadeOut}) => ({
          animation: `${fadeOut} 150ms ease-out forwards`,
        }),
      },
    },
  }),
  simulationFlex: createStyles({
    alignItems: 'center',
  }),
  shape: createStyles({
    width: system.space.x10,
    height: system.space.x10,
    borderRadius: system.shape.round,
  }),
  headerBox: createStyles({
    flex: 1,
    marginInlineStart: system.space.x3,
  }),
  altFlex: createStyles({
    alignItems: 'center',
    display: 'inline-flex',
    marginBottom: system.space.x4,
  }),
  heading: createStyles({
    marginInlineStart: `0 0 0 ${system.space.x1}`,
  }),
};

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
      <Box cs={styles.forms}>
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
          <Box cs={styles.wrapper}>
            {loading ? (
              <Box cs={styles.simulation({loading, fadeOut})}>
                <Skeleton>
                  <Flex cs={styles.simulationFlex}>
                    <Skeleton.Shape cs={styles.shape} />
                    <Box cs={styles.headerBox}>
                      <Skeleton.Header />
                    </Box>
                  </Flex>
                  <Skeleton.Text lineCount={3} />
                </Skeleton>
              </Box>
            ) : (
              <Box>
                <Flex cs={styles.altFlex}>
                  <SystemIconCircle icon={patternIcon} />
                  <Heading as="h3" size="small" cs={styles.heading}>
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

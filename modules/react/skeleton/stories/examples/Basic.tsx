/** @jsx jsx */
import React from 'react';
import {jsx, keyframes} from '@emotion/core';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {SystemIconCircle} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {space, type} from '@workday/canvas-kit-react/tokens';
import {patternIcon} from '@workday/canvas-system-icons-web';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Basic = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [delayField, setDelayField] = React.useState('3000');
  const timer = React.useRef(0);
  const delay = React.useRef(parseFloat(delayField));

  const resetTimeout = () => {
    setLoading(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, delay.current);
    return () => {
      window.clearTimeout(timer.current);
    };
  };

  const onChangeLoading = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.clearTimeout(timer.current);
    setLoading(event.target.checked);
  };

  const onChangeLoadTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDelayField(event.currentTarget.value);
    const value = parseInt(event.currentTarget.value, 10);

    if (value) {
      delay.current = value;
    }
  };

  React.useEffect(resetTimeout, []);

  return (
    <div>
      <Card>
        <Card.Body>
          <div style={{position: 'relative', height: 147}}>
            {!isLoading && (
              <div>
                <div style={{display: 'inline-flex', alignItems: 'center', marginBottom: space.s}}>
                  <SystemIconCircle icon={patternIcon} />
                  <h3
                    style={{
                      ...type.levels.heading.small,
                      marginBottom: 0,
                      marginLeft: space.xxs,
                      marginTop: 0,
                    }}
                  >
                    Patterns
                  </h3>
                </div>
                <div style={type.levels.subtext.large}>
                  Canvas Patterns classify and document reusable solutions built to respond to
                  common user scenarios. Following these guidelines allows us to design experiences
                  that feel consistent and natural for users as they move between applications and
                  ensures that our approach aligns with industry standards.
                </div>
              </div>
            )}

            <div
              css={{
                position: 'absolute',
                pointerEvents: 'none',
                top: 0,
                left: 0,
                animation: !isLoading ? `${fadeOut} 150ms ease-out` : undefined,
                animationFillMode: !isLoading ? 'forwards' : undefined,
                width: '100%',
              }}
            >
              <Skeleton>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Skeleton.Shape width={40} height={40} borderRadius={99} />
                  <div style={{flex: 1, marginLeft: space.xxs}}>
                    <Skeleton.Header />
                  </div>
                </div>
                <Skeleton.Text lineCount={3} />
              </Skeleton>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div style={{marginTop: space.m}}>
        <FormField label="Load Time" labelPosition={FormField.LabelPosition.Left}>
          <TextInput onChange={onChangeLoadTime} value={delayField} />
        </FormField>
        <FormField label="Loading" labelPosition={FormField.LabelPosition.Left}>
          <Checkbox checked={isLoading} onChange={onChangeLoading} />
        </FormField>
        <SecondaryButton onClick={resetTimeout}>Simulate Loading</SecondaryButton>
      </div>
    </div>
  );
};

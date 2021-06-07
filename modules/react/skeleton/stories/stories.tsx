/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import {keyframes, jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {number} from '@storybook/addon-knobs';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Card} from '@workday/canvas-kit-react/card';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

import {Skeleton} from '../index';

import README from '../README.md';
import {borderRadius, colors} from '@workday/canvas-kit-react/tokens';

const Container = styled('span')({
  width: '60%',
  height: '100%',
  margin: '8px',
});

const FlexContainer = styled('div')({
  display: 'flex',
});

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

storiesOf('Components/Indicators/Skeleton/React', module)
  .addParameters({component: Skeleton})
  .addDecorator(withReadme(README))
  .add('Complete', () => {
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
      <div className="story">
        <h1>Custom Elements Skeleton</h1>
        <FormField label="Load Time" labelPosition={FormField.LabelPosition.Left}>
          <TextInput onChange={onChangeLoadTime} value={delayField} />
        </FormField>
        <FormField label="Loading" labelPosition={FormField.LabelPosition.Left}>
          <Checkbox checked={isLoading} onChange={onChangeLoading} />
        </FormField>
        <PrimaryButton onClick={resetTimeout}>Reset Skeleton</PrimaryButton>
        <Card width={600}>
          <Card.Body>
            <div style={{position: 'relative', height: 146}}>
              {!isLoading && (
                <div>
                  <div style={{display: 'inline-flex', alignItems: 'center', marginBottom: 8}}>
                    <Avatar size={Avatar.Size.l}></Avatar>
                    <h2 style={{marginLeft: 8}}>Header Text Information</h2>
                  </div>
                  <div style={{lineHeight: 2}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  </div>
                </div>
              )}

              <div
                css={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  top: 6,
                  right: 0,
                  left: 0,
                  animation: !isLoading ? `${fadeOut} 150ms ease-out` : null,
                  animationFillMode: !isLoading ? 'forwards' : null,
                }}
              >
                <Skeleton>
                  <FlexContainer>
                    <Skeleton.Shape width={40} height={40} borderRadius={borderRadius.circle} />
                    <Container>
                      <Skeleton.Header />
                    </Container>
                  </FlexContainer>
                  <div>
                    <Skeleton.Text lineCount={3} />
                  </div>
                </Skeleton>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  })
  .add('Header', () => {
    return (
      <div className="story">
        <h1>Loading Header</h1>
        <FlexContainer>
          <div style={{marginRight: 20}}>
            <h2 style={{marginTop: 0, marginBottom: 0, flex: 'none'}}>Header Text</h2>
          </div>
          <div style={{width: 200}}>
            <Skeleton>
              <Skeleton.Header />
            </Skeleton>
          </div>
        </FlexContainer>
      </div>
    );
  })
  .add('Shape', () => {
    return (
      <div className="story">
        <h1>Loading Shape</h1>
        <FlexContainer>
          <div style={{marginRight: 20}}>
            <Avatar size={Avatar.Size.xxl}></Avatar>
          </div>
          <Skeleton>
            <Skeleton.Shape
              width={number('width', 120)}
              height={number('height', 120)}
              borderRadius={number('borderRadius', 999)}
            />
          </Skeleton>
        </FlexContainer>
      </div>
    );
  })
  .add('Text', () => {
    return (
      <div className="story">
        <h1>Loading Text</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <Skeleton>
          <Skeleton.Text lineCount={number('lineCount', 2)} />
        </Skeleton>
      </div>
    );
  })
  .add('Color', () => {
    return (
      <div className="story">
        <h1>Skeleton Color</h1>
        <Skeleton>
          <FlexContainer>
            <Skeleton.Shape
              width={40}
              height={40}
              borderRadius={borderRadius.circle}
              backgroundColor={colors.berrySmoothie100}
            />
            <Container>
              <Skeleton.Header backgroundColor={colors.cantaloupe100} />
            </Container>
          </FlexContainer>
          <div>
            <Skeleton.Text lineCount={3} backgroundColor={colors.fruitPunch100} />
          </div>
        </Skeleton>
      </div>
    );
  });

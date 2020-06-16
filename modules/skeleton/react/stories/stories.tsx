/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import styled from '@emotion/styled';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {number} from '@storybook/addon-knobs';
import {Avatar} from '@workday/canvas-kit-react-avatar';

import Skeleton, {SkeletonShape, SkeletonText, SkeletonHeader} from '../index';

import README from '../README.md';

const Container = styled('span')({
  width: '60%',
  height: '100%',
  margin: '8px',
});

const FlexContainer = styled('div')({
  display: 'flex',
});

storiesOf('Components|Indicators/Skeleton/React', module)
  .addParameters({component: Skeleton})
  .addDecorator(withReadme(README))
  .add('Complete', () => {
    return (
      <div className="story">
        <h1>Custom Elements Skeleton</h1>
        <div style={{width: 200}}>
          <div style={{display: 'inline-flex', alignItems: 'center'}}>
            <Avatar size={Avatar.Size.l}></Avatar>
            <h2 style={{marginLeft: 15}}>Header</h2>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
          </div>
        </div>
        <div style={{width: 200}}>
          <Skeleton>
            <FlexContainer>
              <SkeletonShape width={50} height={50} borderRadius={99} />
              <Container>
                <SkeletonHeader />
              </Container>
            </FlexContainer>
            <div>
              <SkeletonText lineCount={3} />
            </div>
          </Skeleton>
        </div>
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
              <SkeletonHeader />
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
            <SkeletonShape
              width={number('width', 120)}
              height={number('height', 120)}
              borderRadius={number('borderRadius', 99)}
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
          <SkeletonText lineCount={number('lineCount', 2)} />
        </Skeleton>
      </div>
    );
  });

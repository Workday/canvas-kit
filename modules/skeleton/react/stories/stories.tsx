/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import styled from 'react-emotion';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {number} from '@storybook/addon-knobs';

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

storiesOf('Skeleton', module)
  .addDecorator(withReadme(README))
  .add('Complete', () => {
    return (
      <div className="story">
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
    );
  })
  .add('Header', () => {
    return (
      <div className="story">
        <Skeleton>
          <SkeletonHeader />
        </Skeleton>
      </div>
    );
  })
  .add('Shape', () => {
    return (
      <div className="story">
        <Skeleton>
          <SkeletonShape
            width={number('width', 100)}
            height={number('height', 100)}
            borderRadius={number('borderRadius', 99)}
          />
        </Skeleton>
      </div>
    );
  })
  .add('Text', () => {
    return (
      <div className="story">
        <Skeleton>
          <SkeletonText lineCount={number('lineCount', 2)} />
        </Skeleton>
      </div>
    );
  });

import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import styled from 'react-emotion';
import Skeleton from './lib/skeleton';
import SkeletonShape from './lib/parts/skeletonShape';
import {number} from '@storybook/addon-knobs';
import SkeletonText from './lib/parts/skeletonText';
import SkeletonHeader from './lib/parts/skeletonHeader';
import README from './README.md';

const Container = styled('span')({
  width: '60%',
  height: '100%',
  margin: '8px',
});

const FlexContainer = styled('div')({
  display: 'flex',
});

storiesOf('Canvas Kit/Skeleton', module)
  .addDecorator(withReadme(README))
  .add('Skeleton', () => {
    return (
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
    );
  })
  .add('Parts/SkeletonHeader', () => {
    return (
      <Skeleton>
        <SkeletonHeader />
      </Skeleton>
    );
  })
  .add('Parts/SkeletonShape', () => {
    return (
      <Skeleton>
        <SkeletonShape
          width={number('width', 100)}
          height={number('height', 100)}
          borderRadius={number('borderRadius', 99)}
        />
      </Skeleton>
    );
  })
  .add('Parts/SkeletonText', () => {
    return (
      <Skeleton>
        <SkeletonText lineCount={number('lineCount', 2)} />
      </Skeleton>
    );
  });

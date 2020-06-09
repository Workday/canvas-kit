/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {Skeleton, SkeletonHeader, SkeletonShape, SkeletonText} from '../../index';

export default withSnapshotsEnabled({
  title: 'Testing|React/Indicators/Skeleton',
  component: Skeleton,
});

export const SkeletonTextStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'With Custom Line Count', props: {lineCount: 4}},
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <Skeleton>
          <SkeletonText {...props} />
        </Skeleton>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SkeletonShapeStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'As a Circle', props: {width: 100, height: 100, borderRadius: 99}},
        {label: 'As a custom shape', props: {width: 200, height: 100, borderRadius: 5}},
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <Skeleton>
          <SkeletonShape {...props} />
        </Skeleton>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SkeletonFullStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[{label: 'Full Custom Skeleton', props: {}}]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <Skeleton>
          <SkeletonShape width={50} height={50} borderRadius={99} />
          <SkeletonHeader />
          <div>
            <SkeletonText lineCount={4} />
          </div>
        </Skeleton>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

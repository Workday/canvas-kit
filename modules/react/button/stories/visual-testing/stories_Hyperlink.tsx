/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {colors} from '@workday/canvas-kit-react/tokens';
import {StaticStates, type} from '@workday/canvas-kit-preview-react/tokens';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Container} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing/React/Buttons/Button/Hyperlink',
  component: Hyperlink,
});

export const HyperlinkStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {label: 'Default', value: undefined},
          {label: 'Inverse', value: 'inverse'},
        ],
      })}
      columnProps={permutateProps({
        className: [
          {label: 'Default', value: ''},
          {label: 'Hover', value: 'hover'},
          {label: 'Focus', value: 'focus'},
          {label: 'Focus Hover', value: 'focus hover'},
          {label: 'Active', value: 'active'},
          {label: 'Active Hover', value: 'active hover'},
          {label: 'Visited', value: 'visited'},
        ],
      })}
    >
      {(props: any) => (
        <Container blue={props.variant === 'inverse'}>
          <div
            css={{
              ...type.body2,
              color: props.variant === 'inverse' ? colors.frenchVanilla100 : undefined,
            }}
          >
            Here's a <Hyperlink {...props}>Link</Hyperlink> to something
          </div>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

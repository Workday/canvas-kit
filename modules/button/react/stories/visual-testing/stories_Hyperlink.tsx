/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {colors} from '@workday/canvas-kit-react-core';
import {StaticStates, type} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import {Hyperlink} from '../../index';
import {Container} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Hyperlink',
  component: Hyperlink,
});

export const HyperlinkStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: [
          {label: 'Default', value: undefined},
          {label: 'Inverse', value: Hyperlink.Variant.Inverse},
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
        <Container blue={props.variant === Hyperlink.Variant.Inverse}>
          <div
            css={{
              ...type.body2,
              color:
                props.variant === Hyperlink.Variant.Inverse ? colors.frenchVanilla100 : undefined,
            }}
          >
            Here's a <Hyperlink {...props}>Link</Hyperlink> to something
          </div>
        </Container>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

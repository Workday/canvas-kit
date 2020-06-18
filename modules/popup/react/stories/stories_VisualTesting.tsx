/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {action} from '@storybook/addon-actions';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';
import {Popup} from '../index';
import {PopupPadding} from '../lib/Popup';
import {depth} from '@workday/canvas-kit-react-core';

export default withSnapshotsEnabled({
  title: 'Testing|React/Popups/Popup',
  component: Popup,
});

export const PopupStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'On Close', props: {handleClose: action('close button clicked')}},
        {label: 'With Heading', props: {heading: 'Delete Item'}},
        {
          label: 'With zero padding',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            padding: PopupPadding.zero,
          },
        },
        {
          label: 'With small padding',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            padding: PopupPadding.s,
          },
        },

        {
          label: 'With different depth value 1',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            depth: depth[1],
          },
        },
        {
          label: 'With different depth value 2',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            depth: depth[2],
          },
        },
        {
          label: 'With different depth value 3',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            depth: depth[3],
          },
        },
        {
          label: 'With different depth value 4',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            depth: depth[4],
          },
        },
        {
          label: 'With custom width',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            width: 300,
          },
        },
        {
          label: 'With small close icon',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            width: 300,
            closeIconSize: 'small',
          },
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => (
        <Popup transformOrigin={null} {...props}>
          Your workbook was successfully processed.
        </Popup>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

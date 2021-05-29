/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-preview-react/tokens';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {action} from '@storybook/addon-actions';

import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';
import {Popup} from '../index';
import {PopupPadding} from '../lib/Popup';

export const PopupStates = withSnapshotsEnabled(() => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'Default',
          props: {},
        },
        {
          label: 'On Close',
          props: {
            handleClose: action('close button clicked'),
          },
        },
        {
          label: 'With Heading',
          props: {
            heading: 'Delete Item',
          },
        },
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
            depth: 1,
          },
        },
        {
          label: 'With different depth value 2',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            depth: 2,
          },
        },
        {
          label: 'With different depth value 3',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            depth: 3,
          },
        },
        {
          label: 'With different depth value 4',
          props: {
            heading: 'Delete Item',
            handleClose: action('close button clicked'),
            depth: 4,
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
));

export const PopupStatesRTL = withSnapshotsEnabled(() => (
  <StaticStates>
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With RTL',
            props: {
              heading: 'למחוק פריט',
              handleClose: action('לחצן סגור לחץ'),
              width: 300,
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {({body, ...props}) => (
          <Popup transformOrigin={null} {...props}>
            האם ברצונך למחוק פריט זה
          </Popup>
        )}
      </ComponentStatesTable>
    </CanvasProvider>
  </StaticStates>
));

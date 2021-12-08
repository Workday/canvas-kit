import React from 'react';

import {CanvasProvider, ContentDirection, StaticStates} from '@workday/canvas-kit-react/common';

import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

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
            hasCloseIcon: true,
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
            hasCloseIcon: true,
            padding: 'zero',
          },
        },
        {
          label: 'With small padding',
          props: {
            heading: 'Delete Item',
            hasCloseIcon: true,
            padding: 's',
          },
        },

        {
          label: 'With different depth value 1',
          props: {
            heading: 'Delete Item',
            hasCloseIcon: true,
            depth: 1,
          },
        },
        {
          label: 'With different depth value 2',
          props: {
            heading: 'Delete Item',
            hasCloseIcon: true,
            depth: 2,
          },
        },
        {
          label: 'With different depth value 3',
          props: {
            heading: 'Delete Item',
            hasCloseIcon: true,
            depth: 3,
          },
        },
        {
          label: 'With different depth value 4',
          props: {
            heading: 'Delete Item',
            hasCloseIcon: true,
            depth: 4,
          },
        },
        {
          label: 'With custom width',
          props: {
            heading: 'Delete Item',
            hasCloseIcon: true,
            width: 300,
          },
        },
        {
          label: 'With small close icon',
          props: {
            heading: 'Delete Item',
            hasCloseIcon: true,
            width: 300,
            closeIconSize: 'small',
          },
        },
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {({heading, hasCloseIcon, closeIconSize, ...props}) => (
        <Popup.Card style={{animation: 'none'}} {...props}>
          {hasCloseIcon ? <Popup.CloseIcon aria-label="" size={closeIconSize} /> : null}
          {heading ? <Popup.Heading>{heading}</Popup.Heading> : null}
          <Popup.Body>Your workbook was successfully processed.</Popup.Body>
        </Popup.Card>
      )}
    </ComponentStatesTable>
  </StaticStates>
));

export const PopupRTL = withSnapshotsEnabled(() => {
  const model = usePopupModel({
    initialVisibility: 'visible',
  });
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Popup model={model}>
        <Popup.Popper>
          <Popup.Card style={{animation: 'none'}} width={300}>
            <Popup.CloseIcon aria-label="" />
            <Popup.Heading>למחוק פריט</Popup.Heading>
            <Popup.Body>האם ברצונך למחוק פריט זה</Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </CanvasProvider>
  );
});

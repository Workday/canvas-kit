import React from 'react';

import {Table} from '@workday/canvas-kit-react/table';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const RightToLeft = () => {
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Table>
        <Table.Caption>משקאות קפה וגדלים</Table.Caption>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" backgroundColor="soap100">
              מַשׁקֶה
            </Table.Header>
            <Table.Header scope="col" backgroundColor="soap100">
              גודל
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>אספרסו</Table.Cell>
            <Table.Cell>1 גר</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>מקיאטו</Table.Cell>
            <Table.Cell>2 גרם אספרסו</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>גזירה</Table.Cell>
            <Table.Cell>2 גרם אספרסו, 1 גרם חלב מוקצף</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </CanvasProvider>
  );
};

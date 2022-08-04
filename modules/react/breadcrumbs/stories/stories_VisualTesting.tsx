import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Breadcrumbs, useBreadcrumbsModel} from '@workday/canvas-kit-react/breadcrumbs';

export default withSnapshotsEnabled({
  title: 'Testing/React/Navigation/Breadcrumbs',
  component: Breadcrumbs,
});

export const BreadcrumbsStates = () => {
  const model = useBreadcrumbsModel();

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[{label: 'Default', props: {}}]}
        columnProps={[
          {
            label: 'Closed',
            props: {open: false},
          },
          {
            label: 'Opened',
            props: {open: true},
          },
        ]}
      >
        {props => {
          const state = {open: props.open};

          return <></>;
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

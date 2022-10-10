import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {
  SegmentedControl,
  useSegmentedControlModel,
} from '@workday/canvas-kit-preview-react/segmented-control';

import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export default withSnapshotsEnabled({
  title: 'Testing/React/Preview/Segmented Control',
  component: SegmentedControl,
});

export const SegmentedControlStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Text only', props: {variant: 'no-icon'}},
          {label: 'Text and Icon', props: {}},
          {label: 'Icon only', props: {variant: 'no-text'}},
          {label: 'Icon only vertical', props: {variant: 'no-text', orientation: 'vertical'}},
          {label: 'Disabled', props: {variant: 'no-text', disabled: true}},
        ]}
        columnProps={[
          {label: 'Large size', props: {size: 'large'}},
          {label: 'Medium size (default)', props: {}},
          {label: 'Small size', props: {size: 'small'}},
        ]}
      >
        {({variant, ...props}) => {
          const items = [
            {id: 'table', icon: gridIcon, label: 'Table'},
            {id: 'list', icon: listViewIcon, label: 'List'},
            {id: 'detail', icon: listDetailIcon, label: 'Detail'},
            {id: 'diagram', icon: pieChartIcon, label: 'Diagram'},
          ];

          return (
            <SegmentedControl items={items} {...props}>
              <SegmentedControl.List aria-label="View type">
                {item => (
                  <SegmentedControl.Item
                    data-id={item.id}
                    icon={variant === 'no-icon' ? undefined : item.icon}
                    tooltipProps={variant === 'no-icon' ? undefined : {title: item.label}}
                  >
                    {variant === 'no-text' ? undefined : item.label}
                  </SegmentedControl.Item>
                )}
              </SegmentedControl.List>
            </SegmentedControl>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

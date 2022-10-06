import React from 'react';
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

export const Dynamic = () => {
  const [viewType, setViewType] = React.useState('detail');

  const model = useSegmentedControlModel({
    items: [
      {id: 'table', icon: gridIcon, label: 'Table'},
      {id: 'list', icon: listViewIcon, label: 'List'},
      {id: 'detail', icon: listDetailIcon, label: 'Detail'},
      {id: 'diagram', icon: pieChartIcon, label: 'Diagram'},
    ],
    size: 'small',
    initialValue: viewType,
    onSelect: data => {
      console.log(`${data.id} is selected`);
      setViewType(data.id);
    },
  });

  return (
    <SegmentedControl model={model}>
      <SegmentedControl.List aria-label="Content view type">
        {item => (
          <SegmentedControl.Item data-id={item.id} icon={item.icon}>
            {item.label}
          </SegmentedControl.Item>
        )}
      </SegmentedControl.List>
    </SegmentedControl>
  );
};

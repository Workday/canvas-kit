import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export const RTL = () => (
  <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
    <SegmentedControl initialValue="list-detail">
      <SegmentedControl.List aria-label="View type">
        <SegmentedControl.Item data-id="table" icon={gridIcon}>
          שולחן
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
          רשימה
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
          פרטים
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
          תרשים
        </SegmentedControl.Item>
      </SegmentedControl.List>
    </SegmentedControl>
  </CanvasProvider>
);

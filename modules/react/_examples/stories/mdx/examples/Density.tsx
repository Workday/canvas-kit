import React from 'react';

import {Heading, Text} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {DensityComponents} from './DensityComponents';
import {
  CanvasProvider,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';

const optionStyles = createStyles({
  display: 'flex',
  gap: system.space.x3,
  flexDirection: 'column',
});

const optionItemStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x3,
  maxWidth: 'fit-content',
});

// high = 32px height on inputs, space between inputs is 16px
// medium 40px height on inputs, space between inputs is 24px
// low = 48px height on inputs, space between inputs is 32px

export const Density = () => {
  const [density, setDensity] = React.useState<'high' | 'medium' | 'low'>('medium');
  const [containerAlignment, setContainerAlignment] = React.useState<'left' | 'center'>('left');
  const [labelOrientation, setLabelOrientation] = React.useState<
    'vertical' | 'horizontalStart' | 'horizontalEnd'
  >('vertical');

  const handleDensity = data => {
    setDensity(data.id);
  };

  const handleContainerAlignment = data => {
    setContainerAlignment(data.id);
  };

  const handleLabelOrientation = data => {
    setLabelOrientation(data.id);
  };

  React.useEffect(() => {
    setDensity('high');
    setLabelOrientation('horizontalStart');
    setContainerAlignment('left');
  }, []);

  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    custom: {
      density,
      containerAlignment,
      labelOrientation,
    },
    canvas: {
      // Switch to `ContentDirection.RTL` to change direction
    },
  });

  return (
    <CanvasProvider
      theme={canvasTheme}
      // customTheme={{density, containerAlignment, labelOrientation}}
    >
      <Heading size="small">Choose Your Density and Alignment</Heading>
      <div className={optionStyles}>
        <div className={optionItemStyles}>
          <Text>Density</Text>
          <SegmentedControl onSelect={data => handleDensity(data)} size="small">
            <SegmentedControl.List aria-label="choose a density">
              <SegmentedControl.Item data-id="high">High</SegmentedControl.Item>
              <SegmentedControl.Item data-id="medium">Medium</SegmentedControl.Item>
              <SegmentedControl.Item data-id="low">Low</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
        <div className={optionItemStyles}>
          <Text>Label Orientation</Text>
          <SegmentedControl onSelect={data => handleLabelOrientation(data)} size="small">
            <SegmentedControl.List aria-label="choose a label orientation">
              <SegmentedControl.Item data-id="vertical">Vertical</SegmentedControl.Item>
              <SegmentedControl.Item data-id="horizontalStart">
                Horizontal Start
              </SegmentedControl.Item>
              <SegmentedControl.Item data-id="horizontalEnd">Horizontal End</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
        <div className={optionItemStyles}>
          <Text>Container Alignment</Text>
          <SegmentedControl onSelect={data => handleContainerAlignment(data)} size="small">
            <SegmentedControl.List aria-label="choose a density">
              <SegmentedControl.Item data-id="left">Left</SegmentedControl.Item>
              <SegmentedControl.Item data-id="center">Center</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
      </div>
      <DensityComponents />
    </CanvasProvider>
  );
};

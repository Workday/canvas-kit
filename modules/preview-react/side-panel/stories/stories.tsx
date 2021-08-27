/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {jsx} from '@emotion/core';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {useThemeRTL, Box} from '@workday/canvas-kit-labs-react/common';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {plusIcon} from '@workday/canvas-system-icons-web';

import README from '../README.md';

export default {
  title: 'Preview/Side Panel/React',
  decorators: [withReadme(README)],
  component: SidePanel,
};

const height = '320px';

export const Default = () => {
  const [direction, setDirection] = React.useState<ContentDirection>(ContentDirection.LTR);
  const toggleDirection = () => {
    if (direction === ContentDirection.LTR) {
      setDirection(ContentDirection.RTL);
    } else {
      setDirection(ContentDirection.LTR);
    }
  };

  return (
    <React.Fragment>
      <SecondaryButton onClick={toggleDirection}>Toggle Content Direction</SecondaryButton>
      <CanvasProvider theme={{canvas: {direction}}}>
        <Flex height={height} margin="xs">
          <LeftSidePanel />
        </Flex>
      </CanvasProvider>
    </React.Fragment>
  );
};

const LeftSidePanel = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  const {themeRTL} = useThemeRTL();
  const iconStyles = themeRTL({
    marginRight: space.s,
  });

  return (
    <SidePanel {...panelProps} onStateTransition={setPanelState}>
      <SidePanel.ToggleButton {...controlProps} />
      {panelState === 'expanded' && (
        <Flex alignItems="center" paddingY="s" paddingX="xs">
          <AccentIcon css={iconStyles} icon={rocketIcon} />
          <h3
            {...labelProps}
            css={{
              ...type.levels.body.large,
              color: colors.licorice500,
              fontWeight: type.properties.fontWeights.bold,
            }}
          >
            Tasks Panel
          </h3>
        </Flex>
      )}
    </SidePanel>
  );
};

export const NoHeaderPermanentlyOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  return (
    <Flex height={height}>
      <SidePanel {...panelProps}>
        <span hidden {...labelProps}>
          Tasks Panel
        </span>
        <Flex paddingY="s" paddingX="xs">
          <PrimaryButton size="large" icon={plusIcon}>
            Add New
          </PrimaryButton>
        </Flex>
      </SidePanel>
    </Flex>
  );
};

export const RightSidePanel = () => {
  const [direction, setDirection] = React.useState<ContentDirection>(ContentDirection.LTR);
  const toggleDirection = () => {
    if (direction === ContentDirection.LTR) {
      setDirection(ContentDirection.RTL);
    } else {
      setDirection(ContentDirection.LTR);
    }
  };

  return (
    <React.Fragment>
      <SecondaryButton onClick={toggleDirection}>Toggle Content Direction</SecondaryButton>
      <CanvasProvider theme={{canvas: {direction}}}>
        <Flex height={height} margin="xs">
          <RightPanel />
        </Flex>
      </CanvasProvider>
    </React.Fragment>
  );
};

const RightPanel = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  const {themeRTL} = useThemeRTL();
  const sidePanelStyles = themeRTL({
    position: 'absolute',
    right: 0,
  });

  const iconStyles = themeRTL({
    marginRight: space.s,
  });

  return (
    <SidePanel
      {...panelProps}
      css={sidePanelStyles}
      origin="right"
      onStateTransition={setPanelState}
    >
      <SidePanel.ToggleButton {...controlProps} />
      {panelState === 'expanded' && (
        <Flex justifyContent="flex-end" alignItems="center" paddingY="s" paddingX="xs">
          <AccentIcon css={iconStyles} icon={rocketIcon} />
          <h3
            {...labelProps}
            css={{
              ...type.levels.body.large,
              color: colors.licorice500,
              fontWeight: type.properties.fontWeights.bold,
            }}
          >
            Right Panel
          </h3>
        </Flex>
      )}
    </SidePanel>
  );
};

export const ExternalControl = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel({
    panelId: 'sidepanelid1',
    initialExpanded: false,
  });
  return (
    <Flex backgroundColor="soap200" height={height}>
      <SidePanel
        as="aside"
        {...panelProps}
        variant={'alternate'}
        onExpandedChange={expanded => {
          console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
        }}
        onStateTransition={state => {
          console.log(`Side Panel is ${state}`);
        }}
      >
        <span hidden {...labelProps}>
          Controlled Panel
        </span>
      </SidePanel>
      <main>
        <Box
          position="absolute"
          depth={3}
          borderRadius={borderRadius.m}
          marginTop={space.m}
          insetInlineStart={400}
          padding={space.m}
          width={320}
          backgroundColor={colors.frenchVanilla100}
        >
          <p>Control from somewhere else</p>
          <PrimaryButton {...controlProps} role="button">
            Toggle Side Panel
          </PrimaryButton>
        </Box>
      </main>
    </Flex>
  );
};

const steps = [
  {id: 1, name: 'step 1'},
  {id: 2, name: 'step 2'},
  {id: 3, name: 'step 3'},
  {id: 4, name: 'step 4'},
];

export const WithListItems = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  const handleItemKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      setCurrentStep(parseInt(event.currentTarget.id, 10));
    }
  };

  return (
    <Flex height={height}>
      <SidePanel {...panelProps} onStateTransition={setPanelState}>
        <SidePanel.ToggleButton {...controlProps} />
        {panelState === 'expanded' && (
          <Flex flexDirection="column" paddingY="s" paddingX="xs">
            <h3 {...labelProps}>Tasks Panel</h3>
            <Box as="ol" role="list" listStyle="none" margin={0} padding={0}>
              {steps.map(item => {
                return (
                  <li
                    id={`${item.id}`}
                    onKeyDown={handleItemKeyDown}
                    tabIndex={0}
                    css={{
                      fontWeight: currentStep === item.id ? 'bold' : 'normal',
                      padding: space.xxxs,
                      cursor: 'pointer',
                    }}
                    key={item.id}
                    onClick={() => setCurrentStep(item.id)}
                  >
                    {item.name}
                  </li>
                );
              })}
            </Box>
          </Flex>
        )}
      </SidePanel>
    </Flex>
  );
};

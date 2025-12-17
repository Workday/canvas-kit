import * as React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel, SidePanelTransitionStates} from '@workday/canvas-kit-labs-react/side-panel';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
  log: createStyles({
    fontFamily: 'monospace',
    fontSize: system.fontSize.subtext.large,
    maxHeight: px2rem(100),
    overflowY: 'auto',
    marginTop: system.space.x4,
  }),
};

export const OnStateTransition = () => {
  const [currentState, setCurrentState] = React.useState<SidePanelTransitionStates>('expanded');
  const [stateLog, setStateLog] = React.useState<string[]>(['expanded (initial)']);

  const handleStateTransition = (state: SidePanelTransitionStates) => {
    setCurrentState(state);
    setStateLog(prev => [...prev, state]);
  };

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel onStateTransition={handleStateTransition}>
        <SidePanel.ToggleButton />
        <AccessibleHide>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Current state: <strong>{currentState}</strong>
        </Text>
        <Text as="p" typeLevel="subtext.large">
          Click the toggle to see all transition states
        </Text>
        <Flex cs={stylesOverride.log} flexDirection="column">
          {stateLog.map((state, i) => (
            <span key={i}>
              {i + 1}. {state}
            </span>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

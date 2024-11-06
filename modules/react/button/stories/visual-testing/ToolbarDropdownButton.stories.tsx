import * as React from 'react';
import {customColorTheme} from '../../../../../utils/storybook';
import {playCircleIcon} from '@workday/canvas-system-icons-web';
import {ToolbarDropdownButton} from '@workday/canvas-kit-react/button';
import {Container, stateTableColumnProps} from './utils';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';

export default {
  title: 'Testing/Buttons/Button/Toolbar Dropdown Button',
  component: ToolbarDropdownButton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const columnProps = [
  ...stateTableColumnProps,
  {label: 'Mirrored Icon ', props: {shouldMirrorIcon: true, disabled: false}},
];

const ToolbarDropdownButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <React.Fragment>
    <div>
      <h3>Default</h3>
      <StaticStates theme={props.theme}>
        <ComponentStatesTable rowProps={[{label: 'Default', props: {}}]} columnProps={columnProps}>
          {props => (
            <Container>
              <ToolbarDropdownButton
                icon={playCircleIcon}
                aria-label="Play"
                {...props}
                onChange={() => {}} // eslint-disable-line no-empty-function
              />
            </Container>
          )}
        </ComponentStatesTable>
      </StaticStates>
    </div>
  </React.Fragment>
);

export const ToolbarDropdownButtonStates = {render: () => <ToolbarDropdownButtonTest />};

export const ToolbarDropdownButtonThemedStates = {
  render: () => <ToolbarDropdownButtonTest theme={{canvas: customColorTheme}} />,
};

import * as React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {activityStreamIcon, zoominIcon} from '@workday/canvas-system-icons-web';
import {ToolbarIconButton, ToolbarDropdownButton} from '@workday/canvas-kit-react/button';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const meta: Meta<typeof ToolbarIconButton> = {
  title: 'Components/Buttons/Toolbar',
  component: ToolbarIconButton,
  parameters: {
    ReadmePath: 'react/button',
  },
};

export default meta;

export const ToolbarIconButtonStory: StoryObj = {
  render: () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Toolbar Icon Button</h3>
        <ToolbarIconButton aria-label="Activity Stream" icon={activityStreamIcon} />
        <ToolbarIconButton aria-label="Activity Stream" icon={activityStreamIcon} disabled={true} />
        <h3>Toggleable Toolbar Icon Button</h3>
        <ToolbarIconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          onClick={handleToggle}
        />
      </div>
    );
  },
};

export const ToolbarDropdownButtonStory: StoryObj = {
  render: () => (
    <div className="story">
      <h3>Toolbar Dropdown Button with Menu</h3>
      <Menu>
        <Tooltip title="Expand">
          <Menu.Target
            as={ToolbarDropdownButton}
            icon={zoominIcon}
            onClick={() => {
              console.log('Expand icon clicked');
            }}
          ></Menu.Target>
        </Tooltip>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Item
                onClick={() => {
                  console.log('Expand All clicked');
                }}
              >
                Expand All
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  console.log('Expand to Leaf Level clicked');
                }}
              >
                Expand to Leaf Level
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  console.log('Expand to nth Level clicked');
                }}
              >
                Expand to nth Level
              </Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    </div>
  ),
};

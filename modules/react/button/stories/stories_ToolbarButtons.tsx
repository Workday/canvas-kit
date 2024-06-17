import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {activityStreamIcon, paragraphIcon, zoominIcon} from '@workday/canvas-system-icons-web';
import {ToolbarIconButton, ToolbarDropdownButton} from '@workday/canvas-kit-react/button';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const customElementStyles = {
  margin: '0 16px 0 8px',
  fontSize: 14,
};

storiesOf('Components/Buttons/Toolbar', module)
  .addParameters({component: ToolbarIconButton})
  .addParameters({ReadmePath: 'react/button'})
  .add('Toolbar Icon Button', () => {
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
  })
  .add('Toolbar Dropdown Button', () => (
    <div className="story">
      <h3>Toolbar Dropdown Button</h3>
      <ToolbarDropdownButton aria-label="Activity Stream" icon={paragraphIcon} />
      <ToolbarDropdownButton aria-label="Activity Stream" icon={paragraphIcon} disabled={true} />
      <h3>Custom Element Toolbar Dropdown Button</h3>
      <ToolbarDropdownButton aria-label="Activity Stream">
        <div style={customElementStyles}>Normal</div>
      </ToolbarDropdownButton>
    </div>
  ))
  .add('Toolbar Dropdown Button with Menu', () => (
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
                aria-label="Expand All"
                onClick={() => {
                  console.log('Expand All clicked');
                }}
              >
                First Item
              </Menu.Item>
              <Menu.Item
                aria-label="Expand to Leaf Level"
                onClick={() => {
                  console.log('Expand to Leaf Level clicked');
                }}
              >
                Second Item
              </Menu.Item>
              <Menu.Item
                aria-label="Expand to nth Level"
                onClick={() => {
                  console.log('Expand to nth Level clicked');
                }}
              >
                Third Item
              </Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    </div>
  ));

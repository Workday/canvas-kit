/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {activityStreamIcon, paragraphIcon} from '@workday/canvas-system-icons-web';

import {ToolbarIconButton, ToolbarDropdownButton} from '@workday/canvas-kit-react/button';

const customElementStyles = {
  margin: '0 16px 0 8px',
  fontSize: 14,
};

storiesOf('Components/Buttons/Button/React/Toolbar', module)
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
  ));

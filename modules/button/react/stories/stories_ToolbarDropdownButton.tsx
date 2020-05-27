/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {paragraphIcon} from '@workday/canvas-system-icons-web';

import {ToolbarDropdownButton} from '../index';

import README from '../README.md';

storiesOf('Components|Buttons/Button/React/Toolbar Button', module)
  .addParameters({component: ToolbarDropdownButton})
  .addDecorator(withReadme(README))
  .add('Toolbar Dropdown', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Toolbar Square</h3>
        <ToolbarDropdownButton aria-label="Activity Stream" icon={paragraphIcon} />
        <ToolbarDropdownButton aria-label="Activity Stream" icon={paragraphIcon} disabled={true} />
        <h3>Toggleable Toolbar Square</h3>
        <ToolbarDropdownButton
          aria-label="Activity Stream"
          icon={paragraphIcon}
          toggled={toggled}
          onClick={handleToggle}
        />
        <ToolbarDropdownButton aria-label="Activity Stream">
          <h1 style={{fontSize: '14px'}}>SomeHeading</h1>
        </ToolbarDropdownButton>
      </div>
    );
  });

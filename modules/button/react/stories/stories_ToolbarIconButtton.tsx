/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {activityStreamIcon} from '@workday/canvas-system-icons-web';

import {ToolbarIconButton} from '../index';

import README from '../README.md';

storiesOf('Components|Buttons/Button/React/Toolbar Button', module)
  .addParameters({component: ToolbarIconButton})
  .addDecorator(withReadme(README))
  .add('Toolbar Square', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Toolbar Square</h3>
        <ToolbarIconButton aria-label="Activity Stream" icon={activityStreamIcon} />
        <ToolbarIconButton aria-label="Activity Stream" icon={activityStreamIcon} disabled={true} />
        <h3>Toggleable Toolbar Square</h3>
        <ToolbarIconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          onClick={handleToggle}
        />
      </div>
    );
  });

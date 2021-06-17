/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {activityStreamIcon} from '@workday/canvas-system-icons-web';

import {IconButton} from '@workday/canvas-kit-react/button';

import README from '../README.md';

const iconButtonLayout: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '4px',
  button: {
    margin: '0 12px',
  },
};

const blueBackground: CSSObject = {
  ...iconButtonLayout,
  backgroundColor: '#0875e1',
};

storiesOf('Components/Buttons/Button/React/Icon Button', module)
  .addParameters({component: IconButton})
  .addDecorator(withReadme(README))
  .add('Circle', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Medium Default</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          variant="circle"
          size="medium"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          variant="circle"
          size="medium"
          disabled={true}
        />

        <h3>Small Default</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          variant="circle"
          size="small"
        />
        <IconButton
          aria-label="Activity Stream"
          variant="circle"
          icon={activityStreamIcon}
          size="small"
          disabled={true}
        />

        <h3>Toggleable Default</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant="circle"
          onClick={handleToggle}
        />
      </div>
    );
  })
  .add('Square', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Medium Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          variant="square"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          disabled={true}
          variant="square"
        />

        <h3>Small Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          variant="square"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          disabled={true}
          variant="square"
        />

        <h3>Toggleable Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant="square"
          onClick={handleToggle}
        />
      </div>
    );
  })
  .add('Square Filled', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Medium Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          variant="squareFilled"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          disabled={true}
          variant="squareFilled"
        />
        <h3>Small Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          variant="squareFilled"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          disabled={true}
          variant="squareFilled"
        />
        <h3>Toggleable Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant="squareFilled"
          onClick={handleToggle}
        />
      </div>
    );
  })
  .add('Plain', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Medium Plain</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          variant="plain"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          variant="plain"
          disabled={true}
        />
        <h3>Small Plain</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          variant="plain"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          disabled={true}
          variant="plain"
        />
        <h3>Toggleable Plain</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant="plain"
          onClick={handleToggle}
        />
      </div>
    );
  })
  .add('Circle Filled', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Medium Filled</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          variant="circleFilled"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="medium"
          variant="circleFilled"
          disabled={true}
        />
        <h3>Small Filled</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          variant="circleFilled"
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size="small"
          disabled={true}
          variant="circleFilled"
        />
        <h3>Toggleable Filled</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant="circleFilled"
          onClick={handleToggle}
        />
      </div>
    );
  })
  .add('Inverse', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Medium Inverse</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="medium"
            variant="inverse"
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="medium"
            variant="inverse"
            disabled={true}
          />
        </div>
        <h3>Small Inverse</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="small"
            variant="inverse"
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="small"
            disabled={true}
            variant="inverse"
          />
        </div>
        <h3>Toggleable Inverse</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            toggled={toggled}
            variant="inverse"
            onClick={handleToggle}
          />
        </div>
      </div>
    );
  })
  .add('Inverse Filled', () => {
    const [toggled, setToggled] = React.useState<boolean | undefined>();
    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <div className="story">
        <h3>Medium Inverse Filled</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="medium"
            variant="inverseFilled"
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="medium"
            variant="inverseFilled"
            disabled={true}
          />
        </div>
        <h3>Small Inverse Filled</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="small"
            variant="inverseFilled"
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size="small"
            disabled={true}
            variant="inverseFilled"
          />
        </div>
        <h3>Toggleable Inverse Filled</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            toggled={toggled}
            variant="inverseFilled"
            onClick={handleToggle}
          />
        </div>
      </div>
    );
  });

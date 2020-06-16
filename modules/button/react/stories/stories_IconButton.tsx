/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {activityStreamIcon} from '@workday/canvas-system-icons-web';

import {IconButton} from '../index';

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

storiesOf('Components|Buttons/Button/React/Icon Button', module)
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
          variant={IconButton.Variant.Circle}
          size={IconButton.Size.Medium}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          variant={IconButton.Variant.Circle}
          size={IconButton.Size.Medium}
          disabled={true}
        />

        <h3>Small Default</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          variant={IconButton.Variant.Circle}
          size={IconButton.Size.Small}
        />
        <IconButton
          aria-label="Activity Stream"
          variant={IconButton.Variant.Circle}
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          disabled={true}
        />

        <h3>Toggleable Default</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant={IconButton.Variant.Circle}
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
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.Square}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Medium}
          disabled={true}
          variant={IconButton.Variant.Square}
        />

        <h3>Small Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          variant={IconButton.Variant.Square}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          disabled={true}
          variant={IconButton.Variant.Square}
        />

        <h3>Toggleable Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant={IconButton.Variant.Square}
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
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.SquareFilled}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Medium}
          disabled={true}
          variant={IconButton.Variant.SquareFilled}
        />
        <h3>Small Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          variant={IconButton.Variant.SquareFilled}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          disabled={true}
          variant={IconButton.Variant.SquareFilled}
        />
        <h3>Toggleable Square</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant={IconButton.Variant.SquareFilled}
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
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.Plain}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.Plain}
          disabled={true}
        />
        <h3>Small Plain</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          variant={IconButton.Variant.Plain}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          disabled={true}
          variant={IconButton.Variant.Plain}
        />
        <h3>Toggleable Plain</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant={IconButton.Variant.Plain}
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
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.CircleFilled}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Medium}
          variant={IconButton.Variant.CircleFilled}
          disabled={true}
        />
        <h3>Small Filled</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          variant={IconButton.Variant.CircleFilled}
        />
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          size={IconButton.Size.Small}
          disabled={true}
          variant={IconButton.Variant.CircleFilled}
        />
        <h3>Toggleable Filled</h3>
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={toggled}
          variant={IconButton.Variant.CircleFilled}
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
            size={IconButton.Size.Medium}
            variant={IconButton.Variant.Inverse}
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size={IconButton.Size.Medium}
            variant={IconButton.Variant.Inverse}
            disabled={true}
          />
        </div>
        <h3>Small Inverse</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size={IconButton.Size.Small}
            variant={IconButton.Variant.Inverse}
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size={IconButton.Size.Small}
            disabled={true}
            variant={IconButton.Variant.Inverse}
          />
        </div>
        <h3>Toggleable Inverse</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            toggled={toggled}
            variant={IconButton.Variant.Inverse}
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
            size={IconButton.Size.Medium}
            variant={IconButton.Variant.InverseFilled}
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size={IconButton.Size.Medium}
            variant={IconButton.Variant.InverseFilled}
            disabled={true}
          />
        </div>
        <h3>Small Inverse Filled</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size={IconButton.Size.Small}
            variant={IconButton.Variant.InverseFilled}
          />
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            size={IconButton.Size.Small}
            disabled={true}
            variant={IconButton.Variant.InverseFilled}
          />
        </div>
        <h3>Toggleable Inverse Filled</h3>
        <div css={blueBackground}>
          <IconButton
            aria-label="Activity Stream"
            icon={activityStreamIcon}
            toggled={toggled}
            variant={IconButton.Variant.InverseFilled}
            onClick={handleToggle}
          />
        </div>
      </div>
    );
  });

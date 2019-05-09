/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {
  editIcon,
  playCircleIcon,
  arrowRightIcon,
  activityStreamIcon,
} from '@workday/canvas-system-icons-web';

import {beta_Button as Button, DropdownButton, TextButton} from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';

// TODO (beta button): remove this story, edit storybook config to not accept stories*.tsx
// TODO (beta button): remove stories_beta.tsx from tsconfig.json in this module
const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '3px',
};

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Canvas Kit/Button/Beta', module)
  .addDecorator(withReadme(README))
  .add('Buttons', () => (
    <div className="story">
      <h1 className="section-label">(Beta) Buttons</h1>
      <h3>Large Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <br />
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
        icon={activityStreamIcon}
      >
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
        icon={activityStreamIcon}
      >
        Secondary
      </Button>
      <br />
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <br />
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Large} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <h3>Medium Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <br />
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary} icon={editIcon}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary} icon={editIcon}>
        Secondary
      </Button>
      <br />
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <br />
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Delete}>
        Secondary
      </Button>
      <h3>Small Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <br />
      <Button disabled={true} buttonSize={Button.Sizes.Small} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Small} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Small} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <h3>Growing Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary} grow={true}>
          Primary
        </Button>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary} grow={true}>
          Secondary
        </Button>
      </div>
    </div>
  ))
  .add('Highlight Buttons', () => (
    <div className="story">
      <h1 className="section-label">Highlight Buttons</h1>
      <h3>Large Highlight Buttons</h3>
      <Button buttonType={Button.Types.Highlight} icon={activityStreamIcon}>
        Highlight
      </Button>
      <Button buttonType={Button.Types.Highlight} icon={playCircleIcon} dataLabel={'2:00'}>
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
        dataLabel={'2:00'}
      >
        Highlight
      </Button>

      <h3>Medium Highlight Buttons</h3>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
      >
        Highlight
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <h3>Growing Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonType={Button.Types.Highlight} icon={activityStreamIcon} grow={true}>
          Highlight
        </Button>
        <Button
          buttonType={Button.Types.Highlight}
          icon={playCircleIcon}
          dataLabel={'2:00'}
          grow={true}
        >
          Highlight
        </Button>
      </div>
    </div>
  ))
  .add('Outline Buttons', () => (
    <div className="story">
      <h1 className="section-label">Outline Buttons</h1>
      <h3>Large Outline Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlinePrimary}>
          Outline Primary
        </Button>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineSecondary}>
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineInverse}>
            Outline Inverse
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlinePrimary}
          icon={activityStreamIcon}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlineSecondary}
          icon={activityStreamIcon}
        >
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button
            buttonSize={Button.Sizes.Large}
            buttonType={Button.Types.OutlineInverse}
            icon={activityStreamIcon}
          >
            Outline Inverse
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Large}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlinePrimary}
          icon={playCircleIcon}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineSecondary}
          icon={playCircleIcon}
        >
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button
            buttonSize={Button.Sizes.Large}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineInverse}
            icon={playCircleIcon}
          >
            Outline Inverse
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Large}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlinePrimary}
          icon={playCircleIcon}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineSecondary}
          icon={playCircleIcon}
        >
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button
            buttonSize={Button.Sizes.Large}
            disabled={true}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineInverse}
            icon={playCircleIcon}
          >
            Outline Inverse
          </Button>
        </div>
      </div>
      <h3>Medium Outline Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlinePrimary}>
          Outline Primary
        </Button>
        <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineSecondary}>
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineInverse}>
            Outline Inverse
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.OutlinePrimary}
          icon={editIcon}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.OutlineSecondary}
          icon={editIcon}
        >
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button
            buttonSize={Button.Sizes.Medium}
            buttonType={Button.Types.OutlineInverse}
            icon={editIcon}
          >
            Outline Inverse
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Medium}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlinePrimary}
          icon={playCircleIcon}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineSecondary}
          icon={playCircleIcon}
        >
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button
            buttonSize={Button.Sizes.Medium}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineInverse}
            icon={playCircleIcon}
          >
            Outline Inverse
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Medium}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlinePrimary}
          icon={playCircleIcon}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineSecondary}
          icon={playCircleIcon}
        >
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button
            buttonSize={Button.Sizes.Medium}
            disabled={true}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineInverse}
            icon={playCircleIcon}
          >
            Outline Inverse
          </Button>
        </div>
      </div>
      <h3>Small Outline Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlinePrimary}>
          Outline Primary
        </Button>
        <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineSecondary}>
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineInverse}>
            Outline Inverse
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Small}
          disabled={true}
          buttonType={Button.Types.OutlinePrimary}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Small}
          disabled={true}
          buttonType={Button.Types.OutlineSecondary}
        >
          Outline Secondary
        </Button>
        <div className={css(blueBackground)}>
          <Button
            buttonSize={Button.Sizes.Small}
            disabled={true}
            buttonType={Button.Types.OutlineInverse}
          >
            Outline Inverse
          </Button>
        </div>
      </div>
      <h3>Growing Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlinePrimary}
          grow={true}
        >
          Outline Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlineSecondary}
          grow={true}
        >
          Outline Secondary
        </Button>
      </div>
    </div>
  ))
  .add('Text Buttons', () => (
    <div className="story">
      <h1 className="section-label">Text Buttons</h1>
      <h3>Large Text Buttons</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.Inverse}>
          Text Inverse
        </TextButton>
      </div>
      <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.Default}>
        Text
      </TextButton>
      <h3>Small Text Buttons</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.Inverse}>
          Text Inverse
        </TextButton>
      </div>
      <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.Default}>
        Text
      </TextButton>
      <h3>All Caps Text Buttons</h3>
      <TextButton buttonType={TextButton.Types.AllCaps}>All Caps</TextButton>
      <div className={css(blueBackground)}>
        <TextButton buttonType={TextButton.Types.InverseAllCaps}>All Caps</TextButton>
      </div>

      <h3>Icon Text Buttons</h3>
      <div className={css(buttonContainer)}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={TextButton.Types.Default}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPositions.Right}
          buttonType={TextButton.Types.Default}
        >
          Right Icon Large
        </TextButton>
      </div>
      <div className={css(blueBackground)}>
        <TextButton
          icon={activityStreamIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={TextButton.Types.Inverse}
        >
          Left Icon Large
        </TextButton>
      </div>
      <div className={css(buttonContainer)}>
        <TextButton
          buttonSize={Button.Sizes.Small}
          icon={editIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={TextButton.Types.Default}
        >
          Left Icon Small
        </TextButton>
        <TextButton
          buttonSize={TextButton.Sizes.Small}
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPositions.Right}
          buttonType={TextButton.Types.Default}
        >
          Right Icon Small
        </TextButton>
      </div>
      <div className={css(blueBackground)}>
        <TextButton
          buttonSize={TextButton.Sizes.Small}
          iconPosition={TextButton.IconPositions.Left}
          icon={editIcon}
          buttonType={TextButton.Types.Inverse}
        >
          Left Icon Small
        </TextButton>
      </div>
      <h3>Disabled States</h3>
      <div className={css(blueBackground)}>
        <TextButton
          icon={editIcon}
          disabled={true}
          buttonSize={TextButton.Sizes.Large}
          buttonType={TextButton.Types.Inverse}
        >
          Text Inverse
        </TextButton>
      </div>
      <TextButton
        icon={editIcon}
        disabled={true}
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.Default}
      >
        Text
      </TextButton>
    </div>
  ))
  .add('Dropdown Buttons', () => (
    <div className="story">
      <h1 className="section-label">Dropdown Buttons</h1>
      <h3>Large Dropdown Buttons</h3>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <br />
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Dropdown Buttons</h3>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <br />
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ));

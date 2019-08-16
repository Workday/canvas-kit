/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {
  editIcon,
  playCircleIcon,
  arrowRightIcon,
  activityStreamIcon,
} from '@workday/canvas-system-icons-web';

import {beta_Button as Button, DropdownButton, TextButton} from '../index';
import README from '../README.md';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';

// TODO (beta button): remove this story, edit storybook config to not accept stories*.tsx
// TODO (beta button): remove stories_beta.tsx from tsconfig.json in this module
const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '12px',
  maxWidth: 'max-content',
  borderRadius: '3px',
  button: {
    margin: '12px',
  },
};

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Button/Beta', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.Primary}>
        Primary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.Primary}
        icon={activityStreamIcon}
      >
        Primary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <h3>Medium Primary</h3>
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.Primary}>
        Primary
      </Button>
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.Primary} icon={editIcon}>
        Primary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <h3>Small Primary</h3>
      <Button buttonSize={Button.Size.Small} buttonType={Button.Type.Primary}>
        Primary
      </Button>
      <Button disabled={true} buttonSize={Button.Size.Small} buttonType={Button.Type.Primary}>
        Primary
      </Button>
      <h3>Growing Primary</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Size.Large} buttonType={Button.Type.Primary} grow={true}>
          Primary
        </Button>
      </div>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.Secondary}>
        Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.Secondary}
        icon={activityStreamIcon}
      >
        Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Medium Secondary</h3>
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.Secondary}>
        Secondary
      </Button>
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.Secondary} icon={editIcon}>
        Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Small Secondary</h3>
      <Button buttonSize={Button.Size.Small} buttonType={Button.Type.Secondary}>
        Secondary
      </Button>
      <Button disabled={true} buttonSize={Button.Size.Small} buttonType={Button.Type.Secondary}>
        Secondary
      </Button>
      <h3>Growing Secondary</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.Secondary} grow={true}>
        Growing Secondary
      </Button>
    </div>
  ))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.Delete}>
        Delete
      </Button>
      <Button disabled={true} buttonSize={Button.Size.Large} buttonType={Button.Type.Delete}>
        Delete
      </Button>
      <h3>Medium Delete</h3>
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.Delete}>
        Delete
      </Button>
      <Button disabled={true} buttonSize={Button.Size.Medium} buttonType={Button.Type.Delete}>
        Delete
      </Button>
      <h3>Small Delete</h3>
      <Button buttonSize={Button.Size.Small} buttonType={Button.Type.Delete}>
        Delete
      </Button>
      <Button disabled={true} buttonSize={Button.Size.Small} buttonType={Button.Type.Delete}>
        Delete
      </Button>
    </div>
  ))
  .add('Highlight', () => (
    <div className="story">
      <h3>Large Highlight</h3>
      <Button buttonType={Button.Type.Highlight} icon={activityStreamIcon}>
        Highlight
      </Button>
      <Button buttonType={Button.Type.Highlight} icon={playCircleIcon} dataLabel={'2:00'}>
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonType={Button.Type.Highlight}
        icon={playCircleIcon}
        dataLabel={'2:00'}
      >
        Highlight
      </Button>
      <h3>Medium Highlight</h3>
      <Button
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.Highlight}
        icon={playCircleIcon}
      >
        Highlight
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <h3>Growing</h3>
      <div className={css(buttonContainer)}>
        <Button buttonType={Button.Type.Highlight} icon={activityStreamIcon} grow={true}>
          Highlight
        </Button>
        <Button
          buttonType={Button.Type.Highlight}
          icon={playCircleIcon}
          dataLabel={'2:00'}
          grow={true}
        >
          Highlight
        </Button>
      </div>
    </div>
  ));

storiesOf('Button/Beta/Text', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>Large</h3>
      <TextButton buttonSize={TextButton.Size.Large} buttonType={TextButton.Type.Default}>
        Text
      </TextButton>
      <TextButton
        disabled={true}
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.Default}
      >
        Text
      </TextButton>
      <h3>Small</h3>
      <TextButton buttonSize={TextButton.Size.Small} buttonType={TextButton.Type.Default}>
        Text
      </TextButton>
      <TextButton
        disabled={true}
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.Default}
      >
        Text
      </TextButton>
      <h3>All Caps</h3>
      <TextButton buttonType={TextButton.Type.AllCaps}>All Caps</TextButton>
      <h3>Icons</h3>
      <div className={css(buttonContainer)}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPosition.Left}
          buttonType={TextButton.Type.Default}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPosition.Right}
          buttonType={TextButton.Type.Default}
        >
          Right Icon Large
        </TextButton>
      </div>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Inverse</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonSize={TextButton.Size.Large} buttonType={TextButton.Type.Inverse}>
          Text
        </TextButton>
        <TextButton
          disabled={true}
          buttonSize={TextButton.Size.Large}
          buttonType={TextButton.Type.Inverse}
        >
          Text
        </TextButton>
      </div>
      <h3>Small Inverse</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonSize={TextButton.Size.Small} buttonType={TextButton.Type.Inverse}>
          Text
        </TextButton>
        <TextButton
          disabled={true}
          buttonSize={TextButton.Size.Small}
          buttonType={TextButton.Type.Inverse}
        >
          Text
        </TextButton>
      </div>
      <h3>All Caps Inverse</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonType={TextButton.Type.InverseAllCaps}>All Caps</TextButton>
      </div>
      <h3>Icons Inverse</h3>
      <div className={css(buttonContainer, blueBackground)}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPosition.Left}
          buttonType={TextButton.Type.Inverse}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPosition.Right}
          buttonType={TextButton.Type.Inverse}
        >
          Right Icon Large
        </TextButton>
      </div>
    </div>
  ));

storiesOf('Button/Beta/Outline', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.OutlinePrimary}
        icon={activityStreamIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <h3>Medium Primary</h3>
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.OutlinePrimary}
        icon={editIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <h3>Small Primary</h3>
      <Button buttonSize={Button.Size.Small} buttonType={Button.Type.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Size.Small}
        disabled={true}
        buttonType={Button.Type.OutlinePrimary}
      >
        Outline Primary
      </Button>
      <h3>Growing Primary</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.OutlinePrimary} grow={true}>
        Growing Primary Outline
      </Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        buttonType={Button.Type.OutlineSecondary}
        icon={activityStreamIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Large}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <h3>Medium Secondary</h3>
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        buttonType={Button.Type.OutlineSecondary}
        icon={editIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Medium}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Type.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <h3>Small Secondary</h3>
      <Button buttonSize={Button.Size.Small} buttonType={Button.Type.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Size.Small}
        disabled={true}
        buttonType={Button.Type.OutlineSecondary}
      >
        Outline Secondary
      </Button>
      <h3>Growing Secondary</h3>
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.OutlineSecondary} grow={true}>
        Growing Secondary Outline
      </Button>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Inverse</h3>
      <div className={css(blueBackground)}>
        <Button buttonSize={Button.Size.Large} buttonType={Button.Type.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Size.Large}
          buttonType={Button.Type.OutlineInverse}
          icon={activityStreamIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Size.Large}
          dataLabel={'1:00'}
          buttonType={Button.Type.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Size.Large}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Type.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Medium Inverse</h3>
      <div className={css(blueBackground)}>
        <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Size.Medium}
          buttonType={Button.Type.OutlineInverse}
          icon={editIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Size.Medium}
          dataLabel={'1:00'}
          buttonType={Button.Type.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Size.Medium}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Type.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Small Inverse</h3>
      <div className={css(blueBackground)}>
        <Button buttonSize={Button.Size.Small} buttonType={Button.Type.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Size.Small}
          disabled={true}
          buttonType={Button.Type.OutlineInverse}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Growing Inverse</h3>
      <div className={css(blueBackground)} style={{maxWidth: 'initial'}}>
        <Button buttonSize={Button.Size.Large} buttonType={Button.Type.OutlineInverse} grow={true}>
          Growing Inverse Outline
        </Button>
      </div>
    </div>
  ));

storiesOf('Button/Beta/Dropdown', module)
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <DropdownButton
        buttonSize={DropdownButton.Size.Large}
        buttonType={DropdownButton.Type.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Size.Large}
        buttonType={DropdownButton.Type.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Primary</h3>
      <DropdownButton
        buttonSize={DropdownButton.Size.Medium}
        buttonType={DropdownButton.Type.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Size.Medium}
        buttonType={DropdownButton.Type.Primary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <DropdownButton
        buttonSize={DropdownButton.Size.Large}
        buttonType={DropdownButton.Type.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Size.Large}
        buttonType={DropdownButton.Type.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Secondary</h3>
      <DropdownButton
        buttonSize={DropdownButton.Size.Medium}
        buttonType={DropdownButton.Type.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Size.Medium}
        buttonType={DropdownButton.Type.Secondary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ));

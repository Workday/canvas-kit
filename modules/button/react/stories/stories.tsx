/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {
  editIcon,
  playCircleIcon,
  arrowRightIcon,
  activityStreamIcon,
} from '@workday/canvas-system-icons-web';

import {Button, DropdownButton, TextButton} from '../index';
import README from '../README.md';

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

storiesOf('Components|Buttons/Button/React', module)
  .addParameters({component: Button})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.Primary}>
        Primary
      </Button>
      <Button size={Button.Size.Large} variant={Button.Variant.Primary} icon={activityStreamIcon}>
        Primary
      </Button>
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        size={Button.Size.Large}
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <h3>Medium Primary</h3>
      <Button size={Button.Size.Medium} variant={Button.Variant.Primary}>
        Primary
      </Button>
      <Button size={Button.Size.Medium} variant={Button.Variant.Primary} icon={editIcon}>
        Primary
      </Button>
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        size={Button.Size.Medium}
        variant={Button.Variant.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <h3>Small Primary</h3>
      <Button size={Button.Size.Small} variant={Button.Variant.Primary}>
        Primary
      </Button>
      <Button disabled={true} size={Button.Size.Small} variant={Button.Variant.Primary}>
        Primary
      </Button>
      <h3>Growing Primary</h3>
      <div css={buttonContainer}>
        <Button size={Button.Size.Large} variant={Button.Variant.Primary} grow={true}>
          Primary
        </Button>
      </div>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.Secondary}>
        Secondary
      </Button>
      <Button size={Button.Size.Large} variant={Button.Variant.Secondary} icon={activityStreamIcon}>
        Secondary
      </Button>
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        size={Button.Size.Large}
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Medium Secondary</h3>
      <Button size={Button.Size.Medium} variant={Button.Variant.Secondary}>
        Secondary
      </Button>
      <Button size={Button.Size.Medium} variant={Button.Variant.Secondary} icon={editIcon}>
        Secondary
      </Button>
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        size={Button.Size.Medium}
        variant={Button.Variant.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Small Secondary</h3>
      <Button size={Button.Size.Small} variant={Button.Variant.Secondary}>
        Secondary
      </Button>
      <Button disabled={true} size={Button.Size.Small} variant={Button.Variant.Secondary}>
        Secondary
      </Button>
      <h3>Growing Secondary</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.Secondary} grow={true}>
        Growing Secondary
      </Button>
    </div>
  ))
  .add('Delete', () => (
    <div className="story">
      <h3>Large Delete</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.Delete}>
        Delete
      </Button>
      <Button disabled={true} size={Button.Size.Large} variant={Button.Variant.Delete}>
        Delete
      </Button>
      <h3>Medium Delete</h3>
      <Button size={Button.Size.Medium} variant={Button.Variant.Delete}>
        Delete
      </Button>
      <Button disabled={true} size={Button.Size.Medium} variant={Button.Variant.Delete}>
        Delete
      </Button>
      <h3>Small Delete</h3>
      <Button size={Button.Size.Small} variant={Button.Variant.Delete}>
        Delete
      </Button>
      <Button disabled={true} size={Button.Size.Small} variant={Button.Variant.Delete}>
        Delete
      </Button>
    </div>
  ))
  .add('Highlight', () => (
    <div className="story">
      <h3>Large Highlight</h3>
      <Button variant={Button.Variant.Highlight} icon={activityStreamIcon}>
        Highlight
      </Button>
      <Button variant={Button.Variant.Highlight} icon={playCircleIcon} dataLabel={'2:00'}>
        Highlight
      </Button>
      <Button
        disabled={true}
        variant={Button.Variant.Highlight}
        icon={playCircleIcon}
        dataLabel={'2:00'}
      >
        Highlight
      </Button>
      <h3>Medium Highlight</h3>
      <Button size={Button.Size.Medium} variant={Button.Variant.Highlight} icon={playCircleIcon}>
        Highlight
      </Button>
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <Button
        disabled={true}
        size={Button.Size.Medium}
        variant={Button.Variant.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <h3>Growing</h3>
      <div css={buttonContainer}>
        <Button variant={Button.Variant.Highlight} icon={activityStreamIcon} grow={true}>
          Highlight
        </Button>
        <Button
          variant={Button.Variant.Highlight}
          icon={playCircleIcon}
          dataLabel={'2:00'}
          grow={true}
        >
          Highlight
        </Button>
      </div>
    </div>
  ));

storiesOf('Components|Buttons/Button/React/Text', module)
  .addParameters({component: TextButton})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h3>Large</h3>
      <TextButton size={TextButton.Size.Large} variant={TextButton.Variant.Default}>
        Text
      </TextButton>
      <TextButton disabled={true} size={TextButton.Size.Large} variant={TextButton.Variant.Default}>
        Text
      </TextButton>
      <h3>Small</h3>
      <TextButton size={TextButton.Size.Small} variant={TextButton.Variant.Default}>
        Text
      </TextButton>
      <TextButton disabled={true} size={TextButton.Size.Small} variant={TextButton.Variant.Default}>
        Text
      </TextButton>
      <h3>All Caps</h3>
      <TextButton variant={TextButton.Variant.AllCaps}>All Caps</TextButton>
      <h3>Icons</h3>
      <div css={buttonContainer}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPosition.Left}
          variant={TextButton.Variant.Default}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPosition.Right}
          variant={TextButton.Variant.Default}
        >
          Right Icon Large
        </TextButton>
      </div>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Inverse</h3>
      <div css={blueBackground}>
        <TextButton size={TextButton.Size.Large} variant={TextButton.Variant.Inverse}>
          Text
        </TextButton>
        <TextButton
          disabled={true}
          size={TextButton.Size.Large}
          variant={TextButton.Variant.Inverse}
        >
          Text
        </TextButton>
      </div>
      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <TextButton size={TextButton.Size.Small} variant={TextButton.Variant.Inverse}>
          Text
        </TextButton>
        <TextButton
          disabled={true}
          size={TextButton.Size.Small}
          variant={TextButton.Variant.Inverse}
        >
          Text
        </TextButton>
      </div>
      <h3>All Caps Inverse</h3>
      <div css={blueBackground}>
        <TextButton variant={TextButton.Variant.InverseAllCaps}>All Caps</TextButton>
      </div>
      <h3>Icons Inverse</h3>
      <div css={{...buttonContainer, ...blueBackground}}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPosition.Left}
          variant={TextButton.Variant.Inverse}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPosition.Right}
          variant={TextButton.Variant.Inverse}
        >
          Right Icon Large
        </TextButton>
      </div>
    </div>
  ));

storiesOf('Components|Buttons/Button/React/Outline', module)
  .addParameters({component: Button})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.OutlinePrimary}
        icon={activityStreamIcon}
      >
        Outline Primary
      </Button>
      <Button
        size={Button.Size.Large}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        size={Button.Size.Large}
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <h3>Medium Primary</h3>
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlinePrimary} icon={editIcon}>
        Outline Primary
      </Button>
      <Button
        size={Button.Size.Medium}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        size={Button.Size.Medium}
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <h3>Small Primary</h3>
      <Button size={Button.Size.Small} variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button size={Button.Size.Small} disabled={true} variant={Button.Variant.OutlinePrimary}>
        Outline Primary
      </Button>
      <h3>Growing Primary</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.OutlinePrimary} grow={true}>
        Growing Primary Outline
      </Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.OutlineSecondary}
        icon={activityStreamIcon}
      >
        Outline Secondary
      </Button>
      <Button
        size={Button.Size.Large}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        size={Button.Size.Large}
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <h3>Medium Secondary</h3>
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlineSecondary} icon={editIcon}>
        Outline Secondary
      </Button>
      <Button
        size={Button.Size.Medium}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        size={Button.Size.Medium}
        disabled={true}
        dataLabel={'1:00'}
        variant={Button.Variant.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <h3>Small Secondary</h3>
      <Button size={Button.Size.Small} variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button size={Button.Size.Small} disabled={true} variant={Button.Variant.OutlineSecondary}>
        Outline Secondary
      </Button>
      <h3>Growing Secondary</h3>
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineSecondary} grow={true}>
        Growing Secondary Outline
      </Button>
    </div>
  ))
  .add('Inverse', () => (
    <div className="story">
      <h3>Large Inverse</h3>
      <div css={blueBackground}>
        <Button size={Button.Size.Large} variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button
          size={Button.Size.Large}
          variant={Button.Variant.OutlineInverse}
          icon={activityStreamIcon}
        >
          Outline Inverse
        </Button>
        <Button
          size={Button.Size.Large}
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          size={Button.Size.Large}
          disabled={true}
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Medium Inverse</h3>
      <div css={blueBackground}>
        <Button size={Button.Size.Medium} variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button size={Button.Size.Medium} variant={Button.Variant.OutlineInverse} icon={editIcon}>
          Outline Inverse
        </Button>
        <Button
          size={Button.Size.Medium}
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          size={Button.Size.Medium}
          disabled={true}
          dataLabel={'1:00'}
          variant={Button.Variant.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Small Inverse</h3>
      <div css={blueBackground}>
        <Button size={Button.Size.Small} variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button size={Button.Size.Small} disabled={true} variant={Button.Variant.OutlineInverse}>
          Outline Inverse
        </Button>
      </div>
      <h3>Growing Inverse</h3>
      <div css={blueBackground} style={{maxWidth: 'initial'}}>
        <Button size={Button.Size.Large} variant={Button.Variant.OutlineInverse} grow={true}>
          Growing Inverse Outline
        </Button>
      </div>
    </div>
  ));

storiesOf('Components|Buttons/Button/React/Dropdown', module)
  .addParameters({component: DropdownButton})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <DropdownButton size={DropdownButton.Size.Large} variant={DropdownButton.Variant.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        size={DropdownButton.Size.Large}
        variant={DropdownButton.Variant.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Primary</h3>
      <DropdownButton size={DropdownButton.Size.Medium} variant={DropdownButton.Variant.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        size={DropdownButton.Size.Medium}
        variant={DropdownButton.Variant.Primary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <DropdownButton size={DropdownButton.Size.Large} variant={DropdownButton.Variant.Secondary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        size={DropdownButton.Size.Large}
        variant={DropdownButton.Variant.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Secondary</h3>
      <DropdownButton size={DropdownButton.Size.Medium} variant={DropdownButton.Variant.Secondary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        size={DropdownButton.Size.Medium}
        variant={DropdownButton.Variant.Secondary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ));

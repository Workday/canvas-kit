import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {Avatar} from '../index';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {createStencil} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '../../icon';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

const customBlueAvatarStencil = createStencil({
  base: {
    backgroundColor: base.berrySmoothie400,
    ['[data-slot="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.berrySmoothie100,
    },
  },
});

const customGreenAvatarStencil = createStencil({
  base: {
    backgroundColor: base.watermelon400,
    ['[data-slot="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.watermelon100,
    },
  },
});

storiesOf('Components/Indicators/Avatar', module)
  .addParameters({ReadmePath: 'react/avatar'})
  .addParameters({component: Avatar})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size="extraExtraLarge" />
      <h3>Extra Large</h3>
      <Avatar as="div" size="extraLarge" />
      <h3>Large</h3>
      <Avatar as="div" size="large" />
      <h3>Medium</h3>
      <Avatar as="div" size="medium" />
      <h3>Small</h3>
      <Avatar as="div" size="small" />
      <h3>Extra Small</h3>
      <Avatar as="div" size="extraSmall" />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size="extraExtraLarge" variant="dark" />
      <h3>Extra Large</h3>
      <Avatar as="div" size="extraLarge" variant="dark" />
      <h3>Large</h3>
      <Avatar as="div" size="large" variant="dark" />
      <h3>Medium</h3>
      <Avatar as="div" size="medium" variant="dark" />
      <h3>Small</h3>
      <Avatar as="div" size="small" variant="dark" />
      <h3>Extra Small</h3>
      <Avatar as="div" size="extraSmall" variant="dark" />
    </div>
  ))
  .add('Dynamic Background', () => (
    <div className="story">
      <h3>Blue</h3>
      <Avatar as="div" size="extraExtraLarge" {...customBlueAvatarStencil()} />
      <h3>Green</h3>
      <Avatar as="div" size="extraLarge" {...customGreenAvatarStencil()} />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size="extraExtraLarge" url={testAvatar} />
      <h3>Extra Large</h3>
      <Avatar as="div" size="extraLarge" url={testAvatar} />
      <h3>Large</h3>
      <Avatar as="div" size="large" url={testAvatar} />
      <h3>Medium</h3>
      <Avatar as="div" size="medium" url={testAvatar} />
      <h3>Small</h3>
      <Avatar as="div" size="small" url={testAvatar} />
      <h3>Extra Small</h3>
      <Avatar as="div" size="extraSmall" url={testAvatar} />
    </div>
  ))
  .add('ObjectFit / Non-Square Image', () => (
    <div className="story">
      <h3>Original Rectangle Image</h3>
      <img alt="" src="https://placehold.co/450x200/png" />
      <h3>Object fit on a Rectangle Image</h3>
      <Avatar as="div" url="https://placehold.co/450x200/png" objectFit="contain" />
      {/* NOTE: Need to make size dynamic */}
      <h3>Object fit on a Rectangle Image using Dynamic Size</h3>
      <Avatar as="div" size="200px" url="https://placehold.co/450x200/png" objectFit="contain" />
      <h3>Original Square Image</h3>
      <img alt="" src="https://placehold.co/450x450/png" />
      <h3>Object fit on a Square Image</h3>
      <Avatar as="div" url="https://placehold.co/450x450/png" />
      {/* NOTE: Need to make size dynamic */}
      <h3>Object fit on a Square Image using Dynamic Size</h3>
      <Avatar as="div" size="200px" url="https://placehold.co/450x450/png" />
    </div>
  ))
  .add('Dynamic Size', () => (
    <div className="story">
      <h3>30px</h3>
      <Avatar as="div" size="30px" />
      <h3>40px</h3>
      <Avatar as="div" size="40px" />
      <h3>3rem</h3>
      <Avatar as="div" size="3rem" />
      <h3>4rem</h3>
      <Avatar as="div" size="4rem" />
    </div>
  ))
  .add('Lazy Loading', () => (
    <div className="story">
      <h3>Lazy Loading</h3>
      {Array.from({length: 100}, (v, index) => (
        <>
          <Avatar as="div" size="large" url={testAvatar + '?v=' + index} />
          <br />
        </>
      ))}
    </div>
  ));

storiesOf('Components/Indicators/Avatar/Avatar Button', module)
  .addParameters({ReadmePath: 'react/avatar'})
  .addParameters({component: Avatar})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size="extraExtraLarge" onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size="extraLarge" onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size="large" onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size="medium" onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size="small" onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size="extraSmall" onClick={handleAvatarButtonClick} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size="extraExtraLarge" variant="dark" onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size="extraLarge" variant="dark" onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size="large" variant="dark" onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size="medium" variant="dark" onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size="small" variant="dark" onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size="extraSmall" variant="dark" onClick={handleAvatarButtonClick} />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size="extraExtraLarge" url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size="extraLarge" url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size="large" url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size="medium" url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size="small" url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size="extraSmall" url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Broken Link</h3>
      <Avatar url="/fake/path/to/image.png" onClick={handleAvatarButtonClick} />
    </div>
  ));

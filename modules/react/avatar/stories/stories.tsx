import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {Avatar} from '../index';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

const handleAvatarButtonClick = () => console.log('AvatarButton clicked');

storiesOf('Components/Indicators/Avatar', module)
  .addParameters({ReadmePath: 'react/avatar'})
  .addParameters({component: Avatar})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={'extraExtraLarge'} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={'extraLarge'} />
      <h3>Large</h3>
      <Avatar as="div" size={'large'} />
      <h3>Medium</h3>
      <Avatar as="div" size={'medium'} />
      <h3>Small</h3>
      <Avatar as="div" size={'small'} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={'extraSmall'} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={'extraExtraLarge'} variant={'dark'} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={'extraLarge'} variant={'dark'} />
      <h3>Large</h3>
      <Avatar as="div" size={'large'} variant={'dark'} />
      <h3>Medium</h3>
      <Avatar as="div" size={'medium'} variant={'dark'} />
      <h3>Small</h3>
      <Avatar as="div" size={'small'} variant={'dark'} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={'extraSmall'} variant={'dark'} />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar as="div" size={'extraExtraLarge'} url={testAvatar} />
      <h3>Extra Large</h3>
      <Avatar as="div" size={'extraLarge'} url={testAvatar} />
      <h3>Large</h3>
      <Avatar as="div" size={'large'} url={testAvatar} />
      <h3>Medium</h3>
      <Avatar as="div" size={'medium'} url={testAvatar} />
      <h3>Small</h3>
      <Avatar as="div" size={'small'} url={testAvatar} />
      <h3>Extra Small</h3>
      <Avatar as="div" size={'extraSmall'} url={testAvatar} />
    </div>
  ))
  .add('Non-Square Image', () => (
    <div className="story">
      <h3>Original Rectangle Image</h3>
      <img alt="" src="https://placekitten.com/g/450/200" />
      <h3>Using Object Fit on a Rectangle Image</h3>
      <Avatar as="div" url="https://placekitten.com/g/450/200" objectFit="contain" />
      {/* NOTE: Need to make size dynamic */}
      {/* <Avatar as="div" size={200} url="https://placekitten.com/g/450/200" objectFit="contain" /> */}
      <h3>Original Square Image</h3>
      <img alt="" src="https://placekitten.com/g/450/450" />
      <h3>Using a Square Image</h3>
      <Avatar as="div" url="https://placekitten.com/g/450/450" />
      {/* NOTE: Need to make size dynamic */}
      {/* <Avatar as="div" size={200} url="https://placekitten.com/g/450/450" /> */}
    </div>
  ));

storiesOf('Components/Indicators/Avatar/Avatar Button', module)
  .addParameters({ReadmePath: 'react/avatar'})
  .addParameters({component: Avatar})
  .add('Light', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={'extraExtraLarge'} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size={'extraLarge'} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size={'large'} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size={'medium'} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size={'small'} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size={'extraSmall'} onClick={handleAvatarButtonClick} />
    </div>
  ))
  .add('Dark', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={'extraExtraLarge'} variant={'dark'} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size={'extraLarge'} variant={'dark'} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size={'large'} variant={'dark'} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size={'medium'} variant={'dark'} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size={'small'} variant={'dark'} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size={'extraSmall'} variant={'dark'} onClick={handleAvatarButtonClick} />
    </div>
  ))
  .add('Image', () => (
    <div className="story">
      <h3>Extra-Extra Large</h3>
      <Avatar size={'extraExtraLarge'} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Extra Large</h3>
      <Avatar size={'extraLarge'} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Large</h3>
      <Avatar size={'large'} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Medium</h3>
      <Avatar size={'medium'} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Small</h3>
      <Avatar size={'small'} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Extra Small</h3>
      <Avatar size={'extraSmall'} url={testAvatar} onClick={handleAvatarButtonClick} />
      <h3>Broken Link</h3>
      <Avatar url="/fake/path/to/image.png" onClick={handleAvatarButtonClick} />
    </div>
  ));

import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithAvatar = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Avatar name="Regina Skeltor" url={testAvatar} />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled>
          <Pill.Avatar name="Regina Skeltor" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

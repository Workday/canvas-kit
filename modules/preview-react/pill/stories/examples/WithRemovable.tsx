import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithRemovable = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill variant="removable">
          <Pill.Label>Pink Shirts</Pill.Label>
          <Pill.IconButton
            aria-label="Remove"
            onClick={() => setText('The first pill is clicked!')}
          />
        </Pill>
        <Pill variant="removable">
          <Pill.Avatar name="Avatar" url={testAvatar} />
          <Pill.Label>Carolyn Grimaldi</Pill.Label>
          <Pill.IconButton
            aria-label="Remove"
            onClick={() => setText('The second pill is clicked!')}
          />
        </Pill>
        <Pill variant="removable" disabled>
          <Pill.Label>This is a category that should not exist because it is too long</Pill.Label>
          <Pill.IconButton aria-label="Remove" />
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

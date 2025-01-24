import React from 'react';

import {Pill, pillStencil} from '@workday/canvas-kit-preview-react/pill';

import {BodyText} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const Basic = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

import React from 'react';
import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithCount = () => {
  const [text, setText] = React.useState('');
  return (
    <div>
      <div className={flexStyles}>
        <Pill onClick={() => setText('The first pill is clicked!')}>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
        <Pill disabled>
          Shoes
          <Pill.Count>30</Pill.Count>
        </Pill>
      </div>
      <BodyText size="medium">{text}</BodyText>
    </div>
  );
};

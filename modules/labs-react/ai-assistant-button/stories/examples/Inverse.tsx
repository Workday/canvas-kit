import React, {useState} from 'react';

import {AiAssistantButton} from '@workday/canvas-kit-labs-react/ai-assistant-button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const darkBackground = createStyles({
  background: system.color.bg.contrast.strong,
  padding: system.space.x8,
});

export const Inverse = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={darkBackground}>
      <AiAssistantButton variant="inverse" onClick={() => setToggled(!toggled)} toggled={toggled} />
    </div>
  );
};

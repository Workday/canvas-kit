import {useState} from 'react';

import {AiAssistantIngressButton} from '@workday/canvas-kit-labs-react/ai-assistant-ingress-button';
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
      <AiAssistantIngressButton
        variant="inverse"
        onClick={() => setToggled(!toggled)}
        aria-label={toggled ? 'Hide Assistant' : 'Show Assistant'}
        toggled={toggled}
        disabled
      />
    </div>
  );
};

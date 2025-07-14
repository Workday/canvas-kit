import {useState} from 'react';

import {AiAssistantIngressButton} from '@workday/canvas-kit-labs-react/ai-assistant-ingress-button';

export const Basic = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <AiAssistantIngressButton
      aria-label={toggled ? 'Hide Assistant' : 'Show Assistant'}
      onClick={() => setToggled(!toggled)}
      toggled={toggled}
    />
  );
};

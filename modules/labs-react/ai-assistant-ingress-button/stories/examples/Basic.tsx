import {useState} from 'react';

import {AIAssistantIngressButton} from '@workday/canvas-kit-labs-react/ai-assistant-ingress-button';

export const Basic = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <AIAssistantIngressButton
        aria-label={toggled ? 'Hide AI Assistant' : 'Show AI Assistant'}
        onClick={() => setToggled(!toggled)}
        toggled={toggled}
      />
    </div>
  );
};

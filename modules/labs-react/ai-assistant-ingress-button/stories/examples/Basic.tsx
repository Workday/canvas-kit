import {useState} from 'react';

import {AiAssistantIngressButton} from '@workday/canvas-kit-labs-react/ai-assistant-ingress-button';

export const Basic = () => {
  const [toggled, setToggled] = useState(false);
  return <AiAssistantIngressButton onClick={() => setToggled(!toggled)} toggled={toggled} />;
};

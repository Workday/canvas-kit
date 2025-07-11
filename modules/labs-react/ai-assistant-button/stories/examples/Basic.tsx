import {useState} from 'react';

import {AiAssistantButton} from '@workday/canvas-kit-labs-react/ai-assistant-button';

export const Basic = () => {
  const [toggled, setToggled] = useState(false);
  return <AiAssistantButton onClick={() => setToggled(!toggled)} toggled={toggled} />;
};

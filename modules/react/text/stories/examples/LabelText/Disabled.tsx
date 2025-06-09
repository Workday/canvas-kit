import React from 'react';
import {LabelText} from '@workday/canvas-kit-react/text';

import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const inverseBackground = createStyles({
  backgroundColor: base.blue600,
  padding: system.space.x4,
  marginTop: system.space.x4,
});

export const Disabled = () => {
  return (
    <div>
      <LabelText disabled>Disabled Label</LabelText>
      <div className={inverseBackground}>
        <LabelText disabled variant="inverse">
          Disabled Inverse Label
        </LabelText>
      </div>
    </div>
  );
};

import React from 'react';

import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const headingStyles = createStyles({
  ...system.type.body.large,
  fontWeight: system.fontWeight.bold,
  margin: 0,
});

const bodyStyles = createStyles({
  ...system.type.body.small,
  margin: 0,
});

const customDividerSpace = createStyles({
  margin: `0 0 ${system.space.x4}`,
});

export const CustomSpace = () => {
  return (
    <section>
      <h3 className={headingStyles}>Quote of the Day</h3>
      <Divider cs={customDividerSpace} />
      <p className={bodyStyles}>
        "It is not our differences that divide us. It is our inability to recognize, accept, and
        celebrate those differences." – Audre Lorde
      </p>
    </section>
  );
};

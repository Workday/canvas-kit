import React from 'react';

import {changeFocus} from '@workday/canvas-kit-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const flexStyles = createStyles({
  flexDirection: 'column',
  gap: system.space.x3,
  alignItems: 'flex-start',
});

export const RefForwarding = () => {
  const bannerRef = React.useRef<HTMLButtonElement>(null);

  const focusBanner = () => {
    changeFocus(bannerRef.current);
  };

  return (
    <Flex cs={flexStyles}>
      <Banner ref={bannerRef}>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
      <SecondaryButton onClick={focusBanner}>Focus Banner</SecondaryButton>
    </Flex>
  );
};

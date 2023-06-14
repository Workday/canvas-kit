import React from 'react';

import {changeFocus} from '@workday/canvas-kit-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const RefForwarding = () => {
  const bannerRef = React.useRef<HTMLButtonElement>(null);

  const focusBanner = () => {
    changeFocus(bannerRef.current);
  };

  return (
    <Flex flexDirection="column" gap="xs" alignItems="flex-start">
      <Banner ref={bannerRef}>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
      <SecondaryButton onClick={focusBanner}>Focus Banner</SecondaryButton>
    </Flex>
  );
};

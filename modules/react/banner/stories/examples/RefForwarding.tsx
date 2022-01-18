import React from 'react';

import {changeFocus} from '@workday/canvas-kit-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';
import {SecondaryButton} from '../../..';
import {VStack} from '@workday/canvas-kit-labs-react';

export const RefForwarding = () => {
  const bannerRef = React.useRef<HTMLButtonElement>(null);

  const focusBanner = () => {
    changeFocus(bannerRef.current);
  };

  return (
    <VStack spacing="xs" alignItems="flex-start">
      <Banner ref={bannerRef}>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
      <SecondaryButton onClick={focusBanner}>Focus Banner</SecondaryButton>
    </VStack>
  );
};

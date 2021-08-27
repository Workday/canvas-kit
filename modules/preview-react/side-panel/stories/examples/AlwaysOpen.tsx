/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-labs-react/layout';
import {useThemeRTL} from '@workday/canvas-kit-labs-react/common';

export const AlwaysOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  const {themeRTL} = useThemeRTL();
  const iconStyles = themeRTL({
    marginRight: space.s,
  });

  return (
    <Flex height={320}>
      <SidePanel {...panelProps}>
        <Flex alignItems="center" paddingY="s" paddingX="xs">
          <AccentIcon css={iconStyles} icon={rocketIcon} />
          <h3
            css={{
              ...type.levels.body.large,
              color: colors.licorice500,
              fontWeight: type.properties.fontWeights.bold,
            }}
            {...labelProps}
          >
            Tasks Panel
          </h3>
        </Flex>
      </SidePanel>
    </Flex>
  );
};

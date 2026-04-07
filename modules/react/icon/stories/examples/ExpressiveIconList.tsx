import React from 'react';

import * as CanvasIcons from '@workday/canvas-expressive-icons-web';
import {ExpressiveIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Subtext} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const ImportedIcons = Object.keys(CanvasIcons);
const allIcons = ImportedIcons.filter(icon => !icon.startsWith('Canvas') && icon.endsWith('Icon'));

const styleOverrides = {
  parentContainer: createStyles({
    flexDirection: 'column',
    alignItems: 'center',
    gap: system.gap.lg,
  }),
  firstChildContainer: createStyles({
    flexWrap: 'wrap',
  }),
  secondChildContainer: createStyles({
    alignItems: 'center',
    width: `max(320px,20%)`,
    flexDirection: 'row',
    gap: px2rem(12),
    padding: system.padding.sm,
  }),
  text: createStyles({
    fontFamily: system.fontFamily.mono,
    padding: system.padding.xxs,
    backgroundColor: system.color.surface.alt.default,
    borderRadius: system.shape.sm,
  }),
};

export const ExpressiveIconList = () => {
  const [value, setValue] = React.useState('');

  const handleSearch = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <TextInput onKeyDown={e => handleSearch(e)} placeholder="Search for an icon" />
      <Flex cs={styleOverrides.firstChildContainer}>
        {allIcons
          .filter(icon => {
            if (value === '') {
              return 'No icons found';
            } else if (icon.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
              return icon;
            }
          })
          .map((singleIcon, index) => {
            return (
              <Flex cs={styleOverrides.secondChildContainer} key={index}>
                <ExpressiveIcon icon={CanvasIcons[singleIcon]} />
                <Subtext as="code" size="large" cs={styleOverrides.text}>
                  {singleIcon}
                </Subtext>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

import React from 'react';

import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Subtext} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import * as CanvasIcons from '@workday/canvas-system-icons-web';
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

const getJSFallback = (icon: string) => {
  const [_, __, first, ...rest] = icon.replace('.svg', '').split('-');
  return first + rest.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Icon';
};

export const SystemIconList = () => {
  const [value, setValue] = React.useState('');

  const handleSearch = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <TextInput onKeyDown={e => handleSearch(e)} placeholder="Search for an icon" />
      <Subtext as="code" size="large" cs={styleOverrides.text}>
        D - deprecated icon; {'\u2192'} - replacement
      </Subtext>
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
            const icon = CanvasIcons[singleIcon];

            return (
              <Flex cs={styleOverrides.secondChildContainer} key={index}>
                <SystemIcon icon={icon} />
                <Subtext as="code" size="large" cs={styleOverrides.text}>
                  {singleIcon} {icon.fallback ? `(D) \u2192 ${getJSFallback(icon.fallback)}` : ''}
                </Subtext>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

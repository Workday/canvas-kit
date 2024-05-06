import React from 'react';
import * as CanvasAccenttIcons from '@workday/canvas-accent-icons-web';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const ImportedIcons = Object.keys(CanvasAccenttIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasAccenttIcons');

const styleOverrides = {
  parentContainer: createStyles({
    flexDirection: 'column',
    alignItems: 'center',
    gap: system.space.x6,
  }),
  firstChildContainer: createStyles({
    flexWrap: 'wrap',
  }),
  secondChildContainer: createStyles({
    alignItems: 'center',
    width: `max(320px,20%)`,
    flexDirection: 'row',
    gap: system.space.x3,
    padding: system.space.x3,
  }),
};

export const AccentIconList = () => {
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
                <Box>
                  <AccentIcon icon={CanvasAccenttIcons[singleIcon]} />
                </Box>
                <Box>{singleIcon}</Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

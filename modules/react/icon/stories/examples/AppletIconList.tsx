import React from 'react';
import * as CanvasAppletIcons from '@workday/canvas-applet-icons-web';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {AppletIcon} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';

const ImportedIcons = Object.keys(CanvasAppletIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasAppletIcons');

export const AppletIconList = () => {
  const [value, setValue] = React.useState('');

  const handleSearch = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Flex flexDirection="column" alignItems="center" gap="m">
      <TextInput onKeyDown={e => handleSearch(e)} placeholder="Search for an icon" />
      <Flex flexWrap="wrap">
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
              <Flex
                alignItems="center"
                width={'max(320px,20%)'}
                flexDirection="row"
                gap="xs"
                padding="xs"
                key={index}
              >
                <Box>
                  <AppletIcon icon={CanvasAppletIcons[singleIcon]} />
                </Box>
                <Box>{singleIcon}</Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

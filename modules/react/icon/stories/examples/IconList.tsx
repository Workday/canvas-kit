import React from 'react';
import * as CanvasIcons from '@workday/canvas-system-icons-web';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';

const ImportedIcons = Object.keys(CanvasIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasSystemIcons');
export const IconList = () => {
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
          .map(singleIcon => {
            return (
              <Flex
                alignItems="center"
                width={'max(320px,20%)'}
                flexDirection="row"
                gap="xs"
                padding="xs"
              >
                <Box>
                  <SystemIcon icon={CanvasIcons[singleIcon]} />
                </Box>
                <Box>{singleIcon}</Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

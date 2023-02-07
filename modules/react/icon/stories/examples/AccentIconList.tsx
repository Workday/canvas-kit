import React from 'react';
import * as CanvasAccenttIcons from '@workday/canvas-accent-icons-web';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';

const ImportedIcons = Object.keys(CanvasAccenttIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasAccenttIcons');

export const AccentIconList = () => {
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

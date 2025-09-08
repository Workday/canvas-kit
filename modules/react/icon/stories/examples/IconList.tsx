import React from 'react';
import * as CanvasIcons from '@workday/canvas-system-icons-web';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';

import {system} from '@workday/canvas-tokens-web';

const ImportedIcons = Object.keys(CanvasIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasSystemIcons');

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

export const SystemIconList = () => {
  const [value, setValue] = React.useState('');
  const [fill, setFill] = React.useState('');
  const [accent, setAccent] = React.useState('');
  const [background, setBackground] = React.useState('');

  const [iconColors, setIconColors] = React.useState({
    fill: '',
    accent: '',
    background: '',
  });

  const handleSearch = (e: any) => {
    setValue(e.target.value);
  };

  const handleValidColorChange = (layerType: 'fill' | 'accent' | 'background', value: string) => {
    setIconColors({
      ...iconColors,
      [layerType]: value,
    });
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <TextInput grow onKeyDown={e => handleSearch(e)} placeholder="Search for an icon" />
      <Flex gap="s">
        <FormField>
          <FormField.Label>Fill</FormField.Label>
          <FormField.Input
            as={ColorInput}
            value={fill}
            onChange={event => setFill(event.target.value)}
            onValidColorChange={color => handleValidColorChange('fill', color)}
          />
        </FormField>
        <FormField>
          <FormField.Label>Accent</FormField.Label>
          <FormField.Input
            as={ColorInput}
            value={accent}
            onChange={event => setAccent(event.target.value)}
            onValidColorChange={color => handleValidColorChange('accent', color)}
          />
        </FormField>
        <FormField>
          <FormField.Label>Background</FormField.Label>
          <FormField.Input
            as={ColorInput}
            value={background}
            onChange={event => setBackground(event.target.value)}
            onValidColorChange={color => handleValidColorChange('background', color)}
          />
        </FormField>
      </Flex>
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
                  <SystemIcon
                    icon={CanvasIcons[singleIcon]}
                    color={iconColors.fill}
                    accent={iconColors.accent}
                    background={iconColors.background}
                  />
                </Box>
                <Box>{singleIcon}</Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

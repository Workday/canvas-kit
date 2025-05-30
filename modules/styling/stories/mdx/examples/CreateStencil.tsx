import * as React from 'react';
import {createStencil} from '@workday/canvas-kit-styling';
import {Card} from '@workday/canvas-kit-react/card';
import {system} from '@workday/canvas-tokens-web';
import {Switch} from '@workday/canvas-kit-react/switch';
import {FormField} from '@workday/canvas-kit-react/form-field';

const themedCardStencil = createStencil({
  vars: {
    // Create CSS variables for the color of the header
    headerColor: '',
  },
  parts: {
    // Allows for styling a sub element of the component that may not be exposed through the API
    header: 'themed-card-header',
    body: 'themed-card-body',
  },
  base: ({headerPart, headerColor}) => ({
    padding: system.space.x4,
    boxShadow: system.depth[2],
    backgroundColor: system.color.bg.default,
    color: system.color.text.default,
    // Targets the header part via [data-part="themed-card-header"]"]
    [headerPart]: {
      color: headerColor,
    },
  }),
  modifiers: {
    isDarkTheme: {
      // If the prop `isDarkTheme` is true, style the component and it's parts
      true: ({headerPart, bodyPart}) => ({
        backgroundColor: system.color.bg.contrast.default,
        color: system.color.text.inverse,
        [`${headerPart}, ${bodyPart}`]: {
          color: system.color.text.inverse,
        },
      }),
    },
  },
});

export const CreateStencil = ({isDarkTheme, headerColor, elemProps}) => {
  const [darkTheme, setIsDarkTheme] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkTheme(event.target.checked);
  };
  return (
    <div>
      <FormField>
        <FormField.Label>Toggle Dark Theme</FormField.Label>
        <FormField.Input as={Switch} onChange={handleChange} checked={darkTheme} />
      </FormField>

      <Card cs={themedCardStencil({isDarkTheme: darkTheme, headerColor})} {...elemProps}>
        <Card.Heading {...themedCardStencil.parts.header}>Canvas Supreme</Card.Heading>
        <Card.Body {...themedCardStencil.parts.body}>
          Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
          onions, and oregano.
        </Card.Body>
      </Card>
    </div>
  );
};

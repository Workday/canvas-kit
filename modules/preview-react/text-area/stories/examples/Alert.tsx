import React from 'react';
import {TextArea} from '@workday/canvas-kit-preview-react/text-area';
import {space, colors} from '@workday/canvas-kit-react/tokens';
import {Text} from '@workday/canvas-kit-react/text';
import {textInputStencil} from '@workday/canvas-kit-react/text-input';
import {brand, system} from '@workday/canvas-tokens-web';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';

const alertStyles = createStencil({
  extends: textInputStencil,
  base: {},
  modifiers: {
    errorRing: {
      alert: {
        border: `1px solid ${cssVar(brand.common.alertOuter)}`,
        boxShadow: `inset 0 0 0 1px ${cssVar(brand.common.alertInner)}`,
      },
      error: {
        border: `1px solid ${cssVar(brand.common.errorInner)}`,
        boxShadow: `inset 0 0 0 1px ${cssVar(brand.common.errorInner)}`,
        [brand.common.errorInner]: system.color.border.critical.default,
      },
      success: {
        borderColor: brand.success.base,
        boxShadow: `inset 0 0 0 1px ${cssVar(brand.success.base)}`,
      },
    },
  },
});

export const Alert = () => {
  const [value, setValue] = React.useState('Hello');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value.slice(0, 10));
  };

  const hintColor =
    value.length < 3
      ? colors.greenApple600
      : value.length < 7
      ? colors.blackPepper300
      : colors.cinnamon500;

  return (
    <TextArea orientation="vertical">
      <TextArea.Label>Add a comment</TextArea.Label>
      <TextArea.Field
        cs={alertStyles({
          errorRing: value.length < 3 ? 'success' : value.length < 7 ? 'alert' : 'error',
        })}
        onChange={handleChange}
        value={value}
      />
      <TextArea.Hint paddingTop={space.xxs}>
        <strong>Character Limit: </strong>
        <Text color={hintColor}>{10 - value.length} Left</Text>
      </TextArea.Hint>
    </TextArea>
  );
};

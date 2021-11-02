/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {styled} from '@workday/canvas-kit-react/common';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {CSSProperties, space, colors} from '@workday/canvas-kit-react/tokens';

const StyledField = styled(TextArea.Field)<{alertStyles?: CSSProperties}>(
  ({alertStyles}) => alertStyles
);

export const Alert = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value.slice(0, 10));
  };

  const alertStyles = useThemedRing(
    value.length < 3 ? undefined : value.length < 7 ? 'alert' : 'error'
  );

  const hintColor = value.length < 3 ? colors.greenApple600 : value.length < 7 ? colors.cantaloupe600 : colors.cinnamon500

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextArea>
        <TextArea.Label>Add a comment</TextArea.Label>
        <StyledField alertStyles={alertStyles} onChange={handleChange} value={value} />
        <TextArea.Hint paddingTop={space.xxs}>
          <strong>Character Limit: </strong>
          <span css={{color: hintColor}}>{10 - value.length} Left</span>
        </TextArea.Hint>
      </TextArea>
    </VStack>
  );
};

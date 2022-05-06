import React from 'react';

import {
  Text as TextComponent,
  BodyText,
  Subtext as SubtextComponent,
  Heading as HeadingComponent,
  Title as TitleComponent,
} from '@workday/canvas-kit-preview-react/text';
import {type} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react';

export default {
  title: 'Preview/Text/React',
  component: TextComponent,
};

export const Text = () => (
  <>
    <TextComponent fontSize={10} fontWeight="regular" textAlign="center" fontFamily="monospace">
      Text
    </TextComponent>
    <TextComponent as={HeadingComponent} size="small" color="blueberry300">
      Error text
    </TextComponent>
    <Box position="absolute">
      <TextComponent {...type.levels.subtext.large}>Text with type passed</TextComponent>
    </Box>
  </>
);

export const Body = () => (
  <>
    <BodyText size="large">Large Body Text</BodyText>
    <BodyText size="medium">Medium Body Text</BodyText>
    <BodyText size="small">Small Body Text</BodyText>
  </>
);

export const Subtext = () => (
  <>
    <SubtextComponent size="large">Large Subtext</SubtextComponent>
    <SubtextComponent size="medium">Medium Subtext</SubtextComponent>
    <SubtextComponent size="small">Small Subtext</SubtextComponent>
  </>
);

export const Heading = () => (
  <>
    <HeadingComponent as="h4" size="large">
      Large Subtext
    </HeadingComponent>
    <HeadingComponent as="h5" size="medium">
      Medium Subtext
    </HeadingComponent>
    <HeadingComponent as="h6" size="small">
      Small Subtext
    </HeadingComponent>
  </>
);

export const Title = () => (
  <>
    <TitleComponent as="h1" size="large">
      Large Title Text
    </TitleComponent>
    <TitleComponent as="h2" size="medium">
      Medium Title Text
    </TitleComponent>
    <TitleComponent as="h3" size="small">
      Small Title Text
    </TitleComponent>
  </>
);

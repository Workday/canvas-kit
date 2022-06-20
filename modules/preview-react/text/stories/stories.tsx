import React from 'react';

import {
  Label as LabelText,
  Text as TextComponent,
  TypeBodyLevel as BodyComponent,
  TypeHeadingLevel as HeadingComponent,
  TypeSubtextLevel as SubtextComponent,
  TypeTitleLevel as TitleComponent,
} from '@workday/canvas-kit-preview-react/text';
// type changes no need
import {type} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react';

export default {
  title: 'Preview/Text/React',
  component: TextComponent,
};

export const Text = () => (
  <>
    <TextComponent
      as="p"
      fontSize={14}
      fontWeight="regular"
      textAlign="center"
      fontFamily="monospace"
    >
      Centerized Monospace Text
    </TextComponent>
    <TextComponent {...type.levels.subtext.large}>Text with type token passed</TextComponent>
    <Box {...type.levels.subtext.large} color="hint">
      <TextComponent as="p">Text with inherenced styles</TextComponent>
    </Box>
  </>
);

export const Body = () => (
  <>
    <BodyComponent size="large">Large Body Text</BodyComponent>
    <BodyComponent size="medium">Medium Body Text</BodyComponent>
    <BodyComponent size="small">Small Body Text</BodyComponent>
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
      Large Heading Text
    </HeadingComponent>
    <HeadingComponent as="h5" size="medium">
      Medium Heading Text
    </HeadingComponent>
    <HeadingComponent as="h6" size="small">
      Small Heading Text
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

export const Label = () => (
  <>
    <LabelText as="h1" size="large">
      Label
    </LabelText>
    <LabelText as="h2" hasPointerCursor>
      Label with pointer
    </LabelText>
    <LabelText as="h3" disabled>
      Disabled Label
    </LabelText>
  </>
);

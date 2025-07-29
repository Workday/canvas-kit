import * as React from 'react';
import styled from '@emotion/styled';
import {jsx} from '@emotion/react';

import {Flex} from '@workday/canvas-kit-react/layout';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {base} from '@workday/canvas-tokens-web';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';

const backgroundColors = {
  cssProp: cssVar(base.orange500),
  styledComponent: cssVar(base.green500),
  styleProps: cssVar(base.magenta500),
  createStyles: cssVar(base.purple500),
};

const StyledPrimaryButton = styled(PrimaryButton)({
  backgroundColor: backgroundColors.styledComponent,
});

const styles = createStyles({
  backgroundColor: backgroundColors.createStyles,
});

const CSSProp = () => (
  <div
    style={{
      color: 'white',
      padding: '0 4px',
      height: 40,
      width: 100,
      backgroundColor: backgroundColors.cssProp,
    }}
  >
    CSS Prop
  </div>
);
const StyledComponent = () => (
  <div
    style={{
      color: 'white',
      padding: '0 4px',
      height: 40,
      width: 100,
      backgroundColor: backgroundColors.styledComponent,
    }}
  >
    Styled Component
  </div>
);
const CreateStyles = () => (
  <div
    style={{
      color: 'white',
      padding: '0 4px',
      height: 40,
      width: 100,
      backgroundColor: backgroundColors.createStyles,
    }}
  >
    createStyles
  </div>
);
const StyleProps = () => (
  <div
    style={{
      color: 'white',
      padding: '0 4px',
      height: 40,
      width: 100,
      backgroundColor: backgroundColors.styleProps,
    }}
  >
    Style Props
  </div>
);

// We use this object and cast to `{}` to keep TypeScript happy. Emotion extends the JSX interface
// to include the `css` prop, but the `jsx` function type doesn't accept the `css` prop. Casting to
// an empty object keeps TypeScript happy and the `css` prop is valid at runtime.
const cssProp = {css: {backgroundColor: backgroundColors.cssProp}} as {};

export const StylingOverrides = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh" gap="s">
      <Flex flexDirection="column" gap="s">
        <h2>Buttons</h2>
        <Flex flexDirection="row" gap="s">
          <PrimaryButton cs={styles}>createStyles</PrimaryButton>
          {jsx(PrimaryButton, {...cssProp}, 'CSS Prop')}
          <StyledPrimaryButton>Styled Component</StyledPrimaryButton>
          <PrimaryButton backgroundColor={backgroundColors.styleProps}>Style Props</PrimaryButton>
        </Flex>
        <div>
          {jsx(
            PrimaryButton,
            {
              ...cssProp,
              cs: styles,
            },
            'createStyles + CSS Prop'
          )}
        </div>
        <div>
          <StyledPrimaryButton cs={styles}>createStyles + Styled Component</StyledPrimaryButton>
        </div>
        <div>
          <PrimaryButton cs={styles} backgroundColor={backgroundColors.styleProps}>
            createStyles + Style Props
          </PrimaryButton>
        </div>
        <div>
          <StyledPrimaryButton backgroundColor={backgroundColors.styleProps} cs={styles}>
            createStyles + Styled Component + Style Props
          </StyledPrimaryButton>
        </div>
        <div>
          {jsx(
            StyledPrimaryButton,
            {
              ...cssProp,
              backgroundColor: backgroundColors.styleProps,
              cs: styles,
            },
            'createStyles + CSS Prop + Styled Component + Style Props'
          )}
        </div>
        <div>{jsx(StyledPrimaryButton, {...cssProp}, 'CSS Prop + Styled Component')}</div>
        <div>
          {jsx(
            PrimaryButton,
            {
              ...cssProp,
              backgroundColor: backgroundColors.styleProps,
            },
            'CSS Prop + Style Props'
          )}
        </div>
        <div>
          <StyledPrimaryButton backgroundColor={backgroundColors.styleProps}>
            Styled Component + Style Props
          </StyledPrimaryButton>
        </div>
      </Flex>
      <div>
        <p>Legend:</p>
        <CreateStyles />
        <CSSProp />
        <StyledComponent />
        <StyleProps />
      </div>
      <p>
        Style Precedence: <strong>createStyles</strong> &gt; <strong>CSS Props</strong> &gt;{' '}
        <strong>Styled Component</strong> &gt; <strong>Style Props</strong>
      </p>
    </Flex>
  );
};

import * as React from 'react';
import styled from '@emotion/styled';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {DeprecatedHeaderHeight, DeprecatedHeaderTheme} from '../shared/types';
import chroma from 'chroma-js';
import {dubLogoWhite, dubLogoBlue} from '@workday/canvas-kit-react/common';

export type DubTitleProps = {
  /**
   * The theme of the DubLogoTitle. Accepts `White`, `Blue`, or `Transparent`.
   * @default DeprecatedHeaderTheme.White
   */
  themeColor?: DeprecatedHeaderTheme;
  /**
   * The text of the DubLogoTitle. Not used if `brand` is provided.
   */
  title?: string;
  /**
   * The background color/gradient behind the DubLogoTitle logo.
   */
  bgColor?: string;
};

const LockupContainer = styled('div')({
  display: 'inline-block',
});

const Lockup = styled('div')<DubTitleProps>(
  {
    display: 'flex',
    alignItems: 'center',
    height: DeprecatedHeaderHeight.Small,
    paddingLeft: space.m,
  },
  ({bgColor}) => ({
    background: bgColor ? bgColor : 'none',
  })
);

const Title = styled('h3')<DubTitleProps>(
  {
    fontSize: '20px',
    fontWeight: 400,
    padding: `${space.xxs} ${space.s}`,
    paddingRight: space.l,
    marginLeft: space.s,
    whiteSpace: 'nowrap',
  },
  ({themeColor}) => ({
    color:
      themeColor === DeprecatedHeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
    borderLeft: `1px solid ${
      themeColor === DeprecatedHeaderTheme.White
        ? colors.soap400
        : chroma(colors.frenchVanilla100)
            .alpha(0.3)
            .css()
    }`,
  })
);

const DubLogo = styled('div')<DubTitleProps>({
  lineHeight: 0,
});

/**
 * ### Deprecated Dub Logo Title
 *
 * As of Canvas Kit v6, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export class DeprecatedDubLogoTitle extends React.Component<DubTitleProps> {
  componentDidMount() {
    console.warn(
      `DubLogoTitle is being deprecated and will be removed in Canvas Kit V7.\n
      For more information, please see the V6 migration guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page
      `
    );
  }
  render() {
    const {themeColor = DeprecatedHeaderTheme.White, title} = this.props;
    return (
      <LockupContainer>
        <Lockup {...this.props}>
          <DubLogo
            {...this.props}
            dangerouslySetInnerHTML={{
              __html: themeColor === DeprecatedHeaderTheme.White ? dubLogoBlue : dubLogoWhite,
            }}
          />
          {title && <Title {...this.props}>{title}</Title>}
        </Lockup>
      </LockupContainer>
    );
  }
}

import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {HeaderHeight, HeaderTheme} from '../shared/types';
import chroma from 'chroma-js';
import {dubLogoWhite, dubLogoBlue} from '@workday/canvas-kit-react-common'; // TODO: Replace with real SVGs from @workday/brand-assets

export type DubTitleProps = {
  /**
   * A HeaderTheme enum indicating which theme to use (White, Blue or Transparent)
   */
  themeColor: HeaderTheme;
  /**
   * The title to display in the header. Not used if `brand` is provided
   */
  title?: string;
  /**
   * The background color/gradient to be used behind the logo
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
    height: HeaderHeight.Small,
    paddingLeft: spacing.m,
  },
  ({bgColor}) => ({
    background: bgColor ? bgColor : 'none',
  })
);

const Title = styled('h3')<DubTitleProps>(
  {
    fontSize: '20px',
    fontWeight: 400,
    padding: `${spacing.xxs} ${spacing.s}`,
    paddingRight: spacing.l,
    marginLeft: spacing.s,
    'white-space': 'nowrap',
  },
  ({themeColor}) => ({
    color: themeColor === HeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
    borderLeft: `1px solid ${
      themeColor === HeaderTheme.White
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

export class DubLogoTitle extends React.Component<DubTitleProps> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
  };

  render() {
    return (
      <LockupContainer>
        <Lockup {...this.props}>
          <DubLogo
            {...this.props}
            dangerouslySetInnerHTML={{
              __html: this.props.themeColor === HeaderTheme.White ? dubLogoBlue : dubLogoWhite,
            }}
          />
          {this.props.title && <Title {...this.props}>{this.props.title}</Title>}
        </Lockup>
      </LockupContainer>
    );
  }
}

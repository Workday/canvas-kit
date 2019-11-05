import * as React from 'react';
import styled from '@emotion/styled';
import {HeaderHeight, HeaderTheme, HeaderVariant} from '../shared/types';
import {miniWdayLogoBlue, wdayLogoWhite, wdayLogoBlue} from '@workday/canvas-kit-react-common'; // TODO: Replace with real SVGs from @workday/brand-assets
import {colors, spacing} from '@workday/canvas-kit-react-core';
import chroma from 'chroma-js';

export type WorkdayLogoTitleProps = {
  /**
   * A HeaderTheme enum indicating which theme to use (White, Blue or Transparent)
   */
  themeColor: HeaderTheme;
  /**
   * The title to display in the header. Not used if `brand` is provided
   */
  title?: string;
  variant?: HeaderVariant;
};

const LockupContainer = styled('div')({
  display: 'inline-block',
});

const Lockup = styled('div')<WorkdayLogoTitleProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({variant}) => ({
    height: variant === HeaderVariant.Global ? HeaderHeight.Small : HeaderHeight.Large,
  })
);

const Title = styled('h3')<WorkdayLogoTitleProps>(
  {
    fontSize: '20px',
    fontWeight: 400,
    marginLeft: spacing.l,
    padding: spacing.s,
    paddingLeft: spacing.m,
    paddingRight: spacing.l,
    whiteSpace: 'nowrap',
    display: 'initial',
  },
  ({themeColor}) => ({
    color: themeColor === HeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
    borderLeft: `1px solid ${
      themeColor === HeaderTheme.White
        ? colors.soap400
        : chroma(colors.soap400)
            .alpha(0.4)
            .css()
    }`,
  })
);

const WorkdayLogo = styled('span')<WorkdayLogoTitleProps>({
  paddingLeft: spacing.m,
  lineHeight: 0,
});

export class WorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  static defaultProps = {
    themeColor: HeaderTheme.White,
    title: '',
  };

  public render() {
    const {themeColor, title, variant, ...elemProps} = this.props;

    return (
      <LockupContainer>
        <Lockup {...this.props} {...elemProps}>
          <WorkdayLogo
            {...this.props}
            dangerouslySetInnerHTML={{
              __html:
                this.props.themeColor === HeaderTheme.White
                  ? this.props.variant === HeaderVariant.Global
                    ? miniWdayLogoBlue
                    : wdayLogoBlue
                  : wdayLogoWhite,
            }}
          />
          {this.props.title && <Title {...this.props}>{this.props.title}</Title>}
        </Lockup>
      </LockupContainer>
    );
  }
}

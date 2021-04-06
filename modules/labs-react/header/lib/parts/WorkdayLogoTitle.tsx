import * as React from 'react';
import styled from '@emotion/styled';
import {HeaderHeight, HeaderTheme, HeaderVariant} from '../shared/types';
import {miniWdayLogoBlue, wdayLogoWhite, wdayLogoBlue} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/core';
import chroma from 'chroma-js';

export type WorkdayLogoTitleProps = {
  /**
   * The theme of the WorkdayLogoTitle. Accepts `White`, `Blue`, or `Transparent`.
   * @default HeaderTheme.White
   */
  themeColor?: HeaderTheme;
  /**
   * The text of the WorkdayLogoTitle. Not used if `brand` is provided.
   * @default ''
   */
  title?: string;
  /**
   * The variant of the WorkdayLogoTitle.
   */
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
    marginLeft: space.l,
    padding: space.s,
    paddingLeft: space.m,
    paddingRight: space.l,
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
  paddingLeft: space.m,
  lineHeight: 0,
});

export class WorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  public render() {
    const {themeColor = HeaderTheme.White, title = '', variant, ...elemProps} = this.props;

    return (
      <LockupContainer>
        <Lockup {...this.props} {...elemProps}>
          <WorkdayLogo
            {...this.props}
            dangerouslySetInnerHTML={{
              __html:
                themeColor === HeaderTheme.White
                  ? variant === HeaderVariant.Global
                    ? miniWdayLogoBlue
                    : wdayLogoBlue
                  : wdayLogoWhite,
            }}
          />
          {title && <Title {...this.props}>{title}</Title>}
        </Lockup>
      </LockupContainer>
    );
  }
}

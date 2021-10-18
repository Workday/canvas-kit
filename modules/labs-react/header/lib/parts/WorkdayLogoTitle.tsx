import * as React from 'react';
import styled from '@emotion/styled';
import {
  DeprecatedHeaderHeight,
  DeprecatedHeaderTheme,
  DeprecatedHeaderVariant,
} from '../shared/types';
import {miniWdayLogoBlue, wdayLogoWhite, wdayLogoBlue} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import chroma from 'chroma-js';

export type WorkdayLogoTitleProps = {
  /**
   * The theme of the WorkdayLogoTitle. Accepts `White`, `Blue`, or `Transparent`.
   * @default DeprecatedHeaderTheme.White
   */
  themeColor?: DeprecatedHeaderTheme;
  /**
   * The text of the WorkdayLogoTitle. Not used if `brand` is provided.
   * @default ''
   */
  title?: string;
  /**
   * The variant of the WorkdayLogoTitle.
   */
  variant?: DeprecatedHeaderVariant;
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
    height:
      variant === DeprecatedHeaderVariant.Global
        ? DeprecatedHeaderHeight.Small
        : DeprecatedHeaderHeight.Large,
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
    color:
      themeColor === DeprecatedHeaderTheme.White ? colors.blueberry500 : colors.frenchVanilla100,
    borderLeft: `1px solid ${
      themeColor === DeprecatedHeaderTheme.White
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

/**
 * ### Deprecated Workday Logo Title
 *
 * As of Canvas Kit v6, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export class DeprecatedWorkdayLogoTitle extends React.Component<WorkdayLogoTitleProps> {
  componentDidMount() {
    console.warn(
      `WorkdayLogoTitle is being deprecated and will be removed in Canvas Kit V7.\n
      For more information, please see the V6 migration guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page
      `
    );
  }
  public render() {
    const {
      themeColor = DeprecatedHeaderTheme.White,
      title = '',
      variant,
      ...elemProps
    } = this.props;

    return (
      <LockupContainer>
        <Lockup {...this.props} {...elemProps}>
          <WorkdayLogo
            {...this.props}
            dangerouslySetInnerHTML={{
              __html:
                themeColor === DeprecatedHeaderTheme.White
                  ? variant === DeprecatedHeaderVariant.Global
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

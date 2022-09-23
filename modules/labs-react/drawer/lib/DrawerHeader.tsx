import * as React from 'react';
import styled from '@emotion/styled';
import {colors, space, CanvasColor, typeColors} from '@workday/canvas-kit-react/tokens';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Text} from '@workday/canvas-kit-react/text';
import {xIcon} from '@workday/canvas-system-icons-web';

/**
 * ### Deprecated Drawer Header Props
 *
 * As of Canvas Kit v8, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */

export interface DeprecatedDrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The text of the DeprecatedDrawerHeader. This text will also be applied as the `title` attribute of the header element.
   */
  title?: string;
  /**
   * The function called when the DeprecatedDrawerHeader close button is clicked.
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * The `aria-label` for the DrawHeader close button. Useful for i18n.
   * @default Close
   */
  closeIconAriaLabel?: string;
  /**
   * The background color of the DeprecatedDrawerHeader.
   */
  headerColor?: CanvasColor | string;
  /**
   * The border color of the DeprecatedDrawerHeader. This should match something close to `headerColor`.
   */
  borderColor?: CanvasColor | string;
  /**
   * If true, render the icon and header in white. Useful for preserving contrast with a dark `headerColor`.
   * @default false
   */
  inverse?: boolean;
  /**
   * The unique id of the DeprecatedDrawerHeader for accessibility.
   */
  id?: string;
}

const headerHeight = 56;

const HeaderContainer = styled('div')<
  Pick<DeprecatedDrawerHeaderProps, 'headerColor' | 'borderColor'>
>(
  {
    height: headerHeight,
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${space.s}`,
    justifyContent: 'space-between',
  },
  ({borderColor}) => ({
    borderBottom: `1px solid ${borderColor}`,
  }),
  ({headerColor}) => ({
    backgroundColor: headerColor,
  })
);

const CloseButton = styled(TertiaryButton)({
  margin: '-8px', // for inverse and plain button, we always want this margin
});

/**
 * ### Deprecated Drawer Header
 *
 * As of Canvas Kit v8, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */

export class DeprecatedDrawerHeader extends React.Component<DeprecatedDrawerHeaderProps, {}> {
  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V9.\n
      For more information, please see the V8 upgrade guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page
      `
    );
  }

  public render() {
    const {
      closeIconAriaLabel = 'Close',
      headerColor = colors.soap100,
      borderColor = colors.soap500,
      inverse = false,
      onClose,
      title,
      id,
      ...elemProps
    } = this.props;
    const variant = inverse ? 'inverse' : undefined;

    return (
      <HeaderContainer borderColor={borderColor} {...elemProps} headerColor={headerColor}>
        <Text
          as="h4"
          typeLevel="body.small"
          title={title}
          fontWeight="bold"
          color={typeColors.heading}
          variant={variant}
          paddingInlineEnd="xxxs"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {title}
        </Text>
        {onClose && closeIconAriaLabel && (
          <CloseButton
            variant={variant}
            onClick={onClose}
            aria-label={closeIconAriaLabel}
            icon={xIcon}
          />
        )}
      </HeaderContainer>
    );
  }
}

import * as React from 'react';
import styled from 'react-emotion';
import {focusRing, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {css} from 'emotion';
import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {pickDarkOrLightColor, expandHex} from './ColorUtils';

export interface ColorInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    GrowthBehavior {
  value: string;
  inputRef?: React.Ref<HTMLInputElement>;
  showCheck?: boolean;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
  onValidColorChange?: (color: string) => void;
}

const swatchTileSpacing = spacing.xxs;
const swatchTileSize = 20;
const swatchCheckIconSpacing = 8;
const colorInputWidth = 116;

const CustomHexInput = styled('input')<Pick<ColorInputProps, 'disabled' | 'grow'>>(
  ({grow}) => ({
    margin: spacing.zero,
    height: spacing.xl,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    borderColor: 'transparent',
    borderRadius: '4px',
    border: `1px solid ${colors.frenchVanilla500}`,
    boxSizing: 'border-box',
    paddingLeft: '46px',
    paddingRight: spacing.s,
    width: grow ? '100%' : colorInputWidth,
    ...type.body,
    '&:not([disabled]):focus': {
      outline: 'none',
      borderColor: 'transparent',
      ...focusRing(2, 0, true, true),
    },
  }),
  ({disabled}) => ({
    backgroundColor: disabled ? colors.soap200 : '',
  })
);

const ColorInputContainer = styled('div')({
  display: 'flex',
  position: 'relative',
});

const PoundSignPrefix = styled('span')({
  position: 'absolute',
  left: 36,
  top: 10,
  ...type.body,
  ...type.variant.hint,
});

const SwatchTile = styled('div')({
  position: 'absolute',
  cursor: 'pointer',
  height: swatchTileSize,
  width: swatchTileSize,
  top: spacing.zero,
  bottom: spacing.zero,
  left: swatchTileSpacing,
  margin: 'auto',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
  pointerEvents: 'none',
  borderRadius: '2px',
});

const swatchCheckIcon = css({
  position: 'absolute',
  left: 6,
  top: swatchCheckIconSpacing,
});

export default class ColorInput extends React.Component<ColorInputProps> {
  public render() {
    const {showCheck, value, onChange, onValidColorChange, inputRef, ...otherProps} = this.props;
    const formattedValue = this.formatValue(value);

    return (
      <ColorInputContainer>
        <PoundSignPrefix>#</PoundSignPrefix>
        <CustomHexInput
          innerRef={inputRef}
          onChange={this.handleChange}
          type="text"
          placeholder="FFFFFF"
          value={formattedValue}
          spellCheck={false}
          maxLength={7} // 7 to allow pasting with a hash
          {...otherProps}
        />
        <SwatchTile
          style={{
            backgroundColor: this.isValidHex(formattedValue) ? `#${formattedValue}` : '',
          }}
        />
        {showCheck && this.isValidHex(formattedValue) ? (
          <SystemIcon
            fill={pickDarkOrLightColor(formattedValue)}
            fillHover={pickDarkOrLightColor(formattedValue)}
            className={swatchCheckIcon}
            icon={checkSmallIcon}
          />
        ) : null}
      </ColorInputContainer>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = this.formatValue(e.currentTarget.value);

    if (this.props.onChange) {
      this.props.onChange(e);
    }

    if (this.isValidHex(value) && this.props.onValidColorChange) {
      this.props.onValidColorChange(`#${expandHex(value)}`);
    }
  };

  private isValidHex = (value: string) => {
    return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(value);
  };

  private formatValue = (value: string) => {
    return value.replace(/#/g, '').substring(0, 6);
  };
}

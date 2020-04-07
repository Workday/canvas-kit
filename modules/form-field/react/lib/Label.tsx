import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {accessibleHide as accessibleHideCSS} from '@workday/canvas-kit-react-common';
import {FormFieldLabelPosition, FormFieldLabelPositionBehavior} from './types';

export interface LabelProps extends FormFieldLabelPositionBehavior {
  /**
   * The position of the Label.
   * @default Label.Position.Top
   */
  labelPosition?: FormFieldLabelPosition;
  /**
   * If true, style the Label as a legend.
   * @default false
   */
  isLegend?: boolean;
  /**
   * The id of a labelable form-related element. Synonymous with `for`.
   */
  htmlFor?: string;
  /**
   * If true, style the Label to indicate that it is required.
   * @default false
   */
  required?: boolean;
  /**
   * The title of the required label.
   * @default required
   */
  requiredLabel?: string;
  /**
   * If true, apply the `accessibleHide` styles to the Label.
   * @default false
   */
  accessibleHide?: boolean;
}

const labelStyles = [
  {
    ...type.body,
    ...type.variant.label,
    padding: 0,
  },
  ({labelPosition, accessibleHide}: Pick<LabelProps, 'labelPosition' | 'accessibleHide'>) => {
    if (accessibleHide) {
      return accessibleHideCSS;
    }
    return {
      ...(labelPosition === FormFieldLabelPosition.Left
        ? {
            marginRight: spacing.l,
            minWidth: 180,
            display: 'flex',
            alignItems: 'center',
            maxHeight: spacing.xl,
          }
        : {
            display: 'block',
            marginBottom: spacing.xxxs,
          }),
    };
  },
];

const RequiredAstrisk = styled('abbr')({
  color: colors.cinnamon500,
  fontSize: '16px',
  fontWeight: 400,
  top: '1px',
  paddingLeft: '2px',
  textDecoration: 'unset',
});

// Used inside the fieldset component instead of a label for accessible radio groups
const LegendComponent = styled('legend')<LabelProps>(...labelStyles);
const LabelComponent = styled('label')<LabelProps>(...labelStyles);

export default class Label extends React.Component<LabelProps> {
  static Position = FormFieldLabelPosition;

  public render() {
    const {
      labelPosition = Label.Position.Top,
      isLegend = false,
      requiredLabel = 'required',
      ...elemProps
    } = this.props;
    const children = !this.props.required
      ? this.props.children
      : [
          this.props.children,
          <RequiredAstrisk key={'0'} title={requiredLabel}>
            *
          </RequiredAstrisk>,
        ];
    return (
      <>
        {isLegend ? (
          <LegendComponent isLegend={isLegend} {...elemProps} children={children} />
        ) : (
          <LabelComponent labelPosition={labelPosition} {...elemProps} children={children} />
        )}
      </>
    );
  }
}

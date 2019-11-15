import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {accessibleHide as accessibleHideCSS} from '@workday/canvas-kit-react-common';
import {FormFieldLabelPosition, FormFieldLabelPositionBehavior} from './types';

export interface LabelProps extends FormFieldLabelPositionBehavior {
  /**
   * Position of the Label
   */
  labelPosition: FormFieldLabelPosition;
  /**
   * If the label should be styled as a legend
   */
  isLegend: boolean;
  /**
   * The id of a labelable form-related element. Synonymous of "for"
   */
  htmlFor?: string;
  /**
   * If the Label should have asterisk to indicated that it is required
   */
  required?: boolean;
  /**
   * Title of the required Label
   */
  requiredLabel: string;
  /**
   * Title of the required Label
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

  static defaultProps = {
    labelPosition: Label.Position.Top,
    isLegend: false,
    requiredLabel: 'required',
  };

  public render() {
    const {...props} = this.props;
    const children = !props.required
      ? props.children
      : [
          props.children,
          <RequiredAstrisk key={'0'} title={props.requiredLabel}>
            *
          </RequiredAstrisk>,
        ];
    return (
      <>
        {props.isLegend ? (
          <LegendComponent {...props} children={children} />
        ) : (
          <LabelComponent {...props} children={children} />
        )}
      </>
    );
  }
}

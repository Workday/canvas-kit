import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {FormFieldLabelPosition, FormFieldLabelPositionBehavior} from './types';

export interface LabelProps extends FormFieldLabelPositionBehavior {
  labelPosition: FormFieldLabelPosition;
  isLegend: boolean;
  htmlFor?: string;
  required?: boolean;
}

const labelStyles = [
  {
    ...type.body,
    ...type.variant.label,
    padding: 0,
  },
  ({labelPosition}: {labelPosition: FormFieldLabelPosition}) => {
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
  };

  public render() {
    const {...props} = this.props;
    const children = !props.required
      ? props.children
      : [
          props.children,
          <RequiredAstrisk key={'0'} title="required">
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

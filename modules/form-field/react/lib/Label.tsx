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
  ({labelPosition, required}: {labelPosition: FormFieldLabelPosition; required?: boolean}) => {
    return {
      ...(labelPosition === FormFieldLabelPosition.Left
        ? {
            display: 'inline-block',
            verticalAlign: 'top',
            marginTop: 10, // Input height - font line height / 2
            marginRight: spacing.l,
            width: 180,
          }
        : {
            display: 'block',
            marginBottom: spacing.xxxs,
          }),
      ...(required
        ? {
            ':after': {
              content: '"*"',
              color: colors.cinnamon500,
              fontSize: '16px',
              fontWeight: 400,
              top: '1px',
              paddingLeft: '2px',
            },
          }
        : {}),
    };
  },
];

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

    return <>{props.isLegend ? <LegendComponent {...props} /> : <LabelComponent {...props} />}</>;
  }
}

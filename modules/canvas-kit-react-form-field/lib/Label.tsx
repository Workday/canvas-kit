import * as React from 'react';
import styled from 'react-emotion';
import {spacing, type} from '@workday/canvas-kit-react-core';
import {LabelPosition, LabelPositionBehavior} from './types';

export interface LabelProps extends LabelPositionBehavior {
  labelPosition: LabelPosition;
  isLegend: boolean;
  htmlFor?: string;
}

const labelStyles = [
  {
    ...type.body,
    ...type.variant.label,
    padding: 0,
  },
  (props: LabelProps) => {
    if (props.labelPosition === LabelPosition.Left) {
      return {
        display: 'inline-block',
        verticalAlign: 'top',
        marginTop: 10, // Input height - font line height / 2
        marginRight: spacing.l,
        width: 180,
      };
    }

    return {
      display: 'block',
      marginBottom: spacing.xxxs,
    };
  },
];

// Used inside the fieldset component instead of a label for accessible radio groups
const LegendComponent = styled('legend')<LabelProps>(...labelStyles);
const LabelComponent = styled('label')<LabelProps>(...labelStyles);

export default class Label extends React.Component<LabelProps> {
  static Position = LabelPosition;

  static defaultProps = {
    labelPosition: Label.Position.Top,
    isLegend: false,
  };

  public render() {
    const {...props} = this.props;

    return <>{props.isLegend ? <LegendComponent {...props} /> : <LabelComponent {...props} />}</>;
  }
}

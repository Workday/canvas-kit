import * as React from 'react';
import {colors, space, type} from '@workday/canvas-kit-react/tokens';
import {accessibleHide as accessibleHideCSS, styled} from '@workday/canvas-kit-react/common';
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
   * The id of the form-related element. Synonymous with `for`.
   */
  htmlFor?: string;
  /**
   * If true, style the Label to indicate that it is required.
   * @default false
   */
  required?: boolean;
  /**
   * The required label is not visible to screen readers and should have no label. This prop will be
   * ignored.
   * @deprecated
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
    ...type.levels.subtext.large,
    fontWeight: type.properties.fontWeights.medium,
    padding: 0,
  },
  ({labelPosition, accessibleHide}: Pick<LabelProps, 'labelPosition' | 'accessibleHide'>) => {
    if (accessibleHide) {
      return accessibleHideCSS;
    }
    return {
      ...(labelPosition === FormFieldLabelPosition.Left
        ? {
            marginRight: space.l,
            minWidth: 180,
            display: 'flex',
            alignItems: 'center',
            maxHeight: space.xl,
          }
        : {
            display: 'block',
            marginBottom: space.xxxs,
          }),
    };
  },
];

const RequiredAsterisk = styled('abbr')({
  color: colors.cinnamon500,
  fontSize: '16px',
  fontWeight: 400,
  top: '1px',
  paddingLeft: '2px',
  textDecoration: 'unset',
});

// Used inside the fieldset component instead of a label for accessible radio groups.
const LegendComponent = styled('legend')<LabelProps>(...labelStyles, ({labelPosition}) => {
  if (labelPosition === Label.Position.Top) {
    return {
      width: '100%',
    };
  }

  return {
    float: 'left',
    width: 'auto',
  };
});

const LabelComponent = styled('label')<LabelProps>(...labelStyles);

class Label extends React.Component<React.PropsWithChildren<LabelProps>> {
  static Position = FormFieldLabelPosition;

  public render() {
    const {
      labelPosition = Label.Position.Top,
      isLegend = false,
      required,
      ...elemProps
    } = this.props;
    const children = !required
      ? this.props.children
      : [
          this.props.children,
          <RequiredAsterisk key={'0'} aria-hidden>
            *
          </RequiredAsterisk>,
        ];
    return (
      <>
        {isLegend ? (
          <LegendComponent
            labelPosition={labelPosition}
            isLegend={isLegend}
            {...elemProps}
            children={children}
          />
        ) : (
          <LabelComponent labelPosition={labelPosition} {...elemProps} children={children} />
        )}
      </>
    );
  }
}

Label.Position = FormFieldLabelPosition;

export {Label};

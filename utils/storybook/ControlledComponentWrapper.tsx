import * as React from 'react';

enum ControlledProp {
  Value = 'value',
  Checked = 'checked',
}

export interface ControlledComponentProps {
  initialValue?: string | number;
  controlledProp: ControlledProp;
}

export default class ControlledComponentWrapper extends React.Component<ControlledComponentProps> {
  static ControlledProp = ControlledProp;
  static defaultProps = {
    controlledProp: ControlledProp.Value,
  };

  state = {
    value: this.props.initialValue || '', // Used for string based components (e.g. text input)
    checked: false, // Used for boolean components (e.g. checkbox)
  };

  onChange = (e: React.SyntheticEvent | string | number) => {
    if (this.props.controlledProp === ControlledProp.Checked) {
      this.setState({checked: !this.state.checked});
    } else {
      const value =
        typeof e === 'object' ? (e as React.ChangeEvent<HTMLInputElement>).currentTarget.value : e;
      this.setState({value});
    }
  };

  renderChildren = (child: React.ReactNode) => {
    if (React.isValidElement<any>(child)) {
      const {children, controlledProp, ...props} = this.props;
      const childProps = {
        ...props,
        ...child.props,
        [controlledProp]:
          controlledProp === ControlledProp.Checked ? this.state.checked : this.state.value,
        onChange: this.onChange,
      };
      return React.cloneElement(child, childProps);
    }
    return child;
  };

  public render() {
    return React.Children.map(this.props.children, this.renderChildren);
  }
}

export const controlComponent = (
  child: React.ReactNode,
  controlledProp?: ControlledProp,
  initialValue?: string | number
) => {
  return (
    <ControlledComponentWrapper controlledProp={controlledProp} initialValue={initialValue}>
      {child}
    </ControlledComponentWrapper>
  );
};

import * as React from 'react';

enum ControlledProp {
  Value = 'value',
  Checked = 'checked',
}

export const useControlledValue = <
  T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement = HTMLInputElement
>(
  initialValue = ''
) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (eventOrValue: React.ChangeEvent<T> | string) => {
    setValue(typeof eventOrValue === 'object' ? eventOrValue.target.value : eventOrValue);
  };

  return {
    value,
    onChange,
  };
};

export const useControlledCheck = (initialChecked = false) => {
  const [checked, setChecked] = React.useState(initialChecked);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return {checked, onChange};
};

export interface ControlledComponentWrapperProps extends React.Props<any> {
  controlledProp?: ControlledProp;
}

export const ControlledComponentWrapper = ({
  children,
  controlledProp = ControlledProp.Value,
  ...props
}: ControlledComponentWrapperProps): React.ReactElement => {
  const valueProps = useControlledValue();
  const checkedProps = useControlledCheck();

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement<any>(child)) {
          const childProps = {
            ...props,
            ...child.props,
            ...(controlledProp === ControlledProp.Checked ? checkedProps : valueProps),
          };

          return React.cloneElement(child, childProps);
        }
        return child;
      })}
    </>
  );
};

ControlledComponentWrapper.ControlledProp = ControlledProp;

export const controlComponent = (
  child: React.ReactNode,
  controlledProp: ControlledProp = ControlledProp.Value
) => {
  return (
    <ControlledComponentWrapper controlledProp={controlledProp}>{child}</ControlledComponentWrapper>
  );
};

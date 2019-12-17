import {CSSObject, Interpolation} from '@emotion/core';
import {WithTheme} from '@emotion/styled';
import {Overwrapped} from '@emotion/styled-base/types/helper';

/**
 * Allows the ability to force a state by a pseudo selector by changing the selector into a class creating a new styled object with the class names
 * @param shouldChangePseudoSelectors If true, it will replace pseudo selectors from the styled object and change them to classes
 * @param obj The styled object passed to the function to replace any pseudo selectors with a class name
 */

export interface ChangeStaticStateProps {
  /** @ignore */
  shouldChangeStyleToStaticStates?: boolean;
}

export const changeStyleToStaticStates = (
  shouldChangePseudoSelectors = false,
  obj?: CSSObject
): CSSObject | undefined => {
  if (!shouldChangePseudoSelectors || !obj) {
    return obj;
  }

  return Object.keys(obj).reduce((result, key) => {
    const newKey = key
      .replace(/^:/, '&:')
      .replace(/:/g, '.')
      .replace(/\.not/g, ':not')
      .replace(/\.disabled/, ':disabled');
    const value =
      typeof obj[key] === 'object'
        ? changeStyleToStaticStates(true, obj[key] as CSSObject)
        : obj[key];
    const newObj = {...result, [newKey]: value};
    return newObj;
  }, {});
};

export const convertToStaticStates = <
  InnerProps,
  ExtraProps extends ChangeStaticStateProps,
  StyleProps extends Omit<
    Overwrapped<InnerProps, StyleProps>,
    keyof React.ComponentClass<any>
  > = Omit<InnerProps & ExtraProps, keyof React.ComponentClass<any>>,
  Theme extends object = object
>(
  ...styles: Array<Interpolation<WithTheme<StyleProps, Theme>>>
): Array<Interpolation<WithTheme<StyleProps, Theme>>> => {
  return styles.map(style => {
    if (typeof style === 'function') {
      return ((props: ExtraProps) => {
        return changeStyleToStaticStates(props.shouldChangeStyleToStaticStates, style(
          props as any
        ) as CSSObject);
      }) as any;
    } else {
      return (props: ExtraProps) =>
        changeStyleToStaticStates(props.shouldChangeStyleToStaticStates, style as CSSObject);
    }
  });
};

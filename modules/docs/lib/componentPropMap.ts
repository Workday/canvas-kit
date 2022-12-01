import {ComponentDoc} from 'react-docgen-typescript';

export interface ComponentPropMap {
  /** The import path of the component. For example, `@workday/canvas-kit-react/tooltip` */
  [key: string]: {
    /** The name of the component. For example, `Tooltip` */
    [key: string]: ComponentDoc;
  };
}

/**
 * The entire component prop map of all components. The structure looks like:
 * ```json
 * {
 *   "@workday/canvas-kit-react/tooltip": {
 *     "Tooltip": {} // ComponentDoc from `react-docgen-typescript`. Pass directly to a PropTable component
 *   }
 * }
 * ```
 */
// prettier-ignore
export const componentPropMap: ComponentPropMap = {/* PROP_MAP_REPLACE_BY_WEBPACK */};

componentPropMap['@workday/canvas-kit-react/tooltip'];

import {CanvasColor} from '@workday/canvas-kit-react/tokens';
import {buildStyleFns, StyleFnConfig} from '../buildStyleFns';

/** style props to set CSS border color properties */
export type BorderColorStyleProps = {
  /**
   * - sets CSS border-color property
   * - system tokens: `color`
   */
  borderColor?: CanvasColor | (string & {});
  /**
   * - sets CSS border-top-color property
   * - system tokens: `color`
   */
  borderTopColor?: CanvasColor | (string & {});
  /**
   * - sets CSS border-right-color property (no bidirectional support)
   * - system tokens: `color`
   */
  borderRightColor?: CanvasColor | (string & {});
  /**
   * - sets CSS border-bottom-color property
   * - system tokens: `color`
   */
  borderBottomColor?: CanvasColor | (string & {});
  /**
   * - sets CSS border-left-color property (no bidirectional support)
   * - system tokens: `color`
   */
  borderLeftColor?: CanvasColor | (string & {});
  /**
   * - sets CSS border-inline-start-color property (bidirectional support)
   * - system tokens: `color`
   */
  borderInlineStartColor?: CanvasColor | (string & {});
  /**
   * - sets CSS border-inline-end-color property (bidirectional support)
   * - system tokens: `color`
   */
  borderInlineEndColor?: CanvasColor | (string & {});
};

const borderColorStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'borderColor',
    properties: ['borderColor'],
    system: 'color',
  },
  {
    name: 'borderTopColor',
    properties: ['borderTopColor'],
    system: 'color',
  },
  {
    name: 'borderRightColor',
    properties: ['borderRightColor'],
    system: 'color',
  },
  {
    name: 'borderBottomColor',
    properties: ['borderBottomColor'],
    system: 'color',
  },
  {
    name: 'borderLeftColor',
    properties: ['borderLeftColor'],
    system: 'color',
  },
  {
    name: 'borderInlineStartColor',
    properties: ['borderInlineStartColor'],
    system: 'color',
  },
  {
    name: 'borderInlineEndColor',
    properties: ['borderInlineEndColor'],
    system: 'color',
  },
];

export const borderColorFns = buildStyleFns(borderColorStyleFnConfigs);

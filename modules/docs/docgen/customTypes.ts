import {InterfaceValue, ObjectProperty, ObjectValue, Value, JSDoc, SymbolValue} from './docTypes';

export interface ModelHookValue {
  kind: 'modelHook';
  name: string;
  defaultConfig: ObjectProperty[];
  requiredConfig: ObjectProperty[];
}

export interface ModelValue {
  kind: 'model';
  state: ObjectProperty[];
  events: ObjectProperty[];
  /**
   * Additional properties on the model
   */
  modelProperties: ObjectProperty[];
}

export interface ElemPropsHookValue {
  kind: 'elemPropsHook';
  parameters: ObjectProperty[];
  returnType: null;
}

export interface ComponentValue {
  kind: 'component';
  members?: Value[];
  props: ObjectProperty[];
}

export interface EnhanceComponentValue {
  kind: 'enhancedComponent';
  props: ObjectProperty[];
  componentType: 'container' | 'subcomponent' | 'regular';
  displayName?: string;
  baseElement?: Value;
  subComponents?: (JSDoc & {name: string; symbol: string})[];
  elemPropsHook?: Value;
  model?: string;
  styleComponent?: SymbolValue;
}

export interface CanvasColorValue {
  kind: 'canvasColor';
}

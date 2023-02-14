import {ObjectProperty, Value, JSDoc, SymbolValue, FunctionValue} from '../docTypes';

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
  name?: string;
  model: string;
  elemProps: ObjectProperty[];
  returnProps: ObjectProperty[];
}

export interface ComposedElemPropsHookValue {
  kind: 'composedElemPropsHook';
  name: string;
  composes: (SymbolValue | ElemPropsHookValue | SubModelElemPropsHookValue)[];
}

export interface SubModelElemPropsHookValue {
  kind: 'subModelElemPropsHook';
  name?: string;
  fn: FunctionValue;
  uses: SymbolValue;
}

export interface ComponentValue {
  kind: 'component';
  members?: Value[];
  props: ObjectProperty[];
}

export interface EnhancedComponentValue {
  kind: 'enhancedComponent';
  props: ObjectProperty[];
  componentType: 'container' | 'subcomponent' | 'regular';
  displayName?: string;
  baseElement?: Value;
  subComponents?: (JSDoc & {name: string; symbol: string})[];
  elemPropsHook?: string;
  model?: string;
  styleComponent?: SymbolValue;
}

export interface ComponentValue {
  kind: 'component';
  props: ObjectProperty[];
  displayName?: string;
}

export interface CanvasColorValue {
  kind: 'canvasColor';
}

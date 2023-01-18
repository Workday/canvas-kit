import {InterfaceValue, ObjectProperty, Value} from './docTypes';

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
  baseElement?: Value;
  props: ObjectProperty[];
  subComponents?: InterfaceValue;
  elemPropsHook?: Value;
}

export interface CanvasColorValue {
  kind: 'canvasColor';
}

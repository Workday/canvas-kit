/*
 * The Postiion of the FormField Label (Top vs Left vs Hidden)
 */
export enum FormFieldLabelPosition {
  Top,
  Left,
  Hidden,
}

export interface FormFieldLabelPositionBehavior {
  labelPosition?: FormFieldLabelPosition;
}

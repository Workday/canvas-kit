/**
 * The position of the FormField label (Top vs Left vs Hidden).
 */
export enum FormFieldLabelPosition {
  Top,
  Left,
  Hidden,
}

export interface FormFieldLabelPositionBehavior {
  labelPosition?: FormFieldLabelPosition;
}

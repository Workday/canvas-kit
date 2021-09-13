export interface ColorPickerState {
  currentColor: string;
}

export interface ColorPickerEvents {
  onColorChange: (color: string) => void;
}

export interface ColorPickerModel {
  state: ColorPickerState;
  events: ColorPickerEvents;
}

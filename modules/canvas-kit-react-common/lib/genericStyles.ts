import {CSSObject} from 'create-emotion';

/**
 * Our schema for generic styles for a whole component.
 * Each key corresponds to an emotion styled component (HTML Element)
 */
export interface GenericStyles {
  [key: string]: GenericStyle;
}

/**
 * The schema for generic styles for an emotion styled component
 * The classname will have a prefix appended upon export for css.
 * The variant keys will be appended to the classname.
 * The defaults are an array of the variant keys to use as default state.
 */
export interface GenericStyle {
  classname: string;
  styles: CSSObject;
  variants?: {
    [key: string]: CSSObject;
  };
  defaults?: Array<string>;
}

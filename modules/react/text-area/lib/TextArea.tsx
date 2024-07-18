import * as React from 'react';
import {
  createComponent,
  GrowthBehavior,
  ErrorType,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {createStencil, calc, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {textInputStencil} from '@workday/canvas-kit-react/text-input';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
export type ValueOf<T> = T[keyof T];

export interface TextAreaProps extends Themeable, GrowthBehavior {
  /**
   * If true, set the TextArea to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The type of error associated with the TextArea (if applicable).
   */
  error?: ErrorType;
  /**
   * The function called when the TextArea state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * The placeholder text of the TextArea.
   */
  placeholder?: string;
  /**
   * If true, set the TextArea to read-only. The user will be unable to interact with the TextArea.
   * @default false
   */
  readOnly?: boolean;
  /**
   * The resize constraints of the TextArea.
   * @default TextArea.ResizeDirection.Both
   */
  resize?: ValueOf<typeof TextAreaResizeDirection>;
  /**
   * The value of the TextArea.
   */
  value?: any;
}

export const TextAreaResizeDirection = {
  None: 'none',
  Both: 'both',
  Horizontal: 'horizontal',
  Vertical: 'vertical',
} as const;

export const textAreaStencil = createStencil({
  extends: textInputStencil,

  base: {
    minHeight: system.space.x16,
    minWidth: calc.add(calc.multiply(system.space.x20, 3), system.space.x10),
    '&::webkit-resizer': {
      display: 'none',
    },
  },

  modifiers: {
    resize: {
      both: {
        resize: 'both',
      },
      horizontal: {
        resize: 'horizontal',
      },
      vertical: {
        resize: 'vertical',
      },
      none: {
        resize: 'none',
      },
    },
  },
  defaultModifiers: {
    resize: 'both',
  },
});

export const TextArea = createComponent('textarea')({
  displayName: 'TextArea',
  Component: (
    {resize = TextAreaResizeDirection.Both, grow, ...elemProps}: TextAreaProps,
    ref,
    Element
  ) => (
    <Element
      ref={ref}
      {...mergeStyles(elemProps, textAreaStencil({error: elemProps.error, grow, resize}))}
    />
  ),
  subComponents: {
    ErrorType,
    ResizeDirection: TextAreaResizeDirection,
  },
});

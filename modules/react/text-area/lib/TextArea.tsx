import {createComponent, GrowthBehavior, ErrorType} from '@workday/canvas-kit-react/common';
import {createStencil, calc, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {textInputStencil} from '@workday/canvas-kit-react/text-input';
export type ValueOf<T> = T[keyof T];

export interface TextAreaProps extends GrowthBehavior {
  /**
   * The type of error associated with the TextArea (if applicable).
   */
  error?: ErrorType;
  /**
   * The resize constraints of the TextArea.
   * @default TextArea.ResizeDirection.Both
   */
  resize?: ValueOf<typeof TextAreaResizeDirection>;
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
    {resize = TextAreaResizeDirection.Both, grow, error, ...elemProps}: TextAreaProps,
    ref,
    Element
  ) => <Element ref={ref} {...handleCsProp(elemProps, textAreaStencil({error, grow, resize}))} />,
  subComponents: {
    ErrorType,
    ResizeDirection: TextAreaResizeDirection,
  },
});

import {ErrorType, GrowthBehavior, createComponent} from '@workday/canvas-kit-react/common';
import {textInputStencil} from '@workday/canvas-kit-react/text-input';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minHeight: cssVar(system.size.xxl, system.space.x16),
    minWidth: px2rem(280),
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

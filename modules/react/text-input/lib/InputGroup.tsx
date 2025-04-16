import React from 'react';

import {createStencil, handleCsProp, wrapProperty} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {
  createContainer,
  createElemPropsHook,
  createModelHook,
  createSubcomponent,
  dispatchInputEvent,
  ExtractProps,
  useForkRef,
} from '@workday/canvas-kit-react/common';

import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {xSmallIcon} from '@workday/canvas-system-icons-web';

import {TextInput} from './TextInput';

export const useInputGroupModel = createModelHook({})(() => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return {
    state: {
      inputRef,
    },
    events: {},
  };
});

export const inputGroupInnerStencil = createStencil({
  vars: {
    /**
     * Offset of the inner item. Set by the `InputGroup` and depends on siblings. Do not change this
     * on your own.
     */
    insetInlineStart: 'initial',
    /**
     * Offset of the inner item. Set by the `InputGroup` and depends on siblings. Do not change this
     * on your own.
     */
    insetInlineEnd: 'initial',
    width: system.space.x10,
    height: system.space.x10,
    /**
     * Some inner input group elements are decoration only and should not have pointer events
     */
    pointerEvents: '',
  },
  base: ({width, height, insetInlineStart, insetInlineEnd}) => ({
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    insetInlineStart,
    insetInlineEnd,
  }),
  modifiers: {
    pointerEvents: {
      _: ({pointerEvents}) => ({pointerEvents}),
    },
  },
});

const InputGroupInnerStart = createSubcomponent('div')({
  modelHook: useInputGroupModel,
})<ExtractProps<typeof Flex, never>>(
  ({pointerEvents, insetInlineStart, insetInlineEnd, width, height, ...elemProps}, Element) => {
    return (
      <Element
        {...mergeStyles(
          elemProps,
          inputGroupInnerStencil({
            pointerEvents,
            insetInlineStart: toPx(insetInlineStart),
            insetInlineEnd: toPx(insetInlineEnd),
            width: toPx(width),
            height: toPx(height),
          })
        )}
      />
    );
  }
);

const InputGroupInnerEnd = createSubcomponent('div')({
  modelHook: useInputGroupModel,
})<ExtractProps<typeof Flex, never>>(
  ({pointerEvents, insetInlineStart, insetInlineEnd, width, height, ...elemProps}, Element) => {
    return (
      <Element
        {...mergeStyles(
          elemProps,
          inputGroupInnerStencil({
            pointerEvents,
            insetInlineStart: insetInlineStart as string,
            insetInlineEnd: insetInlineEnd as string,
            width: toPx(width),
            height: toPx(height),
          })
        )}
      />
    );
  }
);

export const useInputGroupInput = createElemPropsHook(useInputGroupModel)((model, ref) => {
  const elementRef = useForkRef(ref, model.state.inputRef);

  return {
    ref: elementRef,
    placeholder: '', // Make sure a placeholder attribute always exists for `:placeholder-shown`
  };
});

export const inputGroupInputStencil = createStencil({
  vars: {
    paddingInlineStart: '',
    paddingInlineEnd: '',
  },
  base: {
    display: 'flex',
    width: '100%',
  },
  modifiers: {
    paddingInlineStart: {
      _: ({paddingInlineStart}) => ({paddingInlineStart}),
    },
    paddingInlineEnd: {
      _: ({paddingInlineEnd}) => ({paddingInlineEnd}),
    },
  },
});

const InputGroupInput = createSubcomponent(TextInput)({
  modelHook: useInputGroupModel,
  elemPropsHook: useInputGroupInput,
})<ExtractProps<typeof Flex, never>>(
  ({paddingInlineStart, paddingInlineEnd, ...elemProps}, Element) => {
    return (
      <Element
        as={Element}
        {...mergeStyles(
          elemProps,
          inputGroupInputStencil({
            paddingInlineStart: toPx(paddingInlineStart),
            paddingInlineEnd: toPx(paddingInlineEnd),
          })
        )}
      />
    );
  }
);

export const useClearButton = createElemPropsHook(useInputGroupModel)(model => {
  return {
    // This element does not need to be accessible via screen reader. The user can already clear
    // an input
    role: 'presentation',
    // A clear input button doesn't need focus. There's already keyboard keys to clear an input
    tabIndex: -1,
    icon: xSmallIcon,
    // "small" is needed to render correctly within a `TextInput`
    size: 'small',
    // prevent a focus change to the button. Focus should stay in the input.
    onMouseDown(event: React.MouseEvent) {
      event.preventDefault();
    },
    onClick() {
      // This will clear the input's value
      dispatchInputEvent(model.state.inputRef.current, '');
    },
  } as const;
});

/**
 * A clear input button. This can be a component later.
 */
const ClearButton = createSubcomponent(TertiaryButton)({
  modelHook: useInputGroupModel,
  elemPropsHook: useClearButton,
})<ExtractProps<typeof TertiaryButton, never>>((elemProps, Element) => {
  return <Element data-part="input-group-clear-button" {...handleCsProp(elemProps)} />;
});

// make sure we always use pixels if the input is a number - this is required for `calc`
const toPx = (input: string | number | undefined): string | undefined => {
  return typeof input === 'number' ? `${input}px` : input;
};

// wrap an array of widths into something the browser can understand, including `calc` for multiple
// values
const wrapInCalc = (values: (string | number)[]): string | number | undefined => {
  if (values.length === 0) {
    return undefined;
  }
  if (values.length === 1) {
    return values[0];
  }
  return `calc(${values.map(toPx).join(' + ')})`;
};

export const inputGroupStencil = createStencil({
  base: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',

    // Clear Button
    '& :has([data-part="input-group-clear-button"])': {
      transition: 'opacity 300ms ease',
    },

    // Clear Button when a placeholder is being shown (no value)
    '&:where(:has(input:placeholder-shown)) :has([data-part="input-group-clear-button"])': {
      opacity: 0,
      pointerEvents: 'none',
    },
  },
});

/**
 * An `InputGroup` is a container around a {@link TextInput} with optional inner start and end
 * elements. The inner start and end elements are usually icons or icon buttons visually represented
 * inside the input. The `InputGroup` will add padding to the input so the icons/buttons display
 * correctly. This component uses `React.Children.map` and `React.cloneElement` from the
 * [React.Children](https://react.dev/reference/react/Children) API. This means all children must be
 * `InputGroup.*` components. Any other direct children will cause issues. You can add different
 * elements/components inside the {@link InputGroupInnerStart InputGroup.InnerStart} and
 * {@link InputGroupInnerEnd InputGroup.InnerEnd} subcomponents.
 *
 * ```tsx
 * <InputGroup>
 *   <InputGroup.InnerStart as={SystemIcon} pointerEvents="none" icon={searchIcon} />
 *   <InputGroup.Input />
 *   <InputGroup.InnerEnd>
 *     <TertiaryButton tabIndex={-1} icon={xIcon} size="small" />
 *   </InputGroup.InnerEnd>
 * </InputGroup>
 * ```
 */
export const InputGroup = createContainer('div')({
  displayName: 'InputGroup',
  modelHook: useInputGroupModel,
  subComponents: {
    /**
     * A component to show inside and at the start of the input. The input's padding will be
     * adjusted by the `InputGroup` to not overlap with this element. Use `width` to adjust the
     * width offset. The width defaults to 40px which is the correct width for icons or icon
     * buttons.
     */
    InnerStart: InputGroupInnerStart,
    /**
     * The input to render. By default, this is a {@link TextInput}. Use the `as` prop to change the
     * component to be rendered.
     */
    Input: InputGroupInput,
    /**
     * A component to show inside and at the end of the input. The input's padding will be adjusted
     * by the `InputGroup` to not overlap with this element. Use `width` to adjust the width offset.
     * The width defaults to 40px which is the correct width for icons or icon buttons within the
     * input.
     */
    InnerEnd: InputGroupInnerEnd,
    /**
     * A component that can be added to an input group that will clear the input. It will only render
     * when the input has a value and will fade when a value is entered.
     */
    ClearButton: ClearButton,
  },
})<ExtractProps<typeof Flex, never>>(({children, ...elemProps}, Element) => {
  const offsetsStart: (string | number)[] = [];
  const offsetsEnd: (string | number)[] = [];

  // Collect the widths of the `InnerStart` and `InnerEnd` components into `offsetStart` and
  // `offsetEnd` arrays
  React.Children.forEach(children, child => {
    if (React.isValidElement<any>(child) && child.type === InputGroupInnerStart) {
      const width = wrapProperty(child.props.width || system.space.x10);
      offsetsStart.push(width);
    }
    if (React.isValidElement<any>(child) && child.type === InputGroupInnerEnd) {
      const width = wrapProperty(child.props.width || system.space.x10);
      offsetsEnd.push(width);
    }
  });

  // keep track of the index offsets to make sure we calculate the correct position offset
  let indexStart = 0;
  let indexEnd = 0;

  // Loop over all the children and set the correct padding and positions
  const mappedChildren = React.Children.map(children, child => {
    if (React.isValidElement<any>(child)) {
      if (child.type === InputGroupInput) {
        return React.cloneElement(child, {
          paddingInlineStart: wrapInCalc(offsetsStart),
          paddingInlineEnd: wrapInCalc(offsetsEnd),
        });
      }
      if (child.type === InputGroupInnerStart) {
        const offset = wrapInCalc(offsetsStart.slice(0, indexStart)) || '0px';
        indexStart++;

        return React.cloneElement(child, {
          insetInlineStart: offset,
        });
      }
      if (child.type === InputGroupInnerEnd) {
        const offset = wrapInCalc(offsetsEnd.slice(indexEnd + 1, offsetsEnd.length)) || '0px';
        indexEnd++;

        return React.cloneElement(child, {
          insetInlineEnd: offset,
        });
      }
    }
    return child;
  });

  return <Element {...mergeStyles(elemProps, inputGroupStencil())}>{mappedChildren}</Element>;
});

import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {
  createContainer,
  createElemPropsHook,
  createModelHook,
  createSubcomponent,
  dispatchInputEvent,
  ExtractProps,
  useForkRef,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
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

export const InputGroupInnerStart = createSubcomponent('div')({
  modelHook: useInputGroupModel,
})<ExtractProps<typeof Flex, never>>((elemProps, Element) => {
  return (
    <Flex
      as={Element}
      position="absolute"
      alignItems="center"
      justifyContent="center"
      height="xl"
      width="xl"
      {...elemProps}
    />
  );
});

export const InputGroupInnerEnd = createSubcomponent('div')({
  modelHook: useInputGroupModel,
})<ExtractProps<typeof Flex, never>>((elemProps, Element) => {
  return (
    <Flex
      as={Element}
      position="absolute"
      alignItems="center"
      justifyContent="center"
      height="xl"
      width="xl"
      {...elemProps}
    />
  );
});

const useInputGroupInput = createElemPropsHook(useInputGroupModel)((model, ref) => {
  const elementRef = useForkRef(ref, model.state.inputRef);

  return {
    ref: elementRef,
  };
});

export const InputGroupInput = createSubcomponent(TextInput)({
  modelHook: useInputGroupModel,
  elemPropsHook: useInputGroupInput,
})<ExtractProps<typeof Flex, never>>((elemProps, Element) => {
  return <Flex as={Element} width="100%" {...elemProps} />;
});

export const useClearButton = createElemPropsHook(useInputGroupModel)(model => {
  const [inputHasValue, setInputHasValue] = React.useState(false);

  React.useLayoutEffect(() => {
    const input = model.state.inputRef.current;

    if (input) {
      input.addEventListener('input', () => {
        setInputHasValue(!!input.value);
      });
    }
  }, [model.state.inputRef]);

  return {
    // This element does not need to be accessible via screen reader. The user can already clear
    // an input
    role: 'presentation',
    // A clear input button doesn't need focus. There's already keyboard keys to clear an input
    tabIndex: -1,
    icon: xSmallIcon,
    // "small" is needed to render correctly within a `TextInput`
    size: 'small',
    transition: 'opacity 300ms ease',
    // prevent a focus change to the button. Focus should stay in the input.
    onMouseDown(event: React.MouseEvent) {
      event.preventDefault();
    },
    onClick() {
      // This will clear the input's value
      dispatchInputEvent(model.state.inputRef.current, '');
    },
    style: {
      opacity: inputHasValue ? 1 : 0,
      pointerEvents: inputHasValue ? 'auto' : 'none',
    },
  } as const;
});

/**
 * A clear input button. This can be a component later.
 */
export const ClearButton = createSubcomponent(TertiaryButton)({
  modelHook: useInputGroupModel,
  elemPropsHook: useClearButton,
})<ExtractProps<typeof TertiaryButton, never>>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

// make sure we always use pixels if the input is a number - this is required for `calc`
const toPx = (input: string | number): string => {
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
     * adjusted to not overlap with this element. Use `width` (number of pixels only) to adjust the
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
     * to not overlap with this element. Use `width` (number of pixels only) to adjust the width
     * offset. The width defaults to 40px which is the correct width for icons or icon buttons
     * within the input.
     */
    InnerEnd: InputGroupInnerEnd,
    /**
     * A component that can be added to an input group that will clear the input. It will only render
     * when the input has a value and will fade when a value is entered.
     */
    ClearButton: ClearButton,
  },
})<ExtractProps<typeof Flex, never>>(({children, ...elemProps}, Element) => {
  const isRTL = useIsRTL();
  const offsetsStart: (string | number)[] = [];
  const offsetsEnd: (string | number)[] = [];

  // Collect the widths of the `InnerStart` and `InnerEnd` components into `offsetStart` and
  // `offsetEnd` arrays
  React.Children.forEach(children, child => {
    if (React.isValidElement<any>(child) && child.type === InputGroupInnerStart) {
      const width = child.props.width || space.xl;
      offsetsStart.push(width);
    }
    if (React.isValidElement<any>(child) && child.type === InputGroupInnerEnd) {
      const width = child.props.width || space.xl;
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
        const offset = wrapInCalc(offsetsStart.slice(0, indexStart)) || 0;
        indexStart++;

        return React.cloneElement(child, {
          left: isRTL ? undefined : offset,
          right: isRTL ? offset : undefined,
        });
      }
      if (child.type === InputGroupInnerEnd) {
        const offset = wrapInCalc(offsetsEnd.slice(indexEnd, -1)) || 0;
        indexEnd++;

        return React.cloneElement(child, {
          left: isRTL ? offset : undefined,
          right: isRTL ? undefined : offset,
        });
      }
    }
    return child;
  });

  return (
    <Flex as={Element} position="relative" {...elemProps}>
      {mappedChildren}
    </Flex>
  );
});

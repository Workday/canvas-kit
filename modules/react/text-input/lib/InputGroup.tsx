import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  dispatchInputEvent,
  ExtractProps,
  mergeProps,
  useForkRef,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {xSmallIcon} from '@workday/canvas-system-icons-web';

import {TextInput} from './TextInput';

const InputGroupContext = React.createContext<React.RefObject<HTMLInputElement>>({
  current: null,
});

export const InputGroupInnerStart = createComponent('div')({
  Component(elemProps: ExtractProps<typeof Flex>, ref, Element) {
    return (
      <Flex
        ref={ref}
        as={Element}
        position="absolute"
        alignItems="center"
        justifyContent="center"
        height="xl"
        width="xl"
        {...elemProps}
      />
    );
  },
});

export const InputGroupInnerEnd = createComponent('div')({
  Component(elemProps: ExtractProps<typeof Flex>, ref, Element) {
    return (
      <Flex
        ref={ref}
        as={Element}
        position="absolute"
        alignItems="center"
        justifyContent="center"
        height="xl"
        width="xl"
        {...elemProps}
      />
    );
  },
});

export const InputGroupInput = createComponent(TextInput)({
  Component(elemProps: ExtractProps<typeof Flex>, ref, Element) {
    const inputRef = React.useContext(InputGroupContext);
    const elementRef = useForkRef(ref, inputRef);
    return <Flex ref={elementRef} as={Element} width="100%" {...elemProps} />;
  },
});

export interface ClearInputButtonProps {}

/**
 * A clear input button. This can be a component later.
 */
export const ClearInputButton = createComponent(TertiaryButton)({
  Component(elemProps: ClearInputButtonProps, ref, Element) {
    const inputRef = React.useContext(InputGroupContext);
    const localRef = React.useRef<HTMLButtonElement>(null);
    const elementRef = useForkRef(localRef, ref);
    const [inputHasValue, setInputHasValue] = React.useState(false);

    React.useLayoutEffect(() => {
      const input = inputRef.current;
      const button = localRef.current;

      if (input && button) {
        input.addEventListener('input', () => {
          setInputHasValue(!!input.value);
        });
      }
    }, [inputRef, localRef]);

    const props = mergeProps(
      {
        onMouseDown(event: React.MouseEvent) {
          event.preventDefault();
        },
        onClick() {
          dispatchInputEvent(inputRef.current, '');
        },
      },
      elemProps
    );

    return (
      <Element
        ref={elementRef}
        // This element does not need to be accessible via screen reader. The user can already clear
        // an input
        role="presentation"
        icon={xSmallIcon}
        // "small" is needed to render correctly within a `TextInput`
        size="small"
        // A clear input button doesn't need focus. There's already keyboard keys to clear an input
        tabIndex={-1}
        transition="opacity 300ms ease"
        // Use style attribute to avoid the cost of Emotion's styling solution that causes the
        // browser to throw away style cache. The difference can be significant for large amount of
        // elements (could be a 80ms difference)
        style={{
          opacity: inputHasValue ? 1 : 0,
          pointerEvents: inputHasValue ? 'auto' : 'none',
        }}
        {...props}
      />
    );
  },
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
export const InputGroup = createComponent('div')({
  displayName: 'InputGroup',
  Component({children, ...elemProps}: ExtractProps<typeof Flex>, ref, Element) {
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
      <Flex ref={ref} as={Element} position="relative" {...elemProps}>
        {mappedChildren}
      </Flex>
    );
  },
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
    ClearInputButton: ClearInputButton,
  },
});

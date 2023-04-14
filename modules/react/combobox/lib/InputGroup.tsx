import React from 'react';

import {createComponent, ExtractProps, useIsRTL} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const InputGroupStart = createComponent('div')({
  Component(elemProps: ExtractProps<typeof Flex>, ref, Element) {
    return (
      <Flex
        ref={ref}
        as={Element}
        position="absolute"
        alignItems="center"
        justifyContent="center"
        height={40}
        width={40}
        {...elemProps}
      />
    );
  },
});

export const InputGroupEnd = createComponent('div')({
  Component(elemProps: ExtractProps<typeof Flex>, ref, Element) {
    const isRTL = useIsRTL();

    return (
      <Flex
        ref={ref}
        as={Element}
        position="absolute"
        alignItems="center"
        justifyContent="center"
        height={40}
        width={40}
        {...elemProps}
      />
    );
  },
});

export const InputGroupInput = createComponent(TextInput)({
  Component(elemProps: ExtractProps<typeof Flex>, ref, Element) {
    return <Flex ref={ref} as={Element} width="100%" {...elemProps} />;
  },
});

/**
 * An `InputGroup` is an Input with optional start and end elements. The start and end elements are
 * usually icons or icon buttons. The `InputGroup` will add padding to the input so the
 * icons/buttons display correctly. This component uses `React.Children.map` and `React.cloneElement`
 * from the [React.Children](https://react.dev/reference/react/Children) API. This means all children
 * must be `InputGroup.*` components. Any other direct children will cause issues. You can add different
 * elements/components inside the `Input.Start` and `Input.End` subcomponents.
 *
 * ```tsx
 * <InputGroup>
 *   <InputGroup.Start as={SystemIcon} pointerEvents="none" icon={searchIcon} />
 *   <InputGroup.Input />
 *   <InputGroup.End>
 *     <TertiaryButton tabIndex={-1} icon={xIcon} size="small" />
 *   </InputGroup.End>
 * </InputGroup>
 * ```
 */
export const InputGroup = createComponent('div')({
  Component({children, ...elemProps}: ExtractProps<typeof Flex>, ref, Element) {
    const isRTL = useIsRTL();
    let paddingInlineStart: number;
    let paddingInlineEnd: number;

    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.type === InputGroupStart) {
        paddingInlineStart = (paddingInlineStart || 0) + (child.props.width || 40);
      }
      if (React.isValidElement(child) && child.type === InputGroupEnd) {
        paddingInlineEnd = (paddingInlineEnd || 0) + (child.props.width || 40);
      }
    });

    let start = 0;
    let end = paddingInlineEnd! || 0;

    const mappedChildren = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === InputGroupInput) {
          return React.cloneElement(child, {paddingInlineStart, paddingInlineEnd});
        }
        if (child.type === InputGroupStart) {
          const offset = start;
          start += child.props.width || 40;

          return React.cloneElement(child, {
            left: isRTL ? undefined : offset,
            right: isRTL ? offset : undefined,
          });
        }
        if (child.type === InputGroupEnd) {
          const offset = (end -= child.props.width || 40);

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
     * A component to show at the start of the input. The input's padding will be adjusted to not
     * overlap with this element. Use `width` (number of pixels only) to adjust the width offset.
     * The width defaults to 40px which is the correct width for icons or icon buttons.
     */
    Start: InputGroupStart,
    /**
     * The input to render. By default, this is a {@link TextInput}. Use the `as` prop to change the
     * component to be rendered.
     */
    Input: InputGroupInput,
    /**
     * A component to show at the end of the input. The input's padding will be adjusted to not
     * overlap with this element. Use `width` (number of pixels only) to adjust the width offset.
     * The width defaults to 40px which is the correct width for icons or icon buttons.
     */
    End: InputGroupEnd,
  },
});

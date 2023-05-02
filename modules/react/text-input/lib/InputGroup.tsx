import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {createComponent, ExtractProps, useIsRTL} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

import {TextInput} from './TextInput';

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
    return <Flex ref={ref} as={Element} width="100%" {...elemProps} />;
  },
});

// make sure we always use pixels if the input is a number - this is required for `calc`
const toPx = (input: string | number): string => {
  return typeof input === 'number' ? `${input}px` : input;
};

/**
 * An `InputGroup` is a container around a {@link TextInput} with optional start and end elements.
 * The start and end elements are usually icons or icon buttons. The `InputGroup` will add padding
 * to the input so the icons/buttons display correctly. This component uses `React.Children.map` and
 * `React.cloneElement` from the [React.Children](https://react.dev/reference/react/Children) API.
 * This means all children must be `InputGroup.*` components. Any other direct children will cause
 * issues. You can add different elements/components inside the
 * {@link InputGroupInnerStart InputGroup.InnerStart} and
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
    let paddingInlineStart: string;
    let paddingInlineEnd: string;
    const offsetsStart: string[] = [];
    const offsetsEnd: string[] = [];

    React.Children.forEach(children, child => {
      if (React.isValidElement<any>(child) && child.type === InputGroupInnerStart) {
        const width = child.props.width || space.xl;
        offsetsStart.push(paddingInlineStart);
        paddingInlineStart = paddingInlineStart
          ? `calc(${toPx(paddingInlineStart)} + ${width})`
          : width;
      }
      if (React.isValidElement<any>(child) && child.type === InputGroupInnerEnd) {
        const width = child.props.width || space.xl;
        offsetsEnd.push(paddingInlineEnd);
        paddingInlineEnd = paddingInlineEnd ? `calc(${toPx(paddingInlineEnd)} + ${width})` : width;
      }
    });

    // reverse the end to ensure the elements appear in the right order
    offsetsEnd.reverse();

    let startIndex = 0;
    let endIndex = 0;

    const mappedChildren = React.Children.map(children, child => {
      if (React.isValidElement<any>(child)) {
        if (child.type === InputGroupInput) {
          return React.cloneElement(child, {paddingInlineStart, paddingInlineEnd});
        }
        if (child.type === InputGroupInnerStart) {
          const offset = offsetsStart[startIndex] || 0;
          startIndex++;

          return React.cloneElement(child, {
            left: isRTL ? undefined : offset,
            right: isRTL ? offset : undefined,
          });
        }
        if (child.type === InputGroupInnerEnd) {
          const offset = offsetsEnd[endIndex] || 0;
          endIndex++;

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
    InnerStart: InputGroupInnerStart,
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
    InnerEnd: InputGroupInnerEnd,
  },
});

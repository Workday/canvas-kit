import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';
import {Placement} from '@workday/canvas-kit-react/popup';
import React from 'react';

interface PopperControllerProps {
  marginLeftBtn: number;
  marginRightBtn: number;
  placement: Placement;
  children?: React.ReactNode;
  onSetPlacement: (value: Placement) => void;
  onSetMarginLeftBtn: (value: number) => void;
  onSetMarginRightBtn: (value: number) => void;
}

export const customViewport = {
  noAvailable: {
    name: 'No Available space',
    styles: {
      width: '200px',
      height: '100px',
    },
  },
  portrait: {
    name: 'Portrait',
    styles: {
      width: '500px',
      height: '950px',
    },
  },
  landscape: {
    name: 'Landscape',
    styles: {
      width: '950px',
      height: '500px',
    },
  },
};

export const PopperController = ({children, ...props}: PopperControllerProps) => {
  const {
    placement,
    marginLeftBtn,
    marginRightBtn,
    onSetPlacement,
    onSetMarginLeftBtn,
    onSetMarginRightBtn,
  } = props;

  return (
    <Flex padding={4} alignItems="center" flexDirection="column" overflow="scroll">
      <Flex gap="m" padding="xxs">
        <Flex.Item>
          <SecondaryButton size="small" onClick={() => onSetPlacement('top')}>
            Top
          </SecondaryButton>
        </Flex.Item>
        <Flex.Item>
          <SecondaryButton size="small" onClick={() => onSetPlacement('bottom')}>
            Bottom
          </SecondaryButton>
        </Flex.Item>
        <Flex.Item>
          <SecondaryButton size="small" onClick={() => onSetPlacement('left')}>
            Left
          </SecondaryButton>
        </Flex.Item>
        <Flex.Item>
          <SecondaryButton size="small" onClick={() => onSetPlacement('right')}>
            Right
          </SecondaryButton>
        </Flex.Item>
      </Flex>
      <Flex gap="xs" width={420} marginTop={20} textAlign="left">
        <Flex.Item>
          <input
            type="range"
            name="margin-left"
            min={0}
            max={200}
            defaultValue={0}
            value={marginLeftBtn}
            onChange={e => onSetMarginLeftBtn?.(parseInt(e.target.value, 10))}
          />
        </Flex.Item>
        <Flex.Item>
          <label htmlFor="margin-left">Move the trigger to the right-hand side</label>
        </Flex.Item>
      </Flex>
      <Flex gap="xs" width={420} marginTop={20} textAlign="left">
        <Flex.Item>
          <input
            type="range"
            name="margin-right"
            min={0}
            max={200}
            defaultValue={0}
            value={marginRightBtn}
            onChange={e => onSetMarginRightBtn?.(parseInt(e.target.value, 10))}
          />
        </Flex.Item>
        <Flex.Item>
          <label htmlFor="margin-right">Move the trigger to the left-hand side</label>
        </Flex.Item>
      </Flex>
      <BodyText size="small" marginTop={20} textAlign="center" fontWeight="bold">
        Placement: {placement}
      </BodyText>
      {children}
    </Flex>
  );
};

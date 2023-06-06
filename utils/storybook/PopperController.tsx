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
      width: '660px',
      height: '1000px',
    },
  },
  landscape: {
    name: 'Landscape',
    styles: {
      width: '1000px',
      height: '660px',
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
            top
          </SecondaryButton>
        </Flex.Item>
        <Flex.Item>
          <SecondaryButton size="small" onClick={() => onSetPlacement('bottom')}>
            bottom
          </SecondaryButton>
        </Flex.Item>
        <Flex.Item>
          <SecondaryButton size="small" onClick={() => onSetPlacement('left')}>
            left
          </SecondaryButton>
        </Flex.Item>
        <Flex.Item>
          <SecondaryButton size="small" onClick={() => onSetPlacement('right')}>
            right
          </SecondaryButton>
        </Flex.Item>
      </Flex>
      <Flex gap="xs" width={420} marginTop={20} textAlign="left">
        <Flex.Item>
          <input
            type="range"
            data-testid="slide-right"
            id="margin-left"
            min={0}
            max={700}
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
            data-testid="slide-left"
            id="margin-right"
            min={0}
            max={700}
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

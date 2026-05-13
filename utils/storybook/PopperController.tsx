import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Placement} from '@workday/canvas-kit-react/popup';
import {BodyText} from '@workday/canvas-kit-react/text';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    <Flex
      cs={{
        padding: system.padding.xxs,
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'scroll',
      }}
    >
      <Flex cs={{gap: system.gap.lg, padding: system.padding.xs}}>
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
      <Flex
        cs={{
          gap: system.gap.xs,
          width: px2rem(420),
          marginBlockStart: system.gap.lg,
          textAlign: 'left',
        }}
      >
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
      <Flex
        cs={{
          gap: system.gap.xs,
          width: px2rem(420),
          marginBlockStart: system.gap.lg,
          textAlign: 'left',
        }}
      >
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
      <BodyText
        size="small"
        cs={{
          marginBlockStart: system.gap.lg,
          textAlign: 'center',
          fontWeight: system.fontWeight.bold,
        }}
      >
        Placement: {placement}
      </BodyText>
      {children}
    </Flex>
  );
};

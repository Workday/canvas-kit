import {SecondaryButton} from '@workday/canvas-kit-react/button';
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
    <div
      style={{
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'scroll',
      }}
    >
      <div
        style={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 24px'}}
      >
        <SecondaryButton size="small" onClick={() => onSetPlacement('top')}>
          Top
        </SecondaryButton>
        <SecondaryButton size="small" onClick={() => onSetPlacement('bottom')}>
          Bottom
        </SecondaryButton>
        <SecondaryButton size="small" onClick={() => onSetPlacement('left')}>
          Left
        </SecondaryButton>
        <SecondaryButton size="small" onClick={() => onSetPlacement('right')}>
          Right
        </SecondaryButton>
      </div>
      <div
        style={{
          marginTop: 24,
          textAlign: 'left',
          width: 320,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="range"
          name="margin-left"
          min={0}
          max={200}
          defaultValue={0}
          value={marginLeftBtn}
          onChange={e => onSetMarginLeftBtn?.(parseInt(e.target.value, 10))}
        />
        <label htmlFor="margin-left">Move the trigger to right</label>
      </div>
      <div
        style={{
          marginTop: 16,
          textAlign: 'left',
          width: 320,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="range"
          name="margin-right"
          min={0}
          max={200}
          defaultValue={0}
          value={marginRightBtn}
          onChange={e => onSetMarginRightBtn?.(parseInt(e.target.value, 10))}
        />
        <label htmlFor="margin-right">Move the trigger to left</label>
      </div>
      <p style={{marginTop: 20, textAlign: 'center', fontWeight: 'bold'}}>Placement: {placement}</p>
      {children}
    </div>
  );
};

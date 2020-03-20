/// <reference types="@testing-library/jest-dom/extend-expect" />

import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';

import Tooltip, {useTooltip} from '../lib/Tooltip';

const TooltipWithHook = () => {
  const {targetProps, tooltipProps} = useTooltip();

  return (
    <>
      <button {...targetProps}>Hover</button>
      <Tooltip {...tooltipProps}>Tooltip Content</Tooltip>
    </>
  );
};

describe('Tooltip', () => {
  afterEach(cleanup);

  it('should spread extra props on the element', async () => {
    const {container} = render(<Tooltip data-propspread="test" />);
    const tooltip = container.firstElementChild;

    expect(tooltip).toHaveAttribute('role', 'tooltip');
  });

  describe('useToolip', () => {
    it('should add aria attributes to correlate the target and the tooltip', async () => {
      const rendered = render(<TooltipWithHook />);

      const target = await rendered.findByText('Hover');
      const tooltip = await rendered.findByRole('tooltip');

      await fireEvent.mouseOver(target); // assign the ID to the tooltip

      expect(tooltip).toHaveAttribute('id');
      const id = tooltip.getAttribute('id');
      expect(target).toHaveAttribute('aria-describedby', id);
    });
  });
});

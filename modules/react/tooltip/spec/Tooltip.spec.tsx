import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import {Tooltip} from '..';

describe('Tooltip', () => {
  describe('when "type" is "label"', () => {
    it('should render an aria-label', () => {
      render(
        <Tooltip title="Add">
          <span>Test Text</span>
        </Tooltip>
      );

      expect(screen.getByText('Test Text')).toHaveAttribute('aria-label', 'Add');
    });
  });

  describe('when "type" is "describe"', () => {
    jest.useFakeTimers();
    it('should render aria-describedby', () => {
      render(
        <Tooltip type="describe" title="This is an extra description">
          <span>Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByText('Test Text')); // triggers the tooltip

      jest.advanceTimersByTime(500); // advance the timer by the amount of delay time
      expect(screen.getByText('Test Text')).toHaveAttribute('aria-describedby');

      const id = screen.getByText('Test Text').getAttribute('aria-describedby');
      expect(screen.getByRole('tooltip')).toHaveAttribute('id', id);
    });
    jest.clearAllTimers();
  });

  describe('when "type" is "muted"', () => {
    it('should not render an aria-label', () => {
      render(
        <Tooltip type="muted" title="Tooltip Text">
          <span>Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByText('Test Text'));

      expect(screen.getByText('Test Text')).not.toHaveAttribute('aria-label');
    });

    it('should not override an aria-label', () => {
      render(
        <Tooltip type="muted" title="Tooltip Text">
          <span aria-label="Test Label">Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByText('Test Text'));

      expect(screen.getByText('Test Text')).toHaveAttribute('aria-label', 'Test Label');
    });
  });

  describe('when "showDelay" is passed in', () => {
    jest.useFakeTimers();
    it('should render the tooltip after the delay', () => {
      render(
        <Tooltip type="describe" title="Delayed Tooltip Text" showDelay={1000}>
          <span>Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByText('Test Text')); // triggers the tooltip

      expect(screen.queryByText('Delayed Tooltip Text')).toBeNull(); // tooltip is not shown before the delay

      jest.advanceTimersByTime(1000); // advance the timer by the amount of delay time
      expect(screen.getByText('Delayed Tooltip Text')).toBeInTheDocument();
    });
    jest.clearAllTimers();
  });

  ['onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onClick', 'onMouseOver'].forEach(key => {
    it(`should call the ${key} callback functions provided to the wrapped component`, () => {
      const fn = jest.fn();
      render(
        <Tooltip title="test">
          <span {...{[key]: fn}}>Test</span>
        </Tooltip>
      );

      // convert from `onMouseEnter` to `mouseEnter`, etc
      const action = key.replace(
        /^on([A-Z])([a-z]+)/,
        (_, first, rest) => first.toLowerCase() + rest
      );

      fireEvent[action](screen.getByText('Test'));

      expect(fn).toBeCalled();
    });
  });
});

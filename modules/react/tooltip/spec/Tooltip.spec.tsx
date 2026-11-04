import {fireEvent, render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import {Tooltip} from '..';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

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
    it('should render aria-describedby', () => {
      render(
        <Tooltip type="describe" title="This is an extra description">
          <span>Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByText('Test Text')); // triggers the tooltip

      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the amount of delay time
      });
      const id = screen.getByText('Test Text').getAttribute('aria-describedby');
      expect(screen.getByText('Test Text')).toHaveAttribute('aria-describedby', id);

      expect(screen.getByRole('tooltip')).toHaveAttribute('id', id);
    });
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
    it('should render the tooltip after the delay', () => {
      render(
        <Tooltip type="describe" title="Delayed Tooltip Text" showDelay={1000}>
          <span>Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByText('Test Text')); // triggers the tooltip

      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the amount less than delay time
      });
      expect(screen.queryByText('Delayed Tooltip Text')).toBeNull(); // tooltip is not shown before the delay

      act(() => {
        vi.advanceTimersByTime(700); // advance the timer by the amount of total delay time
      });
      expect(screen.getByText('Delayed Tooltip Text')).toBeInTheDocument();
    });
  });

  describe('when "hideDelay" is passed in', () => {
    vi.useFakeTimers();
    it('should render the tooltip after the delay', () => {
      render(
        <Tooltip type="describe" title="Delayed Tooltip Text" hideDelay={300}>
          <span>Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByText('Test Text')); // triggers the tooltip

      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the delay time
      });
      expect(screen.getByText('Delayed Tooltip Text')).toBeInTheDocument();

      fireEvent.mouseLeave(screen.getByText('Test Text')); // triggers hiding the tooltip
      act(() => {
        vi.advanceTimersByTime(100); // advance the timer by the amount less than hide delay time
      });
      expect(screen.getByText('Delayed Tooltip Text')).toBeInTheDocument(); // tooltip is still shown

      act(() => {
        vi.advanceTimersByTime(200); // advance the timer by the total amount of the hide delay time
      });
      expect(screen.queryByText('Delayed Tooltip Text')).toBeNull(); // tooltip is hidden after the delay
    });
  });

  describe('when the interactive target is activated with the keyboard', () => {
    it('should hide the tooltip on Enter', () => {
      render(
        <Tooltip title="Move row">
          <button>Move row</button>
        </Tooltip>
      );

      fireEvent.focus(screen.getByRole('button')); // triggers the tooltip
      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the delay time
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();

      fireEvent.keyDown(screen.getByRole('button'), {key: 'Enter'});
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should hide the tooltip on Space', () => {
      render(
        <Tooltip title="Move row">
          <button>Move row</button>
        </Tooltip>
      );

      fireEvent.focus(screen.getByRole('button')); // triggers the tooltip
      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the delay time
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();

      fireEvent.keyDown(screen.getByRole('button'), {key: ' '});
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should keep the tooltip open when Space is typed into a text input', () => {
      render(
        <Tooltip title="Search hint">
          <input type="text" aria-label="Search" />
        </Tooltip>
      );

      fireEvent.focus(screen.getByRole('textbox')); // triggers the tooltip
      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the delay time
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();

      fireEvent.keyDown(screen.getByRole('textbox'), {key: ' '});
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('should keep the tooltip open when Space is typed into text entry inside an interactive target', () => {
      render(
        <Tooltip title="Search hint">
          <div tabIndex={0}>
            <input type="text" aria-label="Search" />
          </div>
        </Tooltip>
      );

      fireEvent.focus(screen.getByRole('textbox')); // triggers the tooltip
      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the delay time
      });
      expect(screen.getByRole('tooltip')).toBeInTheDocument();

      fireEvent.keyDown(screen.getByRole('textbox'), {key: ' '});
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('should not reopen the tooltip after keyboard activation before the show delay', () => {
      render(
        <Tooltip title="Move row">
          <button>Move row</button>
        </Tooltip>
      );

      const button = screen.getByRole('button');
      fireEvent.focus(button); // starts the tooltip's show timer
      fireEvent.keyDown(button, {key: 'Enter'});
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(300); // advance the timer by the show delay
      });
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should not show the tooltip from an earlier mouse-enter timer after keyboard activation', () => {
      render(
        <Tooltip title="Move row">
          <button>Move row</button>
        </Tooltip>
      );

      const button = screen.getByRole('button');
      fireEvent.mouseEnter(button); // starts the show timer
      fireEvent.focus(button); // starts a second show timer, which must replace the first
      fireEvent.keyDown(button, {key: 'Enter'}); // cancels the pending show timer
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(300); // advance past the show delay of the earlier timer
      });
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should call the onKeyDown callback provided to the wrapped component and still hide on Enter', () => {
    const fn = vi.fn();
    render(
      <Tooltip title="Move row">
        <button onKeyDown={fn}>Move row</button>
      </Tooltip>
    );

    fireEvent.focus(screen.getByRole('button')); // triggers the tooltip
    act(() => {
      vi.advanceTimersByTime(300); // advance the timer by the delay time
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole('button'), {key: 'Enter'});
    expect(fn).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  [
    'onMouseEnter',
    'onMouseLeave',
    'onFocus',
    'onBlur',
    'onClick',
    'onMouseOver',
    'onKeyDown',
  ].forEach(key => {
    it(`should call the ${key} callback functions provided to the wrapped component`, () => {
      const fn = vi.fn();
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

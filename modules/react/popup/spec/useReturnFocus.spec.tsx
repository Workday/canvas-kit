import {act, renderHook} from '@testing-library/react-hooks';
import React from 'react';

import {usePopupModel, useReturnFocus} from '@workday/canvas-kit-react/popup';

describe('useReturnFocus', () => {
  let trigger: HTMLButtonElement;
  let popup: HTMLButtonElement;
  let target: HTMLButtonElement;

  beforeEach(() => {
    vi.useFakeTimers();
    trigger = document.createElement('button');
    popup = document.createElement('button');
    target = document.createElement('button');
    document.body.append(trigger, popup, target);
    trigger.focus();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    trigger.remove();
    popup.remove();
    target.remove();
  });

  function setup(returnFocusRef?: React.RefObject<HTMLButtonElement>) {
    return renderHook(() => {
      const model = usePopupModel({returnFocusRef});
      useReturnFocus(model);
      return model;
    });
  }

  it('returns focus to a custom trigger without a target ref', () => {
    const {result} = setup();
    act(() => result.current.events.show());
    popup.focus();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(trigger).toHaveFocus();
  });

  it('captures the focused element again on each opening', () => {
    const {result} = setup();
    act(() => result.current.events.show());
    popup.focus();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(trigger).toHaveFocus();

    popup.focus();
    act(() => result.current.events.show());
    trigger.focus();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(popup).toHaveFocus();
  });

  it('prioritizes an explicit returnFocusRef', () => {
    const {result} = setup({current: popup});
    act(() => result.current.events.show());
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(popup).toHaveFocus();
  });

  it('preserves an explicit empty returnFocusRef', () => {
    const {result} = setup({current: null});
    (result.current.state.targetRef as React.MutableRefObject<HTMLButtonElement>).current = target;
    act(() => result.current.events.show());
    popup.focus();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(popup).toHaveFocus();
  });

  it('falls back to the registered target when the previous focus is removed', () => {
    const {result} = setup();
    (result.current.state.targetRef as React.MutableRefObject<HTMLButtonElement>).current = target;
    act(() => result.current.events.show());
    popup.focus();
    trigger.remove();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(target).toHaveFocus();
  });

  it('uses the current target when the target was replaced while open', () => {
    const {result} = setup();
    const targetRef = result.current.state.targetRef as React.MutableRefObject<HTMLButtonElement>;
    targetRef.current = trigger;
    act(() => result.current.events.show());
    popup.focus();
    trigger.remove();
    targetRef.current = target;
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(target).toHaveFocus();
  });

  it('retains the connected target when its ref is cleared before cleanup', () => {
    const {result, unmount} = setup();
    const targetRef = result.current.state
      .targetRef as React.MutableRefObject<HTMLButtonElement | null>;
    targetRef.current = target;
    act(() => result.current.events.show());
    popup.focus();
    trigger.remove();
    targetRef.current = null;
    unmount();
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(target).toHaveFocus();
  });

  it('does not replace an explicit returnFocusRef with the target', () => {
    const {result} = setup({current: trigger});
    (result.current.state.targetRef as React.MutableRefObject<HTMLButtonElement>).current = target;
    act(() => result.current.events.show());
    popup.focus();
    trigger.remove();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(popup).toHaveFocus();
  });

  it('does not focus a target removed before the next frame', () => {
    const {result} = setup();
    act(() => result.current.events.show());
    popup.focus();
    const focus = vi.spyOn(trigger, 'focus');
    act(() => result.current.events.hide());
    trigger.remove();
    target.focus();
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(focus).not.toHaveBeenCalled();
    expect(target).toHaveFocus();
  });

  it('uses the registered target when the document body had focus', () => {
    trigger.blur();
    const {result} = setup();
    (result.current.state.targetRef as React.MutableRefObject<HTMLButtonElement>).current = trigger;
    act(() => result.current.events.show());
    popup.focus();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(trigger).toHaveFocus();
  });
});

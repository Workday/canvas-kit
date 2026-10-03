import {act, renderHook} from '@testing-library/react-hooks';
import React from 'react';

import {usePopupModel, useReturnFocus} from '@workday/canvas-kit-react/popup';

describe('useReturnFocus', () => {
  let trigger: HTMLButtonElement;
  let popup: HTMLButtonElement;

  beforeEach(() => {
    vi.useFakeTimers();
    trigger = document.createElement('button');
    popup = document.createElement('button');
    document.body.append(trigger, popup);
    trigger.focus();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    trigger.remove();
    popup.remove();
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
    act(() => result.current.events.show());
    popup.focus();
    act(() => result.current.events.hide());
    act(() => {
      vi.runOnlyPendingTimers();
    });
    expect(popup).toHaveFocus();
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

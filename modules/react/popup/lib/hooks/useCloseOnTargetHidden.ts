import React from 'react';

import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {usePopupModel} from '@workday/canvas-kit-react/popup';

function getScrollParent(element: HTMLElement): HTMLElement {
  if (element === document.body || !element.parentElement) {
    return element;
  }
  const styles = getComputedStyle(element);

  if (
    styles.overflowY === 'scroll' ||
    styles.overflowY === 'auto' ||
    styles.overflowX === 'scroll' ||
    styles.overflowX === 'auto'
  ) {
    return element;
  }

  return getScrollParent(element.parentElement);
}

export const useCloseOnTargetHidden = createElemPropsHook(usePopupModel)(model => {
  const visible = model.state.visibility !== 'hidden';

  const callback: IntersectionObserverCallback = React.useCallback(
    entries => {
      if (entries[0].intersectionRatio < 0.5) {
        model.events.hide();
      }
    },
    [model.events]
  );

  React.useLayoutEffect(() => {
    if (!visible || !model.state.targetRef.current) {
      return;
    }

    const target = model.state.targetRef.current;
    const scrollParent = getScrollParent(target);

    // eslint-disable-next-line compat/compat
    const observer = new IntersectionObserver(callback, {
      root: scrollParent,
      threshold: 0.5,
    });

    observer.observe(model.state.targetRef.current);
    return () => {
      observer.disconnect();
    };
  }, [callback, model.state.targetRef, visible]);

  return {};
});

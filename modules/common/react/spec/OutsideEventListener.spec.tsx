import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {OutsideEventListener, OutsideEventListenerProps} from '../lib/OutsideEventListener';

describe('OutsideEventListener', () => {
  let onInsideClick: jest.Mock;

  const renderOutsideEventListener = (props?: Partial<OutsideEventListenerProps>) => {
    return render(
      <div id="outside">
        <OutsideEventListener {...props}>
          <div id="inside" onClick={onInsideClick} />
        </OutsideEventListener>
      </div>
    );
  };

  describe('onOutsideClick', () => {
    it('should be called when clicking outside', () => {
      const onOutsideClick = jest.fn();
      const {container, unmount} = renderOutsideEventListener({onOutsideClick});

      fireEvent.click(container.querySelector('#outside')!);
      expect(onOutsideClick).toHaveBeenCalled();
      unmount();
    });

    it('should NOT be called when clicking inside', () => {
      const onOutsideClick = jest.fn();
      const {container, unmount} = renderOutsideEventListener({onOutsideClick});

      fireEvent.click(container.querySelector('#inside')!);
      expect(onOutsideClick).not.toHaveBeenCalled();
      unmount();
    });

    it('should call original click handlers on inside clicks', () => {
      onInsideClick = jest.fn();
      const {container, unmount} = renderOutsideEventListener();

      fireEvent.click(container.querySelector('#outside')!);
      expect(onInsideClick).not.toHaveBeenCalled();

      fireEvent.click(container.querySelector('#inside')!);
      expect(onInsideClick).toHaveBeenCalled();
      unmount();
    });
  });

  describe('onEscape', () => {
    it('should be called when Escape is pressed', () => {
      const onEscape = jest.fn();
      const {container, unmount} = renderOutsideEventListener({onEscape});

      fireEvent.keyDown(container.querySelector('#outside')!, {key: 'Escape'});
      expect(onEscape).toHaveBeenCalled();
      unmount();
    });

    it('should NOT be called when a random key is pressed', () => {
      const onEscape = jest.fn();
      const {container, unmount} = renderOutsideEventListener({onEscape});

      fireEvent.keyDown(container.querySelector('#outside')!, {key: 'Tab'});
      expect(onEscape).not.toHaveBeenCalled();
      unmount();
    });
  });
});

jest.mock('react-dom', () => ({
  createPortal: jest.fn().mockImplementation(children => children),
}));

// https://github.com/FezVrasta/popper.js#how-to-use-popperjs-in-jest
jest.mock('popper.js', () => {
  return jest.fn().mockImplementation(() => {
    return {
      destroy: () => {}, // eslint-disable-line no-empty-function
    };
  });
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import * as PopperJS from 'popper.js';
import {Popper, PopperProps} from '../lib/Popper';

describe('Popper', () => {
  const dataTestId = 'TESTY_TEST';

  const renderPopper = (props?: Partial<PopperProps>) => {
    return mount(
      <Popper anchorElement={document.body} data-test-id={dataTestId} {...props}>
        <div id="content" />
      </Popper>
    );
  };

  test('should render with Popper.js inside a portal', () => {
    const component = renderPopper();

    expect(PopperJS).toHaveBeenCalled();
    expect(ReactDOM.createPortal).toHaveBeenCalled();
    expect(component.find('#content').length).toBe(1);
    component.unmount();
  });

  test('should render with Popper.js inline when portal is false', () => {
    const component = renderPopper({portal: false});

    expect(PopperJS).toHaveBeenCalled();
    expect(ReactDOM.createPortal).not.toHaveBeenCalled();
    expect(component.find('#content').length).toBe(1);
    component.unmount();
  });

  test('should render nothing when open is false', () => {
    const component = renderPopper({open: false});

    expect(PopperJS).not.toHaveBeenCalled();
    expect(ReactDOM.createPortal).not.toHaveBeenCalled();
    expect(component.find('#content').length).toBe(0);
    component.unmount();
  });

  test('should use the given container for the portal', () => {
    const containerElement = document.body;
    const component = renderPopper({containerElement});

    expect(ReactDOM.createPortal).toHaveBeenCalledWith(expect.anything(), containerElement);
    component.unmount();
  });

  test('should pass placement to Popper.js', () => {
    const placement = 'bottom-start';
    const component = renderPopper({placement});

    expect(PopperJS).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.objectContaining({placement})
    );
    component.unmount();
  });

  test('should pass all popperOptions to Popper.js', () => {
    const popperOptions = {eventsEnabled: false};
    const component = renderPopper({popperOptions});

    expect(PopperJS).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.objectContaining(popperOptions)
    );
    component.unmount();
  });

  test('should include className attribute', () => {
    const className = 'classy-popper';
    const component = renderPopper({className});

    expect(component.find(`div.${className}`).length).toBe(1);
    component.unmount();
  });

  test('should include data-* attributes', () => {
    const component = renderPopper();

    expect(component.find(`div[data-test-id="${dataTestId}"]`).length).toBe(1);
    component.unmount();
  });
});

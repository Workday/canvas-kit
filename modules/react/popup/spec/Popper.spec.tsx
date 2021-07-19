import React from 'react';
import {render, getByTestId, act} from '@testing-library/react';

import {Popper} from '../';

describe('Popper', () => {
  const ref = {current: null};

  it('should portal the popper content', () => {
    render(<div data-testid="anchor">Anchor</div>);
    const anchorElement = getByTestId(document.body, 'anchor');

    const {container} = render(
      <Popper anchorElement={anchorElement} ref={ref}>
        Contents
      </Popper>
    );

    expect(container).not.toContainElement(ref.current);
    expect(document.body).toContainElement(ref.current);
  });

  it('should not portal the popper when `portal` is set to `false`', () => {
    render(<div data-testid="anchor">Anchor</div>);
    const anchorElement = getByTestId(document.body, 'anchor');

    const {container} = render(
      <Popper anchorElement={anchorElement} portal={false}>
        <div data-testid="contents">Contents</div>
      </Popper>
    );

    expect(container).toContainElement(getByTestId(document.body, 'contents'));
  });

  it('should render children', () => {
    const {getByTestId} = render(
      <Popper anchorElement={document.body} ref={ref}>
        Contents
      </Popper>
    );

    expect(ref.current).toContainHTML('Contents');
  });

  it('should render children as a render prop', () => {
    const {getByTestId} = render(
      <Popper anchorElement={document.body} ref={ref}>
        {() => 'Contents'}
      </Popper>
    );

    expect(ref.current).toContainHTML('Contents');
  });

  it('should call the children render prop with the placement', () => {
    const renderProp = jest.fn();
    render(
      <Popper anchorElement={document.body} placement="bottom">
        {renderProp}
      </Popper>
    );

    expect(renderProp).toBeCalledWith({placement: 'bottom'});
  });

  it('should call the children render prop with the placement on rerender', async () => {
    const renderProp = jest.fn();
    const PopperComponent = ({placement}) => {
      const anchor = React.useRef(null);
      return (
        <>
          <div style={{position: 'absolute', top: 100, left: 100}} ref={anchor}>
            Anchor
          </div>
          <Popper anchorElement={anchor} placement={placement}>
            {renderProp}
          </Popper>
        </>
      );
    };
    const screen = render(<PopperComponent placement="bottom" />);

    // force PopperJS to run
    // eslint-disable-next-line compat/compat
    await act(() => new Promise(requestAnimationFrame));

    expect(renderProp).toBeCalledWith({placement: 'bottom'});

    screen.rerender(<PopperComponent placement="top" />);

    // force PopperJS to run
    // eslint-disable-next-line compat/compat
    await act(() => new Promise(requestAnimationFrame));

    expect(renderProp).toBeCalledWith({placement: 'top'});
  });

  it('should only create a Popper instance once and only call onFirstUpdate once on rerenders', async () => {
    const onFirstUpdate = jest.fn();
    const screen = render(
      <Popper anchorElement={document.body} popperOptions={{onFirstUpdate}} placement="top">
        Contents
      </Popper>
    );

    // force PopperJS to run
    // eslint-disable-next-line compat/compat
    await act(() => new Promise(requestAnimationFrame));

    expect(onFirstUpdate).toHaveBeenCalledTimes(1);

    screen.rerender(
      <Popper anchorElement={document.body} popperOptions={{onFirstUpdate}} placement="bottom">
        Contents
      </Popper>
    );

    // force PopperJS to run
    // eslint-disable-next-line compat/compat
    await act(() => new Promise(requestAnimationFrame));

    expect(onFirstUpdate).toHaveBeenCalledTimes(1);
  });
});

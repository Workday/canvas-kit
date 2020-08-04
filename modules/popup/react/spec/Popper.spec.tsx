/// <reference types="@testing-library/jest-dom/extend-expect" />

import React from 'react';
import {render, getByTestId} from '@testing-library/react';

import {Popper} from '../';

describe('Popper', () => {
  it('should portal the popper content', () => {
    render(<div data-testid="anchor">Anchor</div>);
    const anchorElement = getByTestId(document.body, 'anchor');

    const {container} = render(
      <Popper anchorElement={anchorElement} data-testid="popper">
        Contents
      </Popper>
    );

    const popper = getByTestId(document.body, 'popper');

    expect(container).not.toContainElement(popper);
  });

  it('should not portal the popper when `portal` is set to `false`', () => {
    render(<div data-testid="anchor">Anchor</div>);
    const anchorElement = getByTestId(document.body, 'anchor');

    const {container} = render(
      <Popper anchorElement={anchorElement} data-testid="popper" portal={false}>
        Contents
      </Popper>
    );

    const popper = getByTestId(document.body, 'popper');

    expect(container).toContainElement(popper);
  });

  it('should render children', () => {
    const {getByTestId} = render(
      <Popper anchorElement={document.body} data-testid="popper">
        Contents
      </Popper>
    );

    expect(getByTestId('popper')).toContainHTML('Contents');
  });

  it('should render children as a render prop', () => {
    const {getByTestId} = render(
      <Popper anchorElement={document.body} data-testid="popper">
        {() => 'Contents'}
      </Popper>
    );

    expect(getByTestId('popper')).toContainHTML('Contents');
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

  it('should forward extra properties to the containing element', () => {
    const {getByTestId} = render(
      <Popper anchorElement={document.body} data-testid="popper" data-extra="test">
        Contents
      </Popper>
    );

    expect(getByTestId('popper')).toHaveAttribute('data-extra', 'test');
  });
});

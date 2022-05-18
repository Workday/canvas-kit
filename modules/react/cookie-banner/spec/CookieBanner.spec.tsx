import * as React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';

import CookieBanner from '../lib/CookieBanner';

function noop() {
  // noop
}

describe('Cookie Banner', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  it('should display a custom children', () => {
    render(
      <CookieBanner
        onAccept={noop}
        notice={
          <React.Fragment>
            {CookieBanner.DefaultNotice} Please review our{' '}
            <a href="https://www.workday.com/en-us/privacy.html" target="__blank">
              Privacy Policy
            </a>
            .
          </React.Fragment>
        }
      />
    );

    expect(screen.getByRole('link')).toContainHTML('Privacy Policy');
  });

  it('should call "onAccept" event the button is clicked', () => {
    render(<CookieBanner onAccept={cb} />);

    fireEvent.click(screen.getByRole('button'));
    expect(cb).toHaveBeenCalled();
  });

  it('should call "onClickSettings" when Cookie Settings button is clicked', () => {
    render(<CookieBanner onAccept={noop} onClickSettings={cb} />);

    fireEvent.click(screen.getByRole('button', {name: 'Cookie Settings'}));
    expect(cb).toHaveBeenCalled();
  });

  it('should forward extra props to the containing component', () => {
    const {container} = render(<CookieBanner onAccept={noop} data-propspread="test" />);

    // The containing element is not a semantic element
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {IconButton} from '@workday/canvas-kit-react/button';
import {exportIcon, fullscreenIcon, imageIcon} from '@workday/canvas-system-icons-web';

import PageHeader from '../lib/PageHeader';

describe('Page Header', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  it('should render a title', () => {
    const testTitle = 'Page Header Title';
    render(<PageHeader title={testTitle} />);

    expect(screen.getByRole('heading')).toContainHTML(testTitle);
  });

  it('should have a maxWidth in capWidth contexts', () => {
    render(<PageHeader title="capWidth Context" capWidth={true} />);

    expect(screen.getByRole('banner').firstChild).toHaveStyleRule('max-width', '1440px');
  });

  it('should have a maxWidth in capWidth contexts', () => {
    render(<PageHeader title="capWidth Context" capWidth={true} />);
    expect(screen.getByRole('banner').firstChild).toHaveStyleRule('max-width', '1440px');
  });

  it('should render children', () => {
    render(
      <PageHeader title="With Children">
        <IconButton icon={exportIcon} aria-label="Export" />
        <IconButton icon={fullscreenIcon} aria-label="Fullscreen" />
      </PageHeader>
    );

    screen.debug(); //?

    expect(screen.getByRole('button', {name: 'Export'})).toContainHTML('<svg');
    expect(screen.getByRole('button', {name: 'Fullscreen'})).toContainHTML('<svg');
  });

  it('should spread extra props to first child of container element', () => {
    render(<PageHeader title="Page Header" data-propspread="test" />);

    expect(screen.getByRole('banner').firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

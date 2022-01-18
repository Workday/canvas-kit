import * as React from 'react';
import Header from '../lib/Header';
import {IconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

import {screen, render, fireEvent} from '@testing-library/react';

describe('Header', () => {
  it('should spread extra props to containing element', () => {
    render(<Header data-testid="test" data-propspread="test" />);

    expect(screen.getByTestId('test')).toHaveAttribute('data-propspread', 'test');
  });

  describe('How Header children render', () => {
    it('should render non-element children as is', () => {
      const text = 'not an element';

      const {container} = render(<Header>{text}</Header>);

      expect(container).toContainHTML(text);
    });

    it('should render children as is', () => {
      const children = <div>Test</div>;

      const {container} = render(<Header>{children}</Header>);

      expect(container).toContainHTML('<div>Test</div>');
    });

    it('should render a hamburger menu with a justify icon when "isCollapsed" is true', () => {
      render(<Header isCollapsed={true} />);

      expect(screen.getByRole('button', {name: 'Open Menu'})).toContainHTML('wd-icon-justify');
    });

    describe('when rendered in collapsed mode', () => {
      it('should call "onMenuClick" when the "menuToggle" component does not have an "onClick" prop', () => {
        const onMenuClick = jest.fn();
        render(
          <Header
            isCollapsed={true}
            onMenuClick={onMenuClick}
            menuToggle={<IconButton aria-label="Activity Stream" icon={activityStreamIcon} />}
          />
        );

        fireEvent.click(screen.getByRole('button', {name: 'Activity Stream'}));

        expect(onMenuClick).toHaveBeenCalled();
      });

      it('should not call "onMenuClick" when the "menuToggle" component has an "onClick" prop', () => {
        const onMenuClick = jest.fn();
        const onIconClick = jest.fn();
        render(
          <Header
            isCollapsed={true}
            onMenuClick={onMenuClick}
            menuToggle={
              <IconButton
                aria-label="Activity Stream"
                icon={activityStreamIcon}
                onClick={onIconClick}
              />
            }
          />
        );

        fireEvent.click(screen.getByRole('button', {name: 'Activity Stream'}));

        expect(onMenuClick).not.toHaveBeenCalled();
        expect(onIconClick).toHaveBeenCalled();
      });

      it('should not overwrite the "menuToggle" onClick when "onMenuClick" is not provided', () => {
        const onIconClick = jest.fn();
        render(
          <Header
            isCollapsed={true}
            menuToggle={
              <IconButton
                aria-label="Activity Stream"
                icon={activityStreamIcon}
                onClick={onIconClick}
              />
            }
          />
        );

        fireEvent.click(screen.getByRole('button', {name: 'Activity Stream'}));

        expect(onIconClick).toHaveBeenCalled();
      });
    });
  });
});

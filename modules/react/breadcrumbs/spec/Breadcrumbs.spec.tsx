import {act, fireEvent, render, screen} from '@testing-library/react';
import * as React from 'react';

import {Breadcrumbs, useBreadcrumbsModel} from '../index';
import {reorganizeHiddenItems} from '../lib/hooks/utils';

interface BreadcrumbItem {
  id: string;
  link?: string;
  text: string;
}

const BreadcrumbsWithOverflow = ({
  items = [
    {id: '1', text: 'Home', link: '/'},
    {id: '2', text: 'Second Link', link: '#'},
    {id: '3', text: 'Third Link', link: '#'},
    {id: '4', text: 'Fourth Link', link: '#'},
    {id: '5', text: 'Fifth Link', link: '#'},
    {id: '6', text: 'Sixth Link', link: '#'},
    {id: '7', text: 'Current'},
  ],
  simulateOverflow = false,
}: {
  items?: BreadcrumbItem[];
  simulateOverflow?: boolean;
}) => {
  const model = useBreadcrumbsModel({items});

  React.useEffect(() => {
    if (simulateOverflow) {
      act(() => {
        model.events.addItemSize({id: '1', width: 100, height: 0});
        model.events.addItemSize({id: '2', width: 100, height: 0});
        model.events.addItemSize({id: '3', width: 100, height: 0});
        model.events.addItemSize({id: '4', width: 100, height: 0});
        model.events.addItemSize({id: '5', width: 100, height: 0});
        model.events.addItemSize({id: '6', width: 100, height: 0});
        model.events.addItemSize({id: '7', width: 100, height: 0});
        model.events.setOverflowTargetSize({width: 40, height: 0});
        model.events.setContainerSize({width: 300, height: 0});
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simulateOverflow]);

  return (
    <Breadcrumbs model={model} aria-label="Breadcrumbs">
      <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
        {item =>
          item.link ? (
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={item.link}>{item.text}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          ) : (
            <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
          )
        }
      </Breadcrumbs.List>
      <Breadcrumbs.Menu.Popper>
        <Breadcrumbs.Menu.Card>
          <Breadcrumbs.Menu.List>
            {(item: BreadcrumbItem) => (
              <Breadcrumbs.Menu.Item key={item.id} href={item.link}>
                {item.text}
              </Breadcrumbs.Menu.Item>
            )}
          </Breadcrumbs.Menu.List>
        </Breadcrumbs.Menu.Card>
      </Breadcrumbs.Menu.Popper>
    </Breadcrumbs>
  );
};

describe('Breadcrumbs Component', () => {
  it('should hide the overflow button offscreen when there is no overflow', () => {
    const {container} = render(<BreadcrumbsWithOverflow simulateOverflow={false} />);
    const button = container.querySelector('button[aria-label="More links"]') as HTMLButtonElement;
    expect(button).not.toBeNull();

    const parentLi = button.closest('li');
    expect(parentLi).not.toBeNull();
    // Verify that style is not spread as invalid DOM attributes and button is positioned offscreen
    expect(button.getAttribute('aria-hidden')).toBe('true');
    expect(button.getAttribute('tabindex')).toBe('-1');
    expect(parentLi?.getAttribute('position')).toBeNull();
    expect(parentLi?.getAttribute('left')).toBeNull();
    expect(parentLi?.style.position).toBe('absolute');
    expect(parentLi?.style.left).toBe('-99999px');
  });

  it('should render the overflow button and open popup menu with items when clicked', () => {
    const {container} = render(<BreadcrumbsWithOverflow simulateOverflow={true} />);
    const button = container.querySelector('button[aria-label="More links"]') as HTMLButtonElement;
    expect(button).not.toBeNull();

    act(() => {
      fireEvent.click(button);
    });

    const menu = screen.getByRole('menu');
    expect(menu).not.toBeNull();
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems.length).toBeGreaterThan(0);
  });

  it('should not crash when items is undefined in reorganizeHiddenItems', () => {
    expect(() => reorganizeHiddenItems(undefined as any, ['1', '2'])).not.toThrow();
    expect(reorganizeHiddenItems(undefined as any, ['1', '2'])).toEqual(['1', '2']);
  });

  it('should not crash when rendering Breadcrumbs without items prop', () => {
    const renderWithoutItems = () =>
      render(
        <Breadcrumbs aria-label="Breadcrumbs">
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.CurrentItem>Current</Breadcrumbs.CurrentItem>
          </Breadcrumbs.List>
        </Breadcrumbs>
      );

    expect(renderWithoutItems).not.toThrow();
  });
});

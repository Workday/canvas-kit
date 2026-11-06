import {render} from '@testing-library/react';
import * as React from 'react';

import {Breadcrumbs, useBreadcrumbsModel} from '../';

const items = [
  {id: '1', text: 'Home', link: '/'},
  {id: '2', text: 'Second Link', link: '#'},
  {id: '3', text: 'Current'},
];

const OverflowBreadcrumbs = () => {
  const model = useBreadcrumbsModel({items});
  return (
    <Breadcrumbs model={model} aria-label="Breadcrumbs">
      <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
        {(item: (typeof items)[number]) =>
          item.link ? (
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={item.link}>{item.text}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          ) : (
            <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
          )
        }
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};

describe('Breadcrumbs.OverflowButton', () => {
  it('should hide the overflow button with inline styles when no items overflow', () => {
    const {container} = render(<OverflowBreadcrumbs />);

    // jsdom has no layout, so nothing is measured as overflowing
    const button = container.querySelector('button[aria-label="More links"]')!;
    const listItem = button.closest('li')!;

    expect(button).toHaveAttribute('aria-hidden', 'true');
    expect(button).toHaveAttribute('tabindex', '-1');
    expect(listItem.style.position).toBe('absolute');
    expect(listItem.style.left).toBe('-99999px');
  });

  it('should not render the hidden styles as DOM attributes', () => {
    const {container} = render(<OverflowBreadcrumbs />);

    const listItem = container.querySelector('button[aria-label="More links"]')!.closest('li')!;

    expect(listItem).not.toHaveAttribute('position');
    expect(listItem).not.toHaveAttribute('left');
  });
});

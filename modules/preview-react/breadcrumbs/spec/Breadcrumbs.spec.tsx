import * as React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Breadcrumbs} from '../lib/Breadcrumbs';
const context = describe;

describe('Breadcrumbs', () => {
  context('when clicking a link in the breadcrumbs list', () => {
    it('should return the href for the item to the onAction handler', () => {
      const href = '/2019_Q2_financial_documents';
      const onActionHandler = jest.fn();

      render(
        <Breadcrumbs.Nav aria-label="Breadcrumb">
          <Breadcrumbs.List>
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link href={href} onAction={onActionHandler}>
                2019_Q2_financial_documents
              </Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link href="/mortgage_documents">mortgage_documents</Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link href="/bank_statements">bank_statements</Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.CurrentItem>assets.pdf</Breadcrumbs.CurrentItem>
          </Breadcrumbs.List>
        </Breadcrumbs.Nav>
      );
      const breadcrumbLink = screen.queryAllByRole('link')[0];
      fireEvent.click(breadcrumbLink);

      expect(onActionHandler).toHaveBeenCalledWith(href);
    });
  });

  context('when selecting a menu item with a keypress', () => {
    it('should return the href for the item to the onAction handler', () => {
      const menuItemHref = '/bank_statements';
      const onActionHandler = jest.fn();
      // Not a realistic value, but it ensures the collapsible list renders a dropdown menu
      const maxWidth = -1;
      render(
        <Breadcrumbs.Nav aria-label="Breadcrumb">
          <Breadcrumbs.CollapsibleList maxWidth={maxWidth} buttonAriaLabel="more links">
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link href="/2019_Q2_financial_documents">
                2019_Q2_financial_documents
              </Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link href="/mortgage_documents">mortgage_documents</Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link onAction={onActionHandler} href={menuItemHref}>
                bank_statements
              </Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.CurrentItem>assets.pdf</Breadcrumbs.CurrentItem>
          </Breadcrumbs.CollapsibleList>
        </Breadcrumbs.Nav>
      );

      const dropdownButton = screen.queryByLabelText('more links');
      const enter = {keyCode: 13, key: 'Enter'};

      // open the dropdown menu
      fireEvent.click(dropdownButton);
      const dropdownMenuItem = screen.queryAllByRole('menuitem')[1];
      fireEvent.keyDown(dropdownMenuItem, enter);

      expect(onActionHandler).toHaveBeenCalledWith(menuItemHref);
    });
  });

  context('when selecting a menu item with a click', () => {
    it('should return the href for the item to the onAction handler', () => {
      const menuItemHref = '/bank_statements';
      const onActionHandler = jest.fn();
      // Not a realistic value, but it ensures the collapsible list renders a dropdown menu
      const maxWidth = -1;
      render(
        <Breadcrumbs.Nav aria-label="Breadcrumb">
          <Breadcrumbs.CollapsibleList maxWidth={maxWidth} buttonAriaLabel="more links">
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link href="/2019_Q2_financial_documents">
                2019_Q2_financial_documents
              </Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link href="/mortgage_documents">mortgage_documents</Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.ListItem>
              <Breadcrumbs.Link onAction={onActionHandler} href={menuItemHref}>
                bank_statements
              </Breadcrumbs.Link>
            </Breadcrumbs.ListItem>
            <Breadcrumbs.CurrentItem>assets.pdf</Breadcrumbs.CurrentItem>
          </Breadcrumbs.CollapsibleList>
        </Breadcrumbs.Nav>
      );

      const dropdownButton = screen.queryByLabelText('more links');
      const enter = {keyCode: 13, key: 'Enter'};

      // open the dropdown menu
      fireEvent.click(dropdownButton);
      const dropdownMenuItem = screen.queryAllByRole('menuitem')[1];
      fireEvent.click(dropdownMenuItem);

      expect(onActionHandler).toHaveBeenCalledWith(menuItemHref);
    });
  });
});

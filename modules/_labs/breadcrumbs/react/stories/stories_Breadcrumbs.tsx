/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import README from '../README.md';

import {Breadcrumbs} from '../lib/Breadcrumbs';

export default {
  title: 'Labs|Breadcrumbs/React',
  decorators: [withReadme(README)],
};

export const Default = () => {
  return (
    <Breadcrumbs.Nav aria-label="Breadcrumb">
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link
            onAction={href => alert(href)}
            href="/income_statement_actuals_vs_budget_ytd_with_variance"
            maxWidth={150}
          >
            income_statement_actuals_vs_budget_ytd_with_variance
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link onAction={href => alert(href)} href="/ledger-account">
            Ledger Account is “4200: Property”
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/documents">Documents</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link
            maxWidth={200}
            href="/2018_08_28_Annual_Recurring_Revenue"
            onAction={href => alert(href)}
          >
            2018_08_28_Annual_Recurring_Revenue
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentItem>
          Policy_Type_is_Homeowners_Year_is_FY2020_Version_is_Actuals
        </Breadcrumbs.CurrentItem>
      </Breadcrumbs.List>
    </Breadcrumbs.Nav>
  );
};

export const Collapsible = () => {
  return (
    <Breadcrumbs.Nav aria-label="Breadcrumb">
      <Breadcrumbs.CollapsibleList maxWidth={800} expanderAriaLabel="more links">
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link
            onAction={href => alert(href)}
            href="/income_statement_actuals_vs_budget_ytd_with_variance"
          >
            2019_Q2_financial_documents
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link onAction={href => alert(href)} href="/ledger-account">
            Ledger Account is “4200: Property”
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/documents">Documents</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link
            href="/2018_08_28_Annual_Recurring_Revenue"
            onAction={href => alert(href)}
          >
            2018_08_28_Summary_of_Annual_Recurring_Revenue
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentItem maxWidth={200}>
          Policy_Type_is_Homeowners_Year_is_FY2020_Version_is_Actuals
        </Breadcrumbs.CurrentItem>
      </Breadcrumbs.CollapsibleList>
    </Breadcrumbs.Nav>
  );
};

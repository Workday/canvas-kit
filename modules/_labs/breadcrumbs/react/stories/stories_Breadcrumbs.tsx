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
    <Breadcrumbs.Nav>
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb
            onAction={href => alert(href)}
            onClick={e => console.log('currentTarget', e.currentTarget)}
            href="/income_statement_actuals_vs_budget_ytd_with_variance"
            maxWidth={150}
          >
            income_statement_actuals_vs_budget_ytd_with_variance
          </Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb onAction={href => alert(href)} href="/ledger-account">
            Ledger Account is “4200: Property”
          </Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb href="/documents">Documents</Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb
            maxWidth={200}
            href="/2018_08_28_Annual_Recurring_Revenue"
            onAction={href => alert(href)}
          >
            2018_08_28_Annual_Recurring_Revenue
          </Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentCrumb>
          Policy_Type_is_Homeowners_Year_is_FY2020_Version_is_Actuals
        </Breadcrumbs.CurrentCrumb>
      </Breadcrumbs.List>
    </Breadcrumbs.Nav>
  );
};

export const Collapsible = () => {
  return (
    <Breadcrumbs.Nav>
      <Breadcrumbs.CollapsibleList
        maxWidth={800}
        aria-label="breadcrumbs"
        expanderAriaLabel="more links"
      >
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb
            onAction={href => alert(href)}
            onClick={e => console.log('currentTarget', e.currentTarget)}
            href="/income_statement_actuals_vs_budget_ytd_with_variance"
          >
            income_statement_actuals_vs_budget_ytd_with_variance
          </Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb onAction={href => alert(href)} href="/ledger-account">
            Ledger Account is “4200: Property”
          </Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb href="/documents">Documents</Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.LinkedCrumb
            maxWidth={200}
            href="/2018_08_28_Annual_Recurring_Revenue"
            onAction={href => alert(href)}
          >
            2018_08_28_Summary_of_Annual_Recurring_Revenue
          </Breadcrumbs.LinkedCrumb>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentCrumb>
          Policy_Type_is_Homeowners_Year_is_FY2020_Version_is_Actuals
        </Breadcrumbs.CurrentCrumb>
      </Breadcrumbs.CollapsibleList>
    </Breadcrumbs.Nav>
  );
};

/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

import README from '../README.md';

import {Breadcrumbs} from '../lib/Breadcrumbs';

export default {
  title: 'Preview/Breadcrumbs/React',
  decorators: [withReadme(README)],
};

export const Default = () => {
  return (
    <Breadcrumbs.Nav aria-label="Breadcrumb">
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link
            onAction={href => alert(href)}
            href="/income-statement-actuals-vs-budget-ytd-with-variance"
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
            maxWidth={100}
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
      <Breadcrumbs.CollapsibleList maxWidth={800} buttonAriaLabel="more links">
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

export const RTL = () => {
  const [direction, setDirection] = React.useState(ContentDirection.RTL);
  const toggleDirection = () => {
    if (direction === ContentDirection.RTL) {
      return setDirection(ContentDirection.LTR);
    }
    return setDirection(ContentDirection.RTL);
  };

  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <Breadcrumbs.Nav aria-label="Breadcrumb">
        <Breadcrumbs.List>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link onAction={href => alert(href)} href="/tanakh">
              תנ״ך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link onAction={href => alert(href)} href="/ketuvim">
              כתובים
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/proverbs" maxWidth={100}>
              מיכה
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link
              href="/do-not-forget-my-teaching"
              onAction={href => alert(href)}
              maxWidth={100}
            >
              בני תורתי אל תשכח ומצותי יצר לבך׃
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link
              href="/long-life-and-peace-they-shall-add"
              onAction={href => alert(href)}
              maxWidth={100}
            >
              כי ארך ימים ושנות חיים ושלום יוסיפו לך׃
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link
              href="/let-mercy-and-truth-not-forsake-you"
              onAction={href => alert(href)}
              maxWidth={100}
            >
              חסד ואמת אל יעזבך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link onAction={href => alert(href)} href="/bind-them-around-your-neck">
              קשרם על גרגרותיך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/write-them-on-your-heart" maxWidth={100}>
              כתבם על לוח לבך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.CurrentItem maxWidth={100}>
            ולבם שמו שמיר משמוע את התורה ואת
          </Breadcrumbs.CurrentItem>
        </Breadcrumbs.List>
      </Breadcrumbs.Nav>
      <button style={{margin: '24px 0'}} onClick={toggleDirection}>
        toggle direction
      </button>
    </CanvasProvider>
  );
};

export const RTLCollapsible = () => {
  const [direction, setDirection] = React.useState(ContentDirection.RTL);
  const toggleDirection = () => {
    if (direction === ContentDirection.RTL) {
      return setDirection(ContentDirection.LTR);
    }
    return setDirection(ContentDirection.RTL);
  };

  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <Breadcrumbs.Nav aria-label="Breadcrumb">
        <Breadcrumbs.CollapsibleList maxWidth={500} buttonAriaLabel="more links">
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link onAction={href => alert(href)} href="/tanakh">
              תנ״ך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link onAction={href => alert(href)} href="/ketuvim">
              כתובים
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/proverbs" maxWidth={200}>
              מיכה
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link
              href="/do-not-forget-my-teaching"
              onAction={href => alert(href)}
              maxWidth={200}
            >
              בני תורתי אל תשכח ומצותי יצר לבך׃
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link
              href="/long-life-and-peace-they-shall-add"
              onAction={href => alert(href)}
              maxWidth={200}
            >
              כי ארך ימים ושנות חיים ושלום יוסיפו לך׃
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link
              href="/let-mercy-and-truth-not-forsake-you"
              onAction={href => alert(href)}
              maxWidth={200}
            >
              חסד ואמת אל יעזבך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link onAction={href => alert(href)} href="/bind-them-around-your-neck">
              קשרם על גרגרותיך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/write-them-on-your-heart" maxWidth={150}>
              כתבם על לוח לבך
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.CurrentItem maxWidth={200}>
            ולבם שמו שמיר משמוע את התורה ואת
          </Breadcrumbs.CurrentItem>
        </Breadcrumbs.CollapsibleList>
      </Breadcrumbs.Nav>
      <button style={{margin: '24px 0'}} onClick={toggleDirection}>
        toggle direction
      </button>
    </CanvasProvider>
  );
};

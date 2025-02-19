import React from 'react';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {BaseTableHead} from './BaseTableHead';
import {BaseTableBody} from './BaseTableBody';
import {BaseTableRow} from './BaseTableRow';
import {BaseTableHeader} from './BaseTableHeader';
import {BaseTableCell} from './BaseTableCell';
import {BaseTableFooter} from './BaseTableFooter';
import {BaseTableCaption} from './BaseTableCaption';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface BaseTableProps extends Omit<BoxProps, 'ref'> {}

export const baseTableStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    border: `${px2rem(1)} solid ${system.color.border.container}`,
    borderRadius: system.shape.x2,
    overflow: 'auto',
    color: system.color.text.default,
  },
});

/**
 * `BaseTable` is a simple styled compound component that renders a [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element.
 * It is used to present information in a two-dimensional table comprised of rows and columns of cells containing data.
 *
 *
 * ```tsx
import {BaseTable} from '@workday/canvas-kit-react/table';

export default function App() {
  return (
    <BaseTable>
      <BaseTable.Caption>Table Caption</BaseTable.Caption>
      <BaseTable.Head>
        <BaseTable.Row>
          <BaseTable.Header>Table Header</BaseTable.Header>
          <BaseTable.Header>Table Header</BaseTable.Header>
        </BaseTable.Row>
      </BaseTable.Head>
      <BaseTable.Body>
        <BaseTable.Row>
          <BaseTable.Header>Table Header</BaseTable.Header>
          <BaseTable.Header>Table Header</BaseTable.Header>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Header>Table Header</BaseTable.Header>
          <BaseTable.Cell>Table Data Cell</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Header>Table Header</BaseTable.Header>
          <BaseTable.Cell>Table Data Cell</BaseTable.Cell>
        </BaseTable.Row>
      </BaseTable.Body>
      <BaseTable.Footer>
        <BaseTable.Row>
          <BaseTable.Header>Table Header</BaseTable.Header>
          <BaseTable.Cell>Table Data Cell</BaseTable.Cell>
        </BaseTable.Row>
      </BaseTable.Footer>
    </BaseTable>
  );
}
```
 */
export const BaseTable = createComponent('table')({
  displayName: 'BaseTable',
  Component: ({children, ...elemProps}: BaseTableProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, baseTableStencil())}>
        {children}
      </Element>
    );
  },
  subComponents: {
    /**
     * `Table.Caption` renders a [caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) element.
     *
     *
     * ```tsx
      import {Table} from '@workday/canvas-kit-react/table';

      export default function App() {
        return (
          <BaseTable>
            <BaseTable.Caption>Table Caption</BaseTable.Caption>
            <BaseTable.Body>
              <BaseTable.Row>
                <BaseTable.Header>Table Header</BaseTable.Header>
                <BaseTable.Cell>Table Cell</BaseTable.Cell>
              </BaseTable.Row>
            </BaseTable.Body>
          </BaseTable>
        );
      }
      ```
    */
    Caption: BaseTableCaption,
    /**
    * `Table.Head` renders a [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <BaseTable>
          <BaseTable.Head>
            <BaseTable.Row>
              <BaseTable.Header>Table Header</BaseTable.Header>
              <BaseTable.Cell>Table Cell</BaseTable.Cell>
            </BaseTable.Row>
          </BaseTable.Head>
        </BaseTable>
      );
    }
    ```
    */
    Head: BaseTableHead,
    /**
     * `Table.Body` renders a [tbody](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) element.
     *
     *
     * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <BaseTable>
          <BaseTable.Body>
            <BaseTable.Row>
              <BaseTable.Header>Table Header</BaseTable.Header>
              <BaseTable.Cell>Table Cell</BaseTable.Cell>
            </BaseTable.Row>
          </BaseTable.Body>
        </BaseTable>
      );
    }
    ```
    */
    Body: BaseTableBody,
    /**
     * `Table.Row` renders a [tr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) element.
     *
     * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <BaseTable>
          <BaseTable.Head>
            <BaseTable.Row>
              <BaseTable.Header>Table Header</BaseTable.Header>
              <BaseTable.Cell>Table Cell</BaseTable.Cell>
            </BaseTable.Row>
          </BaseTable.Head>
        </BaseTable>
      );
    }
    ```
    */
    Row: BaseTableRow,
    /**
    * `Table.Header` renders a [th](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <BaseTable>
          <BaseTable.Head>
            <BaseTable.Row>
              <BaseTable.Header>Table Header</BaseTable.Header>
              <BaseTable.Cell>Table Cell</BaseTable.Cell>
            </BaseTable.Row>
          </BaseTable.Head>
        </BaseTable>
      );
    }
    ```
    */
    Header: BaseTableHeader,
    /**
    * `Table.Cell` renders a [td](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <BaseTable>
          <BaseTable.Body>
            <BaseTable.Row>
              <BaseTable.Header>Table Header</BaseTable.Header>
              <BaseTable.Cell>Table Cell</BaseTable.Cell>
            </BaseTable.Row>
          </BaseTable.Body>
        </BaseTable>
      );
    }
    ```
    */
    Cell: BaseTableCell,
    /**
    * `Table.Footer` renders a [tfoot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <BaseTable>
          <BaseTable.Footer>
            <BaseTable.Row>
              <BaseTable.Header>Table Header</BaseTable.Header>
              <BaseTable.Cell>Table Cell</BaseTable.Cell>
            </BaseTable.Row>
          </BaseTable.Footer>
        </BaseTable>
      );
    }
    ```
    */
    Footer: BaseTableFooter,
  },
});

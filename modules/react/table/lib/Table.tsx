import React from 'react';
import {GridProps, FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {BaseTable, baseTableStencil} from './BaseTable';
import {TableRow} from './TableRow';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {baseTableBodyStencil} from './BaseTableBody';
import {baseTableCaptionStencil} from './BaseTableCaption';
import {baseTableCellStencil} from './BaseTableCell';
import {baseTableHeadStencil} from './BaseTableHead';
import {baseTableHeaderStencil} from './BaseTableHeader';
import {system} from '@workday/canvas-tokens-web';

export interface TableProps extends GridProps {}

const tableStencil = createStencil({
  extends: baseTableStencil,
  base: {
    display: 'grid',
  },
});

const TableBodyStencil = createStencil({
  extends: baseTableBodyStencil,
  base: {
    display: 'grid',
  },
});

const TableCaptionStencil = createStencil({
  extends: baseTableCaptionStencil,
  base: {
    display: 'flex',
    borderBottom: `${px2rem(1)} solid ${system.color.border.container}`,
  },
});

const TableCellStencil = createStencil({
  extends: baseTableCellStencil,
  base: {
    display: 'grid',
  },
});

const TableFooterStencil = createStencil({
  base: {
    display: 'grid',
  },
});

const TableHeadStencil = createStencil({
  extends: baseTableHeadStencil,
  base: {
    display: 'grid',
  },
});

const TableHeaderStencil = createStencil({
  extends: baseTableHeaderStencil,
  base: {
    display: 'grid',
  },
});

export const TableBody = createComponent('tbody')({
  displayName: 'Table.Body',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, TableBodyStencil())}>
        {children}
      </Element>
    );
  },
});

export const TableCaption = createComponent('caption')({
  displayName: 'Table.Caption',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, TableCaptionStencil())}>
        {children}
      </Element>
    );
  },
});

export const TableCell = createComponent('td')({
  displayName: 'Table.Cell',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, TableCellStencil())}>
        {children}
      </Element>
    );
  },
});

export const TableFooter = createComponent('tfoot')({
  displayName: 'Table.Footer',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, TableFooterStencil())}>
        {children}
      </Element>
    );
  },
});

export const TableHead = createComponent('thead')({
  displayName: 'Table.Head',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, TableHeadStencil())}>
        {children}
      </Element>
    );
  },
});

export const TableHeader = createComponent('th')({
  displayName: 'Table.Header',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, TableHeaderStencil())}>
        {children}
      </Element>
    );
  },
});

/**
 * `Table` is a simple styled compound component that renders a [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element. It is used to present information in a two-dimensional table comprised of rows and columns of cells containing data.
 * `Table` is built off of `BaseTable` and is using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) features.
 *
 *
 * ```tsx
import {Table} from '@workday/canvas-kit-react/table';

export default function App() {
  return (
    <Table>
      <Table.Caption>Table Caption</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Header>Table Header</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Header>Table Header</Table.Header>
        </Table.Row>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
```
 */
export const Table = createComponent('table')({
  displayName: 'Table',
  Component: ({children, ...elemProps}: TableProps, ref, Element) => {
    return (
      <BaseTable as={Element} ref={ref} {...mergeStyles(elemProps, tableStencil())}>
        {children}
      </BaseTable>
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
          <Table>
            <Table.Caption>Table Caption</Table.Caption>
            <Table.Body>
              <Table.Row>
                <Table.Header>Table Header</Table.Header>
                <Table.Cell>Table Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        );
      }
      ```
    */
    Caption: TableCaption,
    /**
    * `Table.Head` renders a [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Table Header</Table.Header>
              <Table.Cell>Table Cell</Table.Cell>
            </Table.Row>
          </Table.Head>
        </Table>
      );
    }
    ```
    */
    Head: TableHead,
    /**
     * `Table.Body` renders a [tbody](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) element.
     *
     *
     * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Header>Table Header</Table.Header>
              <Table.Cell>Table Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    }
    ```
    */
    Body: TableBody,
    /**
     * `Table.Row` renders a [tr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) element.
     *
     * **Note**: `Table.Row` is built on [Grid](/docs/components-layout-grid--basic). It will look for
     * how many children are there and if those children are valid React Elements. This will adjust the
     * amount of columns automatically using the `gridTemplateColumns` style prop and the width of the
     * columns is also set using a `minmax` function in the `gridTemplateColumns` style prop. If a user
     * would like to adjust this, it can be overwritten on `Table.Row`. See the example below for how to
     * overwrite `gridTemplateColumns`.
     *
     *
     * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <Table>
          <Table.Head>
            <Table.Row gridTemplateColumns="repeat(4, minmax(100px, 1fr))">
              <Table.Header>Table Header</Table.Header>
              <Table.Cell>Table Cell</Table.Cell>
            </Table.Row>
          </Table.Head>
        </Table>
      );
    }
    ```
    */
    Row: TableRow,
    /**
    * `Table.Header` renders a [th](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Table Header</Table.Header>
              <Table.Cell>Table Cell</Table.Cell>
            </Table.Row>
          </Table.Head>
        </Table>
      );
    }
    ```
    */
    Header: TableHeader,
    /**
    * `Table.Cell` renders a [td](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Header>Table Header</Table.Header>
              <Table.Cell>Table Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      );
    }
    ```
    */
    Cell: TableCell,
    /**
    * `Table.Footer` renders a [tfoot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot) element.
    *
    *
    * ```tsx
    import {Table} from '@workday/canvas-kit-react/table';

    export default function App() {
      return (
        <Table>
          <Table.Footer>
            <Table.Row>
              <Table.Header>Table Header</Table.Header>
              <Table.Cell>Table Cell</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      );
    }
    ```
    */
    Footer: TableFooter,
  },
});

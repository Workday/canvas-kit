import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {TableHead} from './TableHead';
import {TableBody} from './TableBody';
import {TableRow} from './TableRow';
import {TableHeader} from './TableHeader';
import {TableCell} from './TableCell';
import {TableFooter} from './TableFooter';
import {TableCaption} from './TableCaption';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const tableStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    display: 'grid',
    border: `${px2rem(1)} solid ${base.soap500}`,
    borderRadius: system.shape.x2,
    overflow: 'auto',
    color: base.blackPepper300,
    boxSizing: 'border-box',
  },
});

/**
 * `Table` is a simple styled compound component that renders a [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element. It is used to present information in a two-dimensional table comprised of rows and columns of cells containing data.
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
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tableStencil())}>
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

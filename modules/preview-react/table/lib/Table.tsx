import React from 'react';
import {GridProps, Grid} from '@workday/canvas-kit-react/layout';
import {type, colors} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';
import {TableHead} from './TableHead';
import {TableBody} from './TableBody';
import {TableRow} from './TableRow';
import {TableHeader} from './TableHeader';
import {TableCell} from './TableCell';
import {TableFooter} from './TableFooter';
import {TableCaption} from './TableCaption';
import {TableDivider} from './TableDivider';

/**
 * `Table` is a simple styled compound component that renders a [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element. It is used to present information in a two-dimensional table comprised of rows and columns of cells containing data.
 *
 * @example
 * ```tsx
import {Table} from '@workday/canvas-kit-preview-react/table';

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
        <Table.Divider />
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
        <Table.Divider />
        <Table.Row>
          <Table.Header>Table Header</Table.Header>
          <Table.Cell>Table Data Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Divider />
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
      <Grid
        as={Element}
        ref={ref}
        border={`1px solid ${colors.soap500}`}
        borderRadius="l"
        overflow="scroll"
        {...type.levels.subtext.large}
        {...elemProps}
      >
        {children}
      </Grid>
    );
  },
  subComponents: {
    /**
     * `Table.Caption` renders a [caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) element.
     *
     * @example
     * ```tsx
      import {Table} from '@workday/canvas-kit-preview-react/table';

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
    * @example
    * ```tsx
    import {Table} from '@workday/canvas-kit-preview-react/table';

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
     * @example
     * ```tsx
    import {Table} from '@workday/canvas-kit-preview-react/table';

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
     * @example
     * ```tsx
    import {Table} from '@workday/canvas-kit-preview-react/table';

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
    Row: TableRow,
    /**
    * `Table.Header` renders a [th](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) element.
    *
    * @example
    * ```tsx
    import {Table} from '@workday/canvas-kit-preview-react/table';

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
    * @example
    * ```tsx
    import {Table} from '@workday/canvas-kit-preview-react/table';

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
    * @example
    * ```tsx
    import {Table} from '@workday/canvas-kit-preview-react/table';

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
    /**
    * `Table.Divider` renders an `hr` for dividing rows.
    *
    * @example
    * ```tsx
    import {Table} from '@workday/canvas-kit-preview-react/table';

    export default function App() {
      return (
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Header>Table Header</Table.Header>
              <Table.Cell>Table Cell</Table.Cell>
            </Table.Row>
            <Table.Divider />
          </Table.Body>
        </Table>
      );
    }
    ```
    */
    Divider: TableDivider,
  },
});

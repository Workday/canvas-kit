import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Subtext, TextProps} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const TableHead = createComponent('thead')({
  Component: (props: BoxProps, ref, Element) => {
    return <Box as={Element} ref={ref} {...props} />;
  },
});

const TableBody = createComponent('tbody')({
  Component: (props: BoxProps, ref, Element) => {
    return <Box as={Element} ref={ref} {...props} />;
  },
});

const tableRowStencil = createStencil({
  base: {
    borderBottom: `${px2rem(1)} solid ${system.color.border.strong}`,
  },
});

const TableRow = createComponent('tr')({
  Component: (props: BoxProps, ref, Element) => {
    return <Box as={Element} ref={ref} {...handleCsProp(props, tableRowStencil())} />;
  },
});

const tableHeaderStencil = createStencil({
  base: {
    fontWeight: system.fontWeight.medium,
    padding: `${system.padding.md} ${system.padding.xs}`,
    textAlign: 'start',
  },
});

const TableHeader = createComponent('th')({
  Component: (props: TextProps, ref, Element) => {
    return (
      <Subtext as={Element} ref={ref} size="large" {...handleCsProp(props, tableHeaderStencil())} />
    );
  },
});

const tableDataStencil = createStencil({
  base: {
    padding: `${system.padding.md} ${system.padding.xs}`,
    textAlign: 'start',
    code: {
      fontFamily: system.fontFamily.mono,
    },
  },
});

const TableData = createComponent('td')({
  Component: (props: TextProps, ref, Element) => {
    return (
      <Subtext as={Element} ref={ref} size="large" {...handleCsProp(props, tableDataStencil())} />
    );
  },
});

const tableCaptionStencil = createStencil({
  base: {
    borderCollapse: 'collapse',
    marginBottom: system.gap.md,
    width: '100%',
  },
});

export const Table = createComponent('table')({
  displayName: 'Table',
  Component: (props: BoxProps, ref, Element) => {
    return <Box as={Element} ref={ref} {...handleCsProp(props, tableCaptionStencil())} />;
  },
  subComponents: {
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Header: TableHeader,
    Data: TableData,
  },
});

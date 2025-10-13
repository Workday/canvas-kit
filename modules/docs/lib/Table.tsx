import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Text, TextProps} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

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

const tableRowStyles = createStyles({
  borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
});

const TableRow = createComponent('tr')({
  Component: (props: BoxProps, ref, Element) => {
    return <Box as={Element} ref={ref} {...handleCsProp(props, tableRowStyles)} />;
  },
});

const tableHeaderStyles = createStyles({
  fontWeight: system.fontWeight.medium,
  paddingInline: system.space.x2,
  paddingBlock: system.space.x4,
  textAlign: 'start',
});

const TableHeader = createComponent('th')({
  Component: (props: TextProps, ref, Element) => {
    return (
      <Text
        as={Element}
        ref={ref}
        typeLevel="subtext.large"
        {...handleCsProp(props, tableHeaderStyles)}
      />
    );
  },
});

const tableDataStyles = createStyles({
  paddingInline: system.space.x2,
  paddingBlock: system.space.x4,
  textAlign: 'start',
  fontFamily: system.fontFamily.mono,
});

const TableData = createComponent('td')({
  Component: (props: TextProps, ref, Element) => {
    return (
      <Text
        as={Element}
        ref={ref}
        typeLevel="subtext.large"
        {...handleCsProp(props, tableDataStyles)}
      />
    );
  },
});

const tableStyles = createStyles({
  borderCollapse: 'collapse',
  width: '100%',
  marginBottom: system.space.x4,
});

export const Table = createComponent('table')({
  displayName: 'Table',
  Component: (props: BoxProps, ref, Element) => {
    return <Box as={Element} ref={ref} {...handleCsProp(props, tableStyles)} />;
  },
  subComponents: {
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Header: TableHeader,
    Data: TableData,
  },
});

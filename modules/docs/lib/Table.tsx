import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {Text, TextProps} from '@workday/canvas-kit-react/text';
import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react/tokens';

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

const TableRow = createComponent('tr')({
  Component: (props: BoxProps, ref, Element) => {
    return (
      <Box as={Element} ref={ref} borderBottom="solid 1px" borderBottomColor="soap400" {...props} />
    );
  },
});

const TableHeader = createComponent('th')({
  Component: (props: TextProps, ref, Element) => {
    return (
      <Text
        as={Element}
        ref={ref}
        fontWeight="medium"
        paddingX="xxs"
        paddingY="s"
        textAlign="start"
        typeLevel="subtext.large"
        {...props}
      />
    );
  },
});

const StyledText = styled(Text)<StyledType>({
  code: {
    fontFamily: type.properties.fontFamilies.monospace,
  },
});

const TableData = createComponent('td')({
  Component: (props: TextProps, ref, Element) => {
    return (
      <StyledText
        as={Element}
        ref={ref}
        paddingX="xxs"
        paddingY="s"
        textAlign="start"
        typeLevel="subtext.large"
        {...props}
      />
    );
  },
});

export const Table = createComponent('table')({
  displayName: 'Table',
  Component: (props: BoxProps, ref, Element) => {
    return (
      <Box
        as={Element}
        ref={ref}
        borderCollapse="collapse"
        width="100%"
        {...props}
        marginBottom="s"
      />
    );
  },
  subComponents: {
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Header: TableHeader,
    Data: TableData,
  },
});

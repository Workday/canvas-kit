import React from 'react';
import { createComponent } from '@workday/canvas-kit-react/common';
import { Box, BoxProps } from '@workday/canvas-kit-react/layout';
import { Text, TextProps } from '@workday/canvas-kit-react/text';
import { ExternalHyperlink } from '@workday/canvas-kit-react';

const TableHead = createComponent('thead')({
  displayName: 'Table.Head',
  Component: (props: BoxProps, ref, Element) => {
    return (
      <Box
        as={Element}
        ref={ref}
        {...props}
      />
    );
  },
});

const TableBody = createComponent('tbody')({
  displayName: 'Table.Body',
  Component: (props: BoxProps, ref, Element) => {
    return (
      <Box
        as={Element}
        ref={ref}
        {...props}
      />
    );
  },
});

const TableRow = createComponent('tr')({
  displayName: 'Table.Row',
  Component: (props: BoxProps, ref, Element) => {
    return (
      <Box
        as={Element}
        ref={ref}
        borderBottom="solid 1px"
        borderBottomColor="soap400"
        {...props}
      />
    );
  },
});

const TableHeader = createComponent('th')({
  displayName: 'Table.Header',
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

const TableData = createComponent('td')({
  displayName: 'Table.Data',
  Component: (props: TextProps, ref, Element) => {
    return (
      <Text
        as={Element}
        ref={ref}
        fontWeight="medium"
        paddingX="xxs"
        paddingY="s"
        textAlign="start"
        typeLevel="subtext.medium"
        {...props}
      />
    );
  },
});

export const Table = createComponent('table')({
  displayName: 'Table',
  Component: (props: BoxProps, ref, Element) => {
    return <Box
      as={Element}
      ref={ref}
      borderCollapse="collapse"
      width="100%"
      {...props}
    />
  },
  subComponents: {
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Header: TableHeader,
    Data: TableData,
  }
});


type StyleProp = {
  name: string;
  properties: string[];
  system: string;
};

interface StylePropsTableProps {
  styleProps?: StyleProp[];
};

const camelToKebabCase = (name: string) => {
  return name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

export const StylePropsTable = ({styleProps = []}: StylePropsTableProps) => {
  const sortedStyleProps = styleProps.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>Prop</Table.Header>
          <Table.Header>CSS Properties</Table.Header>
          <Table.Header>System</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sortedStyleProps.map((styleProp, index) => (
          <Table.Row key={index}>
            <Table.Data fontFamily="monospace">{styleProp.name}</Table.Data>
            <Table.Data>{styleProp.properties.map((property, i) => {
              const formattedName = camelToKebabCase(property);
              const mdnUrl = `https://developer.mozilla.org/en-US/docs/Web/CSS/${formattedName}`;
              return (
                <Box display="inline-block" marginInlineEnd="xxxs">
                  <ExternalHyperlink href={mdnUrl} key={i}>{formattedName}</ExternalHyperlink>
                </Box>
              )}
          )}</Table.Data>
            <Table.Data fontFamily="monospace">{styleProp.system === 'none' ? "---" : styleProp.system}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
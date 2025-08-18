import {Box} from '@workday/canvas-kit-react/layout';
import {ExternalHyperlink} from '@workday/canvas-kit-react';
import {Table} from './Table';

type StyleProp = {
  name: string;
  properties: string[];
  system: string;
};

interface StylePropsTableProps {
  styleProps?: StyleProp[];
}

const camelToKebabCase = (name: string) => {
  return name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

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
            <Table.Data>
              {styleProp.properties.map((property, i) => {
                const formattedName = camelToKebabCase(property);
                const mdnUrl = `https://developer.mozilla.org/en-US/docs/Web/CSS/${formattedName}`;
                return (
                  <Box display="inline-block" marginInlineEnd="xxxs">
                    <ExternalHyperlink href={mdnUrl} key={i} iconLabel="Open link in new window">
                      {formattedName}
                    </ExternalHyperlink>
                  </Box>
                );
              })}
            </Table.Data>
            <Table.Data fontFamily="monospace">
              {styleProp.system === 'none' ? '---' : styleProp.system}
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

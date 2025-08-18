import React from 'react';
import {Table} from '@workday/canvas-kit-react';
import {StatusIndicator, StatusIndicatorVariant} from '@workday/canvas-kit-preview-react';
// @ts-ignore: Cannot find module error
import {version} from '../../../lerna.json';

const statusIndicators = {
  stable: {
    variant: 'blue',
    label: 'Stable',
  },
  support: {
    variant: 'green',
    label: 'Support',
  },
  deprecated: {
    variant: 'red',
    label: 'No Longer Supported',
  },
};

type VersionType = {
  versionNumber: number;
  versionUrl: string;
};

function getVersionStatusIndicator(versionNumber: number | string) {
  // version from lerna is a string, so we need to do modify into a number
  const currentMajorVersion = Number(version.split('.')[0]);
  const modifiedVersionNumber =
    typeof versionNumber === 'string' ? Number(versionNumber.split('.')[0]) : versionNumber;

  // if this is the current version
  if (modifiedVersionNumber === currentMajorVersion) {
    return statusIndicators.stable;
  } else if (modifiedVersionNumber === currentMajorVersion - 1) {
    return statusIndicators.support;
  } else {
    return statusIndicators.deprecated;
  }
}

export const VersionTable = () => {
  const [versions, setVersions] = React.useState<VersionType[]>([]);
  const minVersion = 6;
  const currentMajorVersion = Number(version?.split('.')[0]);
  React.useEffect(() => {
    let arr: VersionType[] = [];
    for (let i = minVersion; i <= currentMajorVersion; i++) {
      arr.push({
        versionNumber: i,
        versionUrl:
          i === currentMajorVersion
            ? 'https://canvas.workday.com/'
            : `https://canvas.workday.com/v${i}/`,
      });
    }
    setVersions(arr);
  }, []);
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header scope="col">Version</Table.Header>
          <Table.Header scope="col">Documentation</Table.Header>
          <Table.Header scope="col">Status</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {versions
          .slice()
          .reverse()
          .map(item => {
            const {label, variant} = getVersionStatusIndicator(item.versionNumber);
            return (
              <Table.Row>
                <Table.Cell>v{item.versionNumber}</Table.Cell>
                <Table.Cell>
                  <a href={item.versionUrl} target="_blank" rel="noreferrer">
                    Documentation
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <StatusIndicator variant={variant as StatusIndicatorVariant}>
                    <StatusIndicator.Label>{label}</StatusIndicator.Label>
                  </StatusIndicator>
                </Table.Cell>
              </Table.Row>
            );
          })}
      </Table.Body>
    </Table>
  );
};

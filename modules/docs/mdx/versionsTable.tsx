import React from 'react';
import {Table, StatusIndicator, StatusIndicatorVariant} from '@workday/canvas-kit-preview-react';
// @ts-ignore: Cannot find module error
import {version} from '../../../lerna.json';

// When we release a new version, add the support version before the first item.
const allVersions = [
  {
    versionNumber: version, // This will always be the current major version
    documentation: 'https://github.com/Workday/canvas-kit',
  },
  {
    versionNumber: 9, // This is support, update this when we release v11
    documentation: 'https://d2krrudi3mmzzw.cloudfront.net/v9/?path=/docs/welcome--page',
  },
  {
    versionNumber: 8,
    documentation: 'https://d2krrudi3mmzzw.cloudfront.net/v8/?path=/docs/welcome--page',
  },
  {
    versionNumber: 7,
    documentation:
      'https://d2krrudi3mmzzw.cloudfront.net/v7/?path=/story/welcome-getting-started--page',
  },
  {
    versionNumber: 6,
    documentation:
      'https://d2krrudi3mmzzw.cloudfront.net/v7/?path=/story/welcome-getting-started--page',
  },
];

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
        {allVersions.map(item => {
          const {label, variant} = getVersionStatusIndicator(item.versionNumber);
          return (
            <Table.Row>
              <Table.Cell>v{item.versionNumber}</Table.Cell>
              <Table.Cell>
                <a href={item.documentation} target="_blank" rel="noreferrer">
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

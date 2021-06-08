/* eslint-disable no-param-reassign */
import React from 'react';
import {toId} from '@storybook/csf';
import {Table, TableRow} from '@workday/canvas-kit-react/table';
import {Hyperlink} from '@workday/canvas-kit-react/button';

import {specifications, SpecDescribe, SpecIt} from './specs';
import {GithubBranch, GithubUrl, StorybookUrl} from './docs';

export interface SpecificationsProps {
  file: string;
  name?: string;
}

interface Row {
  given: string[];
  when: string[];
  then: string[];
  prefix: string;
}

function createTableRows(
  rows: Row[],
  item: SpecDescribe | SpecIt,
  index: number,
  children: (SpecDescribe | SpecIt)[],
  context: Row = {given: [], when: [], then: [], prefix: ''}
) {
  if (item.type === 'describe') {
    if (/^given/i.test(item.name)) {
      context = {
        ...context,
        given: context.given.concat(context.prefix ? `${context.prefix} ${item.name}` : item.name),
      };
      context.prefix = '';
    } else if (/^[wt]hen/i.test(item.name)) {
      context = {
        ...context,
        when: context.when.concat(context.prefix ? `${context.prefix} ${item.name}` : item.name),
      };
      context.prefix = '';
    } else {
      context = {...context, prefix: context.prefix ? `${context.prefix} ${item.name}` : item.name};
    }
    item.children.reduce(
      (rows, item, index, children) => createTableRows(rows, item, index, children, context),
      rows
    );
  } else {
    context = {
      ...context,
      then: context.then.concat(context.prefix ? `${context.prefix} ${item.name}` : item.name),
    };
    rows.push(context);
  }
  return rows;
}

export const Specifications = ({file, name}: SpecificationsProps) => {
  const storybookBaseUrl = React.useContext(StorybookUrl);
  const githubUrl = React.useContext(GithubUrl);
  const githubBranch = React.useContext(GithubBranch);

  const specFile = specifications.find(f => f.name === file);

  if (!specFile) {
    return null;
  }

  const block = name ? specFile.children.find(d => d.name === name) : specFile.children[0];

  if (!block) {
    return null;
  }

  const renderGiven = (input: string) => {
    if (!input) {
      return `Could not find a "given". Check the spec file.`;
    }

    const matches = input.match(/(.*)(\[[A-Za-z/\s]+), ([A-Za-z\s]+)\](.*)/);
    if (matches == null) {
      return input;
    }

    const [, first, kind, name, last] = matches;

    return <>
      {first.replace(/given /i, '')}
      <Hyperlink
        href={`${storybookBaseUrl}?path=/story/${toId(
          kind,
          name.replace('DefaultStory', 'Default Story')
        )}`}
      >
        {name.replace('DefaultStory', 'Default')}
      </Hyperlink>
      {last}
    </>;
  };

  return block.type === 'describe' ? (
    <>
      <Table>
        <thead>
          <TableRow header={true}>
            <th>Given</th>
            <th>When</th>
            <th>Then</th>
          </TableRow>
        </thead>
        <tbody>
          {block.children.reduce(createTableRows, []).map((row, index) => (
            <TableRow key={index}>
              <td>{renderGiven(row.given[0])}</td>
              <td>
                <ul>
                  {row.when.map((item, index) => (
                    <li key={index}>
                      {(index !== 0 ? 'AND THEN ' : '') + item.replace(/[tw]hen /i, '')}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {row.then.map((item, index) => (
                    <li key={index}>{(item.indexOf('should') === 0 ? 'it ' : '') + item}</li>
                  ))}
                </ul>
              </td>
            </TableRow>
          ))}
        </tbody>
      </Table>
      Source:{' '}
      <Hyperlink href={`${githubUrl}blob/${githubBranch}/cypress/integration/${file}`}>
        {file}
      </Hyperlink>
    </>
  ) : null;
};

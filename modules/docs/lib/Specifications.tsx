/* eslint-disable no-param-reassign */
import {toId} from '@storybook/csf';
import React from 'react';

import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Table} from '@workday/canvas-kit-react/table';

import {type FileBlock} from '../utils/parseSpecFile';
import {GithubBranch, GithubUrl, StorybookUrl} from './docs';
import {SpecDescribe, SpecIt} from './specs';

function useFetchSpecification({file, initialSpecs}: {file: string; initialSpecs?: FileBlock}) {
  const [specs, setSpecs] = React.useState(initialSpecs);

  React.useEffect(() => {
    if (file && !initialSpecs) {
      import(/* @vite-ignore */ file).then(({default: contents}: {default: FileBlock}) => {
        setSpecs(contents);
      });
    }
  }, [file, initialSpecs]);

  return specs;
}

export interface SpecificationsProps {
  file: string;
  name?: string;
  initialSpecs?: FileBlock;
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

export const Specifications = ({file, name, initialSpecs}: SpecificationsProps) => {
  const storybookBaseUrl = React.useContext(StorybookUrl);
  const githubUrl = React.useContext(GithubUrl);
  const githubBranch = React.useContext(GithubBranch);

  const contents = useFetchSpecification({file, initialSpecs});
  if (!contents) {
    return null;
  }

  const block = name ? contents.children.find(d => d.name === name) : contents.children[0];

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

    return (
      <div>
        {first.replace(/given /i, '')}
        <Hyperlink
          href={`${storybookBaseUrl}?path=/story/${toId(
            kind,
            name.replace('DefaultStory', 'Default Story').replace(/([A-Z])/g, '-$1')
          )}`}
        >
          {name.replace('DefaultStory', 'Default')}
        </Hyperlink>
        {last}
      </div>
    );
  };

  return block.type === 'describe' ? (
    <div className="sb-unstyled">
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header>Given</Table.Header>
            <Table.Header>When</Table.Header>
            <Table.Header>Then</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {block.children.reduce(createTableRows, []).map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell>{renderGiven(row.given[0])}</Table.Cell>
              <Table.Cell>
                <ul>
                  {row.when.map((item, index) => (
                    <li key={index}>
                      {(index !== 0 ? 'AND THEN ' : '') + item.replace(/[tw]hen /i, '')}
                    </li>
                  ))}
                </ul>
              </Table.Cell>
              <Table.Cell>
                <ul>
                  {row.then.map((item, index) => (
                    <li key={index}>{(item.indexOf('should') === 0 ? 'it ' : '') + item}</li>
                  ))}
                </ul>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      Source: <Hyperlink href={`${githubUrl}blob/${githubBranch}/${file}`}>{file}</Hyperlink>
    </div>
  ) : null;
};

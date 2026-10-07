import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {generateUniqueId, useUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {calc, createStencil, createStyles} from '@workday/canvas-kit-styling';
import {chevronDownSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

type WorkItemStatus = 'Not started' | 'In progress' | 'At risk' | 'Complete';

interface WorkItem {
  id: string;
  name: string;
  status: WorkItemStatus;
  owner: string;
  dueDate: string;
  children?: WorkItem[];
}

const headingID = generateUniqueId();
const websiteRedesignId = generateUniqueId();

const projectData: WorkItem[] = [
  {
    id: websiteRedesignId,
    name: 'Website Redesign',
    status: 'In progress',
    owner: 'Alex Rivera',
    dueDate: 'Sep 30',
    children: [
      {
        id: generateUniqueId(),
        name: 'Discovery',
        status: 'Complete',
        owner: 'Jordan Lee',
        dueDate: 'Aug 15',
        children: [
          {
            id: generateUniqueId(),
            name: 'Stakeholder interviews',
            status: 'Complete',
            owner: 'Jordan Lee',
            dueDate: 'Aug 8',
          },
          {
            id: generateUniqueId(),
            name: 'Competitive audit',
            status: 'Complete',
            owner: 'Sam Okonkwo',
            dueDate: 'Aug 15',
          },
        ],
      },
      {
        id: generateUniqueId(),
        name: 'Design',
        status: 'In progress',
        owner: 'Priya Shah',
        dueDate: 'Sep 12',
        children: [
          {
            id: generateUniqueId(),
            name: 'Wireframes',
            status: 'Complete',
            owner: 'Priya Shah',
            dueDate: 'Aug 29',
          },
          {
            id: generateUniqueId(),
            name: 'Visual design',
            status: 'In progress',
            owner: 'Priya Shah',
            dueDate: 'Sep 12',
          },
        ],
      },
      {
        id: generateUniqueId(),
        name: 'Launch',
        status: 'Not started',
        owner: 'Alex Rivera',
        dueDate: 'Sep 30',
        children: [
          {
            id: generateUniqueId(),
            name: 'QA pass',
            status: 'Not started',
            owner: 'Chris Nguyen',
            dueDate: 'Sep 22',
          },
          {
            id: generateUniqueId(),
            name: 'Go-live checklist',
            status: 'Not started',
            owner: 'Alex Rivera',
            dueDate: 'Sep 30',
          },
        ],
      },
    ],
  },
  {
    id: generateUniqueId(),
    name: 'Benefits Open Enrollment',
    status: 'At risk',
    owner: 'Morgan Blake',
    dueDate: 'Nov 14',
    children: [
      {
        id: generateUniqueId(),
        name: 'Preparation',
        status: 'In progress',
        owner: 'Taylor Kim',
        dueDate: 'Oct 10',
        children: [
          {
            id: generateUniqueId(),
            name: 'Vendor data import',
            status: 'Complete',
            owner: 'Taylor Kim',
            dueDate: 'Oct 3',
          },
          {
            id: generateUniqueId(),
            name: 'Manager briefing',
            status: 'In progress',
            owner: 'Morgan Blake',
            dueDate: 'Oct 10',
          },
        ],
      },
      {
        id: generateUniqueId(),
        name: 'Enrollment window',
        status: 'Not started',
        owner: 'Riley Chen',
        dueDate: 'Nov 7',
        children: [
          {
            id: generateUniqueId(),
            name: 'Employee communications',
            status: 'Not started',
            owner: 'Riley Chen',
            dueDate: 'Oct 20',
          },
          {
            id: generateUniqueId(),
            name: 'Help desk coverage',
            status: 'Not started',
            owner: 'Sam Okonkwo',
            dueDate: 'Nov 7',
          },
        ],
      },
      {
        id: generateUniqueId(),
        name: 'Closeout',
        status: 'Not started',
        owner: 'Morgan Blake',
        dueDate: 'Nov 14',
        children: [
          {
            id: generateUniqueId(),
            name: 'Confirm elections',
            status: 'Not started',
            owner: 'Taylor Kim',
            dueDate: 'Nov 12',
          },
          {
            id: generateUniqueId(),
            name: 'Payroll file',
            status: 'Not started',
            owner: 'Morgan Blake',
            dueDate: 'Nov 14',
          },
        ],
      },
    ],
  },
];

const nestedRowStyles = createStyles({
  gridTemplateColumns: 'minmax(12rem, 2fr) repeat(3, 1fr)',
});

const treeCellStencil = createStencil({
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: system.gap.xs,
  },
  modifiers: {
    level: {
      '1': {},
      '2': {
        paddingInlineStart: system.padding.xl,
      },
      '3': {
        paddingInlineStart: calc.multiply(system.padding.xl, 2),
      },
    },
  },
});

const chevronSlotStyles = createStyles({
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  minWidth: system.size.md,
});

const rowKind = {
  1: 'Project',
  2: 'Phase',
  3: 'Task',
} as const;

const statusVariant = {
  'Not started': 'neutral',
  'In progress': 'info',
  'At risk': 'caution',
  Complete: 'positive',
} as const;

interface NestedRowProps {
  item: WorkItem;
  level: 1 | 2 | 3;
  expandedIds: Record<string, boolean>;
  onToggle: (id: string) => void;
}

function NestedRow({item, level, expandedIds, onToggle}: NestedRowProps) {
  const hasChildren = Boolean(item.children?.length);
  const isExpanded = Boolean(expandedIds[item.id]);
  const itemNameId = useUniqueId();

  return (
    <>
      <Table.Row aria-level={level} cs={nestedRowStyles}>
        <Table.Header scope="row">
          <div {...treeCellStencil({level: String(level) as '1' | '2' | '3'})}>
            <span className={chevronSlotStyles}>
              {hasChildren ? (
                <Tooltip title={rowKind[level]}>
                  <TertiaryButton
                    size="small"
                    icon={isExpanded ? chevronDownSmallIcon : chevronRightSmallIcon}
                    aria-expanded={isExpanded}
                    aria-describedby={itemNameId}
                    onClick={() => onToggle(item.id)}
                  />
                </Tooltip>
              ) : null}
            </span>
            <Text id={itemNameId}>{item.name}</Text>
          </div>
        </Table.Header>
        <Table.Cell>
          <StatusIndicator variant={statusVariant[item.status]}>{item.status}</StatusIndicator>
        </Table.Cell>
        <Table.Cell>{item.owner}</Table.Cell>
        <Table.Cell>{item.dueDate}</Table.Cell>
      </Table.Row>
      {hasChildren &&
        isExpanded &&
        item.children?.map(child => (
          <NestedRow
            key={child.id}
            item={child}
            level={(level + 1) as 2 | 3}
            expandedIds={expandedIds}
            onToggle={onToggle}
          />
        ))}
    </>
  );
}

export const NestedRows = () => {
  const [expandedIds, setExpandedIds] = React.useState<Record<string, boolean>>({
    [websiteRedesignId]: true,
  });

  const handleToggle = (id: string) => {
    setExpandedIds(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <>
      <Heading as="h3" id={headingID} size="small">
        Project plan
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row cs={nestedRowStyles}>
            <Table.Header scope="col">Name</Table.Header>
            <Table.Header scope="col">Status</Table.Header>
            <Table.Header scope="col">Owner</Table.Header>
            <Table.Header scope="col">Due date</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {projectData.map(item => (
            <NestedRow
              key={item.id}
              item={item}
              level={1}
              expandedIds={expandedIds}
              onToggle={handleToggle}
            />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

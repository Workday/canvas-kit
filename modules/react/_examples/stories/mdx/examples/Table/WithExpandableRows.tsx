import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Table} from '@workday/canvas-kit-react/table';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {generateUniqueId} from '@workday/canvas-kit-react/common';
import {Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';

import {chevronDownSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface AutoData {
  id: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  engine: string;
  transmission: string;
  horsepower: string;
  torque: string;
  curbWeight: string;
  orderStatus: string;
}

const headingID = generateUniqueId();
const autoData: AutoData[] = [
  {
    id: generateUniqueId(),
    brand: 'Porsche',
    model: '992 911 GT3',
    year: '2022',
    price: 'Starts at $160,000',
    engine: '4.0L Flat 6',
    transmission: 'PDK or 7-Speed Manual',
    horsepower: '502hp',
    torque: '346 lb-ft',
    curbWeight: '3,164 lbs',
    orderStatus: 'Order Placed',
  },
  {
    id: generateUniqueId(),
    brand: 'BMW',
    model: 'M5 Competition',
    year: '2018',
    price: 'Starts at $105,000',
    engine: 'Twin-Turbo 4.4L V8',
    transmission: 'Automatic',
    horsepower: '627hp',
    torque: '553 lb-ft',
    curbWeight: '4,345 lbs',
    orderStatus: 'Order Fulfilled',
  },
  {
    id: generateUniqueId(),
    brand: 'Audi',
    model: 'R8',
    year: '2022',
    price: 'Starts at $148,000',
    engine: '5.2L V10',
    transmission: 'Automatic',
    horsepower: '562hp',
    torque: '408 lb-ft',
    curbWeight: '3,594 lbs',
    orderStatus: 'Order Fulfilled',
  },
  {
    id: generateUniqueId(),
    brand: 'Lotus',
    model: 'Emira',
    year: '2023',
    price: 'Starts at $78,000',
    engine: 'Supercharged 3.5L V6',
    transmission: 'Automatic or 6-Speed Manual',
    horsepower: '400hp',
    torque: '317 lb-ft',
    curbWeight: '3520 lbs',
    orderStatus: 'Shipped: In Transit',
  },
  {
    id: generateUniqueId(),
    brand: 'Toyota',
    model: 'Supra',
    year: '1998',
    price: '$40,000 - $80,000',
    engine: '3.0L Inline 6',
    transmission: 'Automatic or 6-Speed Manual',
    horsepower: '320hp',
    torque: '315 lb-ft',
    curbWeight: '3,599 lbs',
    orderStatus: 'Delivered',
  },
  {
    id: generateUniqueId(),
    brand: 'Nissan',
    model: 'Skyline GT-R',
    year: '1994',
    price: '$45,000 - $90,000',
    engine: '2.6L Twin-Turbo Inline 6',
    transmission: '5-Speed Manual',
    horsepower: '276hp',
    torque: '260 lb-ft',
    curbWeight: '3,153 lbs',
    orderStatus: 'Delivered',
  },
];

interface RowProps {
  data: AutoData;
}

const expandableSectionStyles = createStyles({
  alignItems: 'flex-start',
  display: 'flex',
  gap: system.space.x4,
  padding: system.space.x8,
});

const expandableHeadingStyles = createStyles({
  margin: 0,
  fontWeight: system.fontWeight.bold,
});

const expandableListStyles = createStyles({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: system.space.x2,
});

function ExpandableRow({data}: RowProps) {
  const [rowExpanded, setRowExpanded] = React.useState(false);

  return (
    <>
      <Table.Row gridTemplateColumns="4rem repeat(4, 1fr)">
        <Table.Cell>
          <Tooltip title={`${data.brand} ${data.model}`}>
            <TertiaryButton
              size="small"
              icon={rowExpanded ? chevronDownSmallIcon : chevronRightSmallIcon}
              aria-expanded={rowExpanded}
              onClick={() => setRowExpanded(!rowExpanded)}
            />
          </Tooltip>
        </Table.Cell>
        <Table.Header scope="row">{data.brand}</Table.Header>
        <Table.Cell>{data.model}</Table.Cell>
        <Table.Cell>{data.year}</Table.Cell>
        <Table.Cell>{data.price}</Table.Cell>
      </Table.Row>
      {rowExpanded && (
        <Table.Row>
          <Table.Cell colSpan={5} cs={expandableSectionStyles}>
            <div>
              <Subtext as="h4" size="large" cs={expandableHeadingStyles}>
                Status
              </Subtext>
              <StatusIndicator variant="blue">{data.orderStatus}</StatusIndicator>
            </div>
            <div>
              <Subtext as="h4" size="large" cs={expandableHeadingStyles}>
                Specifications
              </Subtext>
              <ul className={expandableListStyles}>
                <Subtext as="li" size="large">
                  Engine: {data.engine}
                </Subtext>
                <Subtext as="li" size="large">
                  Transmission: {data.transmission}
                </Subtext>
                <Subtext as="li" size="large">
                  Horsepower: {data.horsepower}
                </Subtext>
                <Subtext as="li" size="large">
                  Torque: {data.torque}
                </Subtext>
                <Subtext as="li" size="large">
                  Curb Weight: {data.curbWeight}
                </Subtext>
              </ul>
            </div>
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
}

export const ExpandableRows = () => {
  return (
    <>
      <Heading as="h3" id={headingID} size="small">
        Showroom Inventory
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row gridTemplateColumns="4rem repeat(4, 1fr)">
            <Table.Cell></Table.Cell>
            <Table.Header scope="col">Make</Table.Header>
            <Table.Header scope="col">Model</Table.Header>
            <Table.Header scope="col">Year</Table.Header>
            <Table.Header scope="col">Price</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {autoData.map(item => (
            <ExpandableRow key={item.id} data={item} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';
import {Heading, Subtext} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {chevronDownIcon, chevronRightIcon} from '@workday/canvas-system-icons-web';

function ExpandableRow(props) {
  const [rowExpanded, setRowExpanded] = React.useState(false);
  const listItemStyles = {
    display: 'inline',
    border: `1px solid ${colors.blueberry300}`,
    margin: '0 .5em',
    padding: '.25em .5em',
  };

  const expansion = (
    <Table.Row>
      <Table.Cell colSpan={10} style={{border: `1px solid ${colors.blueberry400}`}}>
        <Subtext as="h4" size="medium">
          Order status:
        </Subtext>
        <ul>
          <li style={listItemStyles} aria-current="true">
            Order Placed
          </li>
          <li style={listItemStyles}>Order Fulfilled</li>
          <li style={listItemStyles}>Shipped: In Transit</li>
          <li style={listItemStyles}>Delivered</li>
        </ul>
      </Table.Cell>
    </Table.Row>
  );

  function expandToggleHandler() {
    setRowExpanded(prev => (prev ? false : true));
  }

  return (
    <>
      <Table.Row gridTemplateColumns="4em 25% 25% 25% 25%">
        <Table.Cell width={'3.5em'}>
          <Tooltip title={`${props.rowData.brand} ${props.rowData.model}`}>
            <SecondaryButton
              icon={rowExpanded ? chevronDownIcon : chevronRightIcon}
              aria-expanded={rowExpanded ? 'true' : 'false'}
              onClick={expandToggleHandler}
            />
          </Tooltip>
        </Table.Cell>
        <Table.Header
          scope="row"
          left="0"
          backgroundColor={colors.soap100}
          borderRight={`2px solid ${colors.soap400}`}
        >
          {props.rowData.brand}
        </Table.Header>
        <Table.Cell>{props.rowData.model}</Table.Cell>
        <Table.Cell>{props.rowData.year}</Table.Cell>
        <Table.Cell>{props.rowData.price}</Table.Cell>
      </Table.Row>
      {rowExpanded && expansion}
    </>
  );
}

export const ExpandableRows = () => {
  const headingID = useUniqueId();
  const exampleData = [
    {
      id: useUniqueId(),
      brand: 'Porsche',
      model: '992 911 GT3',
      year: '2022',
      price: 'Starts at $160,000',
      engine: '4.0L Flat 6',
      transmission: 'PDK or 7-Speed Manual',
      horsepower: '502hp',
      torque: '346 lb-ft',
      curbWeight: '3,164 lbs',
    },
    {
      id: useUniqueId(),
      brand: 'BMW',
      model: 'M5 Competition',
      year: '2018',
      price: 'Starts at $105,000',
      engine: 'Twin-Turbo 4.4L V8',
      transmission: 'Automatic',
      horsepower: '627hp',
      torque: '553 lb-ft',
      curbWeight: '4,345 lbs',
    },
    {
      id: useUniqueId(),
      brand: 'Audi',
      model: 'R8',
      year: '2022',
      price: 'Starts at $148,000',
      engine: '5.2L V10',
      transmission: 'Automatic',
      horsepower: '562hp',
      torque: '408 lb-ft',
      curbWeight: '3,594 lbs',
    },
    {
      id: useUniqueId(),
      brand: 'Lotus',
      model: 'Emira',
      year: '2023',
      price: 'Starts at $78,000',
      engine: 'Supercharged 3.5L V6',
      transmission: 'Automatic or 6-Speed Manual',
      horsepower: '400hp',
      torque: '317 lb-ft',
      curbWeight: '3520 lbs',
    },
    {
      id: useUniqueId(),
      brand: 'Toyota',
      model: 'Supra',
      year: '1998',
      price: '$40,000 - $80,000',
      engine: '3.0L Inline 6',
      transmission: 'Automatic or 6-Speed Manual',
      horsepower: '320hp',
      torque: '315 lb-ft',
      curbWeight: '3,599 lbs',
    },
    {
      id: useUniqueId(),
      brand: 'Nissan',
      model: 'Skyline GT-R',
      year: '1994',
      price: '$45,000 - $90,000',
      engine: '2.6L Twin-Turbo Inline 6',
      transmission: '5-Speed Manual',
      horsepower: '276hp',
      torque: '260 lb-ft',
      curbWeight: '3,153 lbs',
    },
  ];

  return (
    <>
      <Heading as="h3" id={headingID} size="small" marginBottom="s">
        Showroom Inventory
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row gridTemplateColumns="4em 25% 25% 25% 25%">
            <Table.Cell></Table.Cell>
            <Table.Header
              scope="col"
              left="0"
              backgroundColor={colors.soap100}
              borderRight={`2px solid ${colors.soap400}`}
            >
              Brand
            </Table.Header>
            <Table.Header scope="col">Model</Table.Header>
            <Table.Header scope="col">Year</Table.Header>
            <Table.Header scope="col">Price</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {exampleData.map((item, index) => (
            <ExpandableRow key={item.id} rowData={item} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

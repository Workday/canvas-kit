import React from 'react';

import {Table} from '@workday/canvas-kit-preview-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const FixedColumn = () => {
  const exampleData = [
    {
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
      <Heading size="small">Performance Car Specs</Heading>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header
              position="sticky"
              left="0"
              backgroundColor="soap100"
              borderRight={`2px solid ${colors.soap400}`}
            >
              Brand
            </Table.Header>
            <Table.Header>Model</Table.Header>
            <Table.Header>Year</Table.Header>
            <Table.Header>Price</Table.Header>
            <Table.Header>Engine</Table.Header>
            <Table.Header>Transmission</Table.Header>
            <Table.Header>Horsepower</Table.Header>
            <Table.Header>Torque</Table.Header>
            <Table.Header>Tires</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {exampleData.map(item => (
            <>
              <Table.Row>
                <Table.Header
                  position="sticky"
                  left="0"
                  backgroundColor="soap100"
                  borderRight={`2px solid ${colors.soap400}`}
                >
                  {item.brand}
                </Table.Header>
                <Table.Cell border="2px solid red">{item.model}</Table.Cell>
                <Table.Cell border="2px solid red">{item.year}</Table.Cell>
                <Table.Cell border="2px solid red">{item.price}</Table.Cell>
                <Table.Cell border="2px solid red">{item.engine}</Table.Cell>
                <Table.Cell border="2px solid red">{item.transmission}</Table.Cell>
                <Table.Cell border="2px solid red">{item.horsepower}</Table.Cell>
                <Table.Cell border="2px solid red">{item.torque}</Table.Cell>
                <Table.Cell border="2px solid red">{item.curbWeight}</Table.Cell>
              </Table.Row>
            </>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

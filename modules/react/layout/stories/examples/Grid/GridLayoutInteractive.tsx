import * as React from 'react';
import {Grid} from '@workday/canvas-kit-react/layout';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
// eslint-disable-next-line no-duplicate-imports
import {useState, useEffect, useRef} from 'react';
import {
  arrowDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  arrowUpIcon,
} from '@workday/canvas-system-icons-web';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      padding="xs"
      justifyContent="center"
      backgroundColor="soap500"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

const CellItem = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      gridAutoColumns="max-content"
      gridGap="0 16px"
      height="100%"
      gridAutoFlow="column"
      padding="xs"
      justifyContent="center"
      backgroundColor="peach300"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayoutInteractive = () => {
  const [rowCount, setRowCount] = useState(1);
  const [colCount, setColCount] = useState(1);

  const Prev = val => {
    const ref = useRef();
    useEffect(() => {
      ref.current = val;
    }, [val]);
    return ref.current;
  };

  const prevRowCount = Prev(rowCount);
  const prevColCount = Prev(colCount);

  const plusMinus = (curr, prev) => {
    if (curr <= 2 && (!prev || prev <= 2)) {
      return true;
    }
  };

  const incDec = (curr, prev, func) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    plusMinus(curr, prev) ? func(curr + 1) : func(curr - 1);
  };

  return (
    <Grid gridAutoFlow="row" padding="xs" gridGap="10px 0">
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gridGap="10px"
        padding="xs"
        border="5px solid #c860d1"
      >
        <Grid.Item gridRowStart={rowCount} gridColumnStart={colCount}>
          <CellItem>
            <PrimaryButton
              size="extraSmall"
              icon={plusMinus(rowCount, prevRowCount) ? arrowDownIcon : arrowUpIcon}
              onClick={() => {
                incDec(rowCount, prevRowCount, setRowCount);
              }}
            >
              Row: {rowCount}
            </PrimaryButton>
            <PrimaryButton
              size="extraSmall"
              icon={plusMinus(colCount, prevColCount) ? arrowRightIcon : arrowLeftIcon}
              onClick={() => {
                incDec(colCount, prevColCount, setColCount);
              }}
            >
              Col: {colCount}
            </PrimaryButton>
          </CellItem>
        </Grid.Item>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
        <Cell>7</Cell>
        <Cell>8</Cell>
        <Cell>9</Cell>
      </Grid>
    </Grid>
  );
};

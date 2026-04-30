import React, {useEffect, useRef, useState} from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Grid} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  arrowDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  arrowUpIcon,
} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const baseStyles = createStyles({
  padding: system.gap.sm,
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
  alignContent: 'center',
  justifyContent: 'center',
});

const Cell = (props: {children: React.ReactNode}) => {
  return <Grid cs={baseStyles}>{props.children}</Grid>;
};

const cellItemStyles = createStyles({
  alignContent: 'center',
  gridAutoColumns: 'max-content',
  height: '100%',
  gridAutoFlow: 'column',
  padding: system.gap.sm,
  justifyContent: 'center',
  backgroundColor: system.color.surface.alt.default,
  color: system.color.fg.default,
  borderRadius: system.shape.md,
});

const CellItem = (props: {children: React.ReactNode}) => {
  return <Grid cs={cellItemStyles}>{props.children}</Grid>;
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
    <Grid cs={{gridAutoFlow: 'row', padding: system.gap.sm}}>
      <Grid
        cs={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gridGap: system.gap.sm,
          padding: system.gap.sm,
          border: `${px2rem(5)} solid ${base.magenta600}`,
        }}
      >
        <Grid.Item cs={{gridRowStart: rowCount, gridColumnStart: colCount}}>
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

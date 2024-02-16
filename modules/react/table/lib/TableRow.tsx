import * as React from 'react';
import styled, {CSSObject} from '@emotion/styled';
import {rgba} from 'polished';
import {colors, space, statusColors} from '@workday/canvas-kit-react/tokens';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {borderColor, borderWidth, cellBorder} from './Table';

/**
 * @deprecated ⚠️ `Table` has been deprecated and will be removed in a future major version. Please use [`Table`](https://workday.github.io/canvas-kit/?path=/docs/preview-table--basic) in Preview instead.
 */
export enum TableRowState {
  Error,
  Alert,
  InputError,
  InputAlert,
  Hover,
  Selected,
}

/**
 * @deprecated ⚠️ `Table` has been deprecated and will be removed in a future major version. Please use [`Table`](https://workday.github.io/canvas-kit/?path=/docs/preview-table--basic) in Preview instead.
 */
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * The state of the TableRow. Accepts `Error`, `Alert`, `InputError`, `InputAlert`, `Hover`, or `Selected`.
   */
  state?: TableRowState;

  /**
   * If true, render the TableRow with header elements.
   * @default false
   */
  header?: boolean;
}

const errorColor = statusColors.error;
const errorColorLight = colors.cinnamon200;
const alertColor = statusColors.warning;
const alertColorLight = colors.cantaloupe200;

function makeColoredRow(_bgColor: string, _borderColor: string): CSSObject {
  return {
    backgroundColor: _bgColor,
    position: 'relative',

    // Bottom border
    '&:before, &:after': {
      position: 'absolute',
      left: 0,
      top: -borderWidth,
      content: '""',
      width: `calc(100% + ${borderWidth}px)`,
      height: borderWidth,
      backgroundColor: _borderColor,
    },

    '&:after': {
      top: 'auto',
      bottom: -borderWidth,
    },

    '&:first-of-type': {
      boxShadow: `inset ${borderWidth}px 0 0 ${_borderColor}`,
    },

    '&:last-child': {
      boxShadow: `inset -${borderWidth}px 0 0 ${_borderColor}`,
      '&:before, &:after': {
        width: '100%',
      },
    },
  };
}

function makeColoredRowStyle(_bgColor: string, _borderColor: string): CSSObject {
  const lightenedBg = rgba(_bgColor, 0.2);
  return {
    'th, td': [
      makeColoredRow(lightenedBg, _bgColor),
      {
        borderLeftColor: _borderColor,
        borderRightColor: _borderColor,
      },
    ],
    '&:hover': {
      'th, td': {
        backgroundColor: lightenedBg,
      },
    },
  };
}

function makeBorderlessStyle(_bgColor: string): CSSObject {
  return {
    'th, td': {
      backgroundColor: rgba(_bgColor, 0.2),
    },
  };
}

const StyledTableRow = styled('tr')<TableRowProps>(
  {
    'th, td': {
      backgroundColor: colors.frenchVanilla100,
      padding: `${space.xs} ${space.xxs}`,
      fontSize: 13,
      borderRight: cellBorder,
      borderBottom: cellBorder,
      height: `calc(${space.xl} + ${space.xxs})`,
      boxSizing: 'border-box',
      transition: 'background-color 0.2s',
    },
    td: {
      '&:last-child': {
        borderRight: 'none',
      },
    },
    th: {
      height: space.xxl,
      '&:last-child': {
        borderRight: 'none',
      },
    },
    '&:last-child': {
      'th, td': {
        borderBottom: 'none',
      },
    },
  },
  ({header}) =>
    header && {
      '&:last-child': {
        'th, td': {
          borderBottom: '1px solid transparent',
        },
      },
      'th, td': {
        position: 'relative',
        backgroundColor: colors.frenchVanilla100,
        verticalAlign: 'middle', // Bottom border
        '&:after': {
          position: 'absolute',
          left: 0,
          bottom: -borderWidth,
          content: '""',
          width: `calc(100% + ${borderWidth}px)`,
          height: borderWidth,
          backgroundColor: borderColor,
        },
        '&:last-child': {
          '&:after': {
            width: '100%',
          },
        },
      },
    },
  ({state}) => {
    switch (state) {
      case TableRowState.InputError:
        return makeBorderlessStyle(errorColor);
      case TableRowState.Error:
        return makeColoredRowStyle(errorColor, errorColorLight);
      case TableRowState.InputAlert:
        return makeBorderlessStyle(alertColor);
      case TableRowState.Alert:
        return makeColoredRowStyle(alertColor, alertColorLight);
      case TableRowState.Selected:
        return {
          'th, td': [
            makeColoredRow(colors.blueberry100, colors.blueberry500),
            {
              '&:after': {
                zIndex: 2,
              },
            },
          ],
        };
      default:
        return {
          '&:hover': {
            'th, td': {
              backgroundColor: colors.soap300,
            },
          },
          '&:focus': {
            outline: 'none',
            'th, td': [
              makeColoredRow(colors.blueberry100, colors.blueberry500),
              {
                '&:after': {
                  zIndex: 2,
                },
              },
            ],
          },
        };
    }
  }
);

/**
 * @deprecated ⚠️ `Table` has been deprecated and will be removed in a future major version. Please use [`Table`](https://workday.github.io/canvas-kit/?path=/docs/preview-table--basic) in Preview instead.
 */
export const TableRow = createComponent('tr')({
  displayName: 'TableRow',
  Component: (
    {state, header, children, ...elemProps}: TableRowProps & StyledType,
    ref,
    Element
  ) => {
    return (
      <StyledTableRow as={Element} ref={ref} state={state} header={header} {...elemProps}>
        {children}
      </StyledTableRow>
    );
  },
  subComponents: {
    State: TableRowState,
  },
});

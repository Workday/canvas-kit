import * as React from 'react';
import {Interpolation} from 'emotion';
import styled from 'react-emotion';
import {rgba} from 'polished';
import {colors, spacing, spacingNumbers} from '@workday/canvas-kit-react-core';
import {borderColor, borderWidth, cellBorder} from './Table';

export enum TableRowStates {
  Error,
  Alert,
  InputError,
  InputAlert,
  Hover,
  Selected,
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * State of the row
   */
  state?: TableRowStates;

  /**
   * Whether or not the row contains header elements
   */
  header?: boolean;
}

const errorColor = colors.cinnamon400;
const errorColorLight = colors.cinnamon200;
const alertColor = colors.cantaloupe400;
const alertColorLight = colors.cantaloupe200;

function makeColoredRow(_bgColor: string, _borderColor: string): Interpolation {
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

    '&:first-child': {
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

function makeColoredRowStyle(_bgColor: string, _borderColor: string): Interpolation {
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

function makeBorderlessStyle(_bgColor: string): Interpolation {
  return {
    'th, td': {
      backgroundColor: rgba(_bgColor, 0.2),
    },
  };
}

const Row = styled('tr')<TableRowProps>(
  {
    'th, td': {
      backgroundColor: colors.frenchVanilla100,
      padding: `${spacing.xs} ${spacing.xxs}`,
      fontSize: 13,
      borderRight: cellBorder,
      borderBottom: cellBorder,
      height: spacingNumbers.xl + spacingNumbers.xxs,
      boxSizing: 'border-box',
      transition: 'background-color 0.2s',
    },
    td: {
      '&:last-child': {
        borderRight: 'none',
      },
    },
    th: {
      height: spacing.xxl,
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
    const styles: Interpolation = [];

    switch (state) {
      case TableRowStates.InputError:
        styles.push(makeBorderlessStyle(errorColor));
        break;
      case TableRowStates.Error:
        styles.push(makeColoredRowStyle(errorColor, errorColorLight));
        break;
      case TableRowStates.InputAlert:
        styles.push(makeBorderlessStyle(alertColor));
        break;
      case TableRowStates.Alert:
        styles.push(makeColoredRowStyle(alertColor, alertColorLight));
        break;
      case TableRowStates.Selected:
        styles.push({
          'th, td': [
            makeColoredRow(colors.blueberry100, colors.blueberry500),
            {
              '&:after': {
                zIndex: 2,
              },
            },
          ],
        });
        break;
      default:
        styles.push({
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
        });
    }

    return styles;
  }
);

export default class TableRow extends React.Component<TableRowProps> {
  public static State = TableRowStates;

  public render() {
    const {state, header, children, ...elemProps} = this.props;

    return (
      <Row state={state} header={header} {...elemProps}>
        {children}
      </Row>
    );
  }
}

import {getErrorColors, styled} from '@workday/canvas-kit-react/common';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {RadioGroupProps} from '../RadioGroup';

const Container = styled('div')<Pick<RadioGroupProps, 'error' | 'grow' | 'theme'>>(
  {
    display: 'inline-block',
    boxSizing: 'border-box',
    borderRadius: borderRadius.m,
    padding: `${space.xxxs} ${space.xs}`,
    margin: `-${space.xxxs} -${space.xs}`,
    '& > div': {
      margin: `${space.xxs} ${space.zero}`,
      '&:first-of-type': {
        marginTop: space.xxxs,
      },
      '&:last-child': {
        marginBottom: space.xxxs,
      },
    },
  },
  ({grow}) => grow && {width: '100%'},
  ({error, theme}) => {
    const errorColors = getErrorColors(error, theme);
    return {
      transition: '100ms box-shadow',
      boxShadow:
        errorColors.outer !== errorColors.inner
          ? `inset 0 0 0 1px ${errorColors.outer}, inset 0 0 0 3px ${errorColors.inner}`
          : `inset 0 0 0 2px ${errorColors.inner}`,
    };
  }
);

export default Container;

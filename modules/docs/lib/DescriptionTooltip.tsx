import styled from '@emotion/styled';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {colors} from '@workday/canvas-kit-react/tokens';

export const DescriptionTooltip = styled(Tooltip)({
  ':before': {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.blackPepper500,
    backgroundColor: 'rgba(255,255,255,.85)',
  },
});

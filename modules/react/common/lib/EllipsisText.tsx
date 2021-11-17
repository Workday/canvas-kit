import styled, {CSSObject} from '@emotion/styled';
import {ElementComponent} from '..';

export const ellipsisStyles: CSSObject = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

// Recast as an `ElementComponent` due to better type support for `as` and `ref`
export const EllipsisText = (styled('span')(ellipsisStyles) as any) as ElementComponent<'span', {}>;

import styled, {CSSObject} from '@emotion/styled';

import {createComponent} from './utils';

export const ellipsisStyles: CSSObject = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

const StyledEllipsisComponent = styled('span')(ellipsisStyles);

export const EllipsisText = createComponent('span')({
  displayName: 'EllipsisText',
  Component(elemProps = {}, ref, Element) {
    return <StyledEllipsisComponent as={Element} ref={ref} {...elemProps} />;
  },
});

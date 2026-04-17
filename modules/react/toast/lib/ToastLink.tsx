import {Hyperlink, HyperlinkProps} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface ToastLinkProps extends HyperlinkProps {}

export const ToastLink = createComponent('a')({
  displayName: 'Toast.Link',
  Component: ({children, href, ...elemProps}: ToastLinkProps, ref, Element) => {
    return (
      <Hyperlink ref={ref} href={href} as={Element} {...elemProps}>
        {children}
      </Hyperlink>
    );
  },
});

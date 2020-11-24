import * as React from 'react';
import styled from '@emotion/styled';
import {IconButton, IconButtonVariant} from '@workday/canvas-kit-react-button';
import {chevronRightIcon} from '@workday/canvas-system-icons-web';
import {spacing} from '@workday/canvas-kit-react-core';
import uuid from 'uuid/v4';

export interface ExpandableProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the Expandable header.
   */
  header: React.ReactNode;
  /**
   * The content of the expandable/collapsible section.
   */
  children: React.ReactNode;
  /**
   * If the expandable container should start out expanded.
   * @default false
   */
  expanded?: boolean;
}

const Container = styled('div')({});

const Toggle = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const ButtonContainer = styled('div')<{open: boolean}>(({open}) => ({
  marginRight: spacing.xxs,
  transform: open ? 'rotate(90deg)' : undefined,
}));

const HeaderContainer = styled('div')({
  cursor: 'pointer',
});

const ChildrenContainer = styled('div')<{open: boolean}>(({open}) => ({
  display: open ? 'block' : 'none',
  padding: `${spacing.xxs}`,
  overflow: 'hidden',
}));

const Expandable: React.FC<ExpandableProps> = ({header, expanded, children, ...otherProps}) => {
  const [open, setOpen] = React.useState<boolean>(expanded ?? false);
  const childContainerRef = React.useRef<HTMLDivElement>(null);

  // When the container is expanded, shift focus to the child container element
  React.useEffect(() => {
    if (open) {
      childContainerRef.current?.focus();
    }
  }, [open]);

  const headerId = uuid();
  const contentId = uuid();

  return (
    <Container {...otherProps}>
      <Toggle>
        <ButtonContainer open={open}>
          <IconButton
            aria-label={`${open ? 'Collapse' : 'Expand'}`}
            aria-expanded={open}
            aria-controls={contentId}
            aria-labelledby={headerId}
            icon={chevronRightIcon}
            variant={IconButtonVariant.Circle}
            size={IconButton.Size.Small}
            onClick={() => setOpen(open => !open)}
          />
        </ButtonContainer>
        <HeaderContainer id={headerId} onClick={() => setOpen(open => !open)}>
          {typeof header === 'string' ? <h3 title={header}>{header}</h3> : header}
        </HeaderContainer>
      </Toggle>
      <ChildrenContainer
        ref={childContainerRef}
        id={contentId}
        role="region"
        tabIndex={-1}
        open={open}
      >
        {children}
      </ChildrenContainer>
    </Container>
  );
};

export default Expandable;

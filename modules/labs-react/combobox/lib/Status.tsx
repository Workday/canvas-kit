import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {accessibleHide} from '@workday/canvas-kit-react/common';

export interface StatusProps {
  ariaLive?: 'polite' | 'assertive' | 'off';
  role?: 'log' | 'status' | 'alert' | 'progressbar' | 'marquee' | 'timer';
  ariaRelevant?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
  ariaAtomic?: boolean;
  expireMilliseconds?: number;
  announcementText?: string;
}

const Container = styled('div')(accessibleHide);

export const Status = ({
  ariaLive = 'polite',
  role = 'status',
  ariaRelevant = 'additions',
  expireMilliseconds = 500,
  announcementText = '',
  ariaAtomic,
}: StatusProps) => {
  const [displayText, setDisplayText] = useState(announcementText);
  useEffect(() => {
    if (!announcementText) {
      return;
    }
    setDisplayText(announcementText);
    const clearText = setTimeout(() => setDisplayText(''), expireMilliseconds);

    return () => {
      clearTimeout(clearText);
    };
  }, [announcementText, expireMilliseconds]);
  return (
    <Container
      aria-live={ariaLive}
      role={role}
      aria-relevant={ariaRelevant}
      aria-atomic={ariaAtomic}
    >
      {displayText}
    </Container>
  );
};

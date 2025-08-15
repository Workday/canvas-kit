import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {accessibleHide} from '@workday/canvas-kit-react/common';

/**
 * @deprecated ⚠️ `StatusProps` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
export interface StatusProps {
  ariaLive?: 'polite' | 'assertive' | 'off';
  role?: 'log' | 'status' | 'alert' | 'progressbar' | 'marquee' | 'timer';
  ariaRelevant?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
  ariaAtomic?: boolean;
  expireMilliseconds?: number;
  announcementText?: string;
}

const Container = styled('div')(accessibleHide);

/**
 * @deprecated ⚠️ `Status` in Labs has been deprecated and will be removed in a future major version. Please use [`Combobox` in Main](https://workday.github.io/canvas-kit/?path=/docs/features-combobox--docs) instead.
 */
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

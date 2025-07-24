import React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Text} from '@workday/canvas-kit-react/text';
import {LoadingSparkles} from '@workday/canvas-kit-preview-react/loading-sparkles';
import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';

const containerStyles = createStyles({
  minHeight: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const Basic = () => {
  const [loadingStatus, setLoadingStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const [quote, setQuote] = React.useState('');

  React.useEffect(() => {
    if (loadingStatus === 'loading') {
      const mockLoading = setTimeout(() => {
        setLoadingStatus('success');
        setQuote(getQuote());
      }, 3000);

      return () => {
        clearTimeout(mockLoading);
      };
    }
  }, [loadingStatus]);

  const handleClick = () => {
    setQuote('');
    setLoadingStatus('loading');
  };

  return (
    <div>
      <div className={containerStyles}>
        {quote && <Text cs={{maxWidth: '60ch'}}>{quote}</Text>}
        <AriaLiveRegion>
          {loadingStatus === 'loading' && <LoadingSparkles aria-label="loading" />}
          {loadingStatus === 'success' && (
            <AccessibleHide role="status">loading complete</AccessibleHide>
          )}
        </AriaLiveRegion>
      </div>
      <SecondaryButton onClick={handleClick}>Generate Quote</SecondaryButton>
    </div>
  );
};

const robotQuotes = [
  'The Zeroth Law: A robot may not harm humanity, or, by inaction, allow humanity to come to harm.',
  'Law 1: A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
  'Law 2: A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.',
  'Law 3: A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.',
  'There is nothing so eternally adhesive as the memory of power.',
];

const getQuote = () => {
  const index = Math.floor(Math.random() * robotQuotes.length);
  return robotQuotes[index];
};

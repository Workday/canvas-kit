import React, {useState, useEffect} from 'react';

export const useTruncateTooltip = (ref?: React.RefObject<HTMLLIElement | HTMLAnchorElement>) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
  useEffect(() => {
    if (ref?.current) {
      setShouldShowTooltip(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [ref]);

  const openTooltip = (event: React.MouseEvent | React.FocusEvent) => {
    const {currentTarget} = event;
    // if the target is truncated, show the tooltip
    if (currentTarget.scrollWidth > currentTarget.clientWidth) {
      setIsTooltipOpen(true);
    }
  };

  const closeTooltip = () => {
    setIsTooltipOpen(false);
  };

  const tooltipProps = {
    role: 'tooltip',
  };

  return {
    isTooltipOpen,
    openTooltip,
    closeTooltip,
    shouldShowTooltip,
    tooltipProps,
  };
};

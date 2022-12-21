import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {useResizeObserver, useTheme} from '@workday/canvas-kit-react/common';

export const ResponsiveRange = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);
  // Normally, rangeSize can be a static value, but we're making it stateful,
  // so we can update it using useResizeObserver
  const [rangeSize, setRangeSize] = React.useState(5);
  const model = usePaginationModel({
    lastPage,
    rangeSize,
  });
  // We're only using this state to display the container width;
  const [containerWidth, setContainerWidth] = React.useState(0);
  // We're using breakpoints from the theme as reference points to adjust the range
  const theme = useTheme();
  const {values: breakpointValues} = theme.canvas.breakpoints;

  // We'll use this ref to measure the size of the container
  const containerRef = React.useRef(null);
  useResizeObserver({
    ref: containerRef,
    onResize: ({width}) => {
      // Note: onResizeObserver only accounts for the size of the container.
      // It does not factor in margin, padding, or border widths.
      // If you want to be exact, adjust your math to account for those.
      // If you're okay with being close enough on the measurements, this is fine.
      if (width) {
        // updating the container width for the display text
        setContainerWidth(width);
        // helper functions for better readability
        const isBetweenZeroAndSmall = width >= breakpointValues.zero && width < breakpointValues.s;
        const isBetweenSmallAndMedium = width >= breakpointValues.s && width < breakpointValues.m;
        const isBetweenMediumAndLarge = width >= breakpointValues.m && width < breakpointValues.l;
        const isBetweenLargeAndXLarge = width >= breakpointValues.l && width < breakpointValues.xl;
        // We're checking the rangeSize at each level to prevent extra re-renders.
        if (rangeSize !== 1 && isBetweenZeroAndSmall) {
          setRangeSize(1);
        }
        if (rangeSize !== 3 && isBetweenSmallAndMedium) {
          setRangeSize(3);
        }
        if (rangeSize !== 5 && isBetweenMediumAndLarge) {
          setRangeSize(5);
        }
        if (rangeSize !== 7 && isBetweenLargeAndXLarge) {
          setRangeSize(7);
        }
      }
    },
  });

  return (
    <Flex
      border="solid 1px"
      ref={containerRef}
      justifyContent="space-between"
      padding="s"
      alignItems="center"
    >
      <Text typeLevel="body.small" fontWeight="bold">
        Width: {containerWidth}px
      </Text>
      <Pagination model={model} aria-label="Pagination">
        <Pagination.Controls>
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={`Page ${pageNumber}`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )} of ${totalCount} results`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
    </Flex>
  );
};

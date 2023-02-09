import React from 'react';
import {ContentDirection} from '@workday/canvas-kit-react/common';
import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';

import {customColorTheme, withSnapshotsEnabled} from '../../../../utils/storybook';

import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '../lib/Pagination';

export default withSnapshotsEnabled({
  title: 'Testing/Navigation/Pagination',
  component: Pagination,
});

const TableRenderer = ({theme}) => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <StaticStates theme={theme} style={{display: 'inline-block'}}>
      <ComponentStatesTable
        rowProps={[
          {label: 'Step Controls', props: {}},
          {label: 'Jump Controls', props: {shouldShowJumpControls: true}},
          {label: 'GoTo Form', props: {shouldShowJumpControls: true, shouldShowGoToForm: true}},
          {
            label: 'Additional Details',
            props: {
              shouldShowJumpControls: true,
              shouldShowGoToForm: true,
              shouldShowAddtionalDetails: true,
            },
          },
        ]}
        columnProps={[
          {
            label: 'First Page is Active',
            props: {},
          },
          {
            label: 'Middle Page is Active',
            props: {
              initialCurrentPage: 5,
            },
          },
          {
            label: 'Last Page is Active',
            props: {
              initialCurrentPage: 10,
            },
          },
        ]}
      >
        {props => (
          <Pagination
            aria-label="Pagination"
            lastPage={lastPage}
            rangeSize={3}
            initialCurrentPage={props.initialCurrentPage}
          >
            <Pagination.Controls>
              {props.shouldShowJumpControls && <Pagination.JumpToFirstButton aria-label="First" />}
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
              {props.shouldShowJumpControls && <Pagination.JumpToLastButton aria-label="Last" />}
              {props.shouldShowGoToForm && (
                <Pagination.GoToForm>
                  <Pagination.GoToTextInput aria-label="Go to page number" />
                  <Pagination.GoToLabel>
                    {() =>
                      theme.canvas.direction === ContentDirection.RTL
                        ? `من 100 صفحات`
                        : `of ${totalCount} pages`
                    }
                  </Pagination.GoToLabel>
                </Pagination.GoToForm>
              )}
            </Pagination.Controls>
            <Pagination.AdditionalDetails shouldHideDetails={!props.shouldShowAddtionalDetails}>
              {({state}) =>
                theme.canvas.direction === ContentDirection.RTL
                  ? `${getVisibleResultsMax(
                      state.currentPage,
                      resultCount,
                      totalCount
                    )}-${getVisibleResultsMin(state.currentPage, resultCount)} من 100 صفحات`
                  : `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
                      state.currentPage,
                      resultCount,
                      totalCount
                    )} of ${totalCount} pages`
              }
            </Pagination.AdditionalDetails>
          </Pagination>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const VisualStatesLeftToRight = () => {
  return (
    <>
      <h2>Left-To-Right Pagination</h2>
      <TableRenderer theme={{canvas: {direction: ContentDirection.LTR}}} />
    </>
  );
};

export const VisualStatesThemed = () => {
  return (
    <>
      <h2>Themed</h2>
      <TableRenderer theme={{canvas: customColorTheme}} />
    </>
  );
};

export const VisualStatesRightToLeft = () => {
  return (
    <>
      <h2>Right-To-Left Pagination</h2>
      <TableRenderer theme={{canvas: {direction: ContentDirection.RTL}}} />
    </>
  );
};

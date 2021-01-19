/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react-common';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';

import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Pagination} from '../lib/Pagination';

import README from '../README.md';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Pagination',
  component: Pagination,
  decorators: [withReadme(README)],
});

const TableRenderer = ({direction = ContentDirection.LTR}) => {
  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <StaticStates>
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
              lastPage={10}
              rangeSize={3}
              initialCurrentPage={props.initialCurrentPage}
            >
              <Pagination.Controls>
                {props.shouldShowJumpControls && (
                  <Pagination.JumpToFirstButton aria-label="First" />
                )}
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
                    <Pagination.GoToTextInput />
                    <Pagination.GoToLabel>
                      {({state}) =>
                        direction === ContentDirection.RTL
                          ? `من 10 صفحات`
                          : `of ${state.lastPage} pages`
                      }
                    </Pagination.GoToLabel>
                  </Pagination.GoToForm>
                )}
              </Pagination.Controls>
              <Pagination.AdditionalDetails shouldHideDetails={!props.shouldShowAddtionalDetails}>
                {({state}) =>
                  direction === ContentDirection.RTL
                    ? `${state.rangeMax}-${state.rangeMin} من 10 صفحات`
                    : `${state.rangeMin}-${state.rangeMax} of ${state.lastPage} pages`
                }
              </Pagination.AdditionalDetails>
            </Pagination>
          )}
        </ComponentStatesTable>
      </StaticStates>
    </CanvasProvider>
  );
};

export const VisualStatesLeftToRight = () => {
  return (
    <>
      <h2>Left-To-Right Pagination</h2>
      <TableRenderer />
    </>
  );
};

export const VisualStatesRightToLeft = () => {
  return (
    <>
      <h2>Right-To-Left Pagination</h2>
      <TableRenderer direction={ContentDirection.RTL} />
    </>
  );
};

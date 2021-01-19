/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react-common';

import README from '../README.md';

import {Pagination} from '../lib/Pagination';
import {usePaginationModel} from '../lib/Pagination/usePaginationModel';

export default {
  title: 'Labs/Pagination/React',
  decorators: [withReadme(README)],
};

export const StepControls = () => (
  <Pagination
    onPageChange={pageNumber => console.log(pageNumber)}
    aria-label="Pagination"
    lastPage={100}
  >
    <Pagination.Controls>
      <Pagination.StepToPreviousButton aria-label="Previous" />
      <Pagination.PageList>
        {({state}) =>
          state.range.map(pageNumber => (
            <Pagination.PageListItem key={pageNumber}>
              <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
            </Pagination.PageListItem>
          ))
        }
      </Pagination.PageList>
      <Pagination.StepToNextButton aria-label="Next" />
    </Pagination.Controls>
    <Pagination.AdditionalDetails shouldHideDetails>
      {({state}) => `${state.rangeMin}-${state.rangeMax} of ${state.lastPage} results`}
    </Pagination.AdditionalDetails>
  </Pagination>
);

export const CustomRange = () => (
  <Pagination
    aria-label="Pagination"
    lastPage={100}
    onPageChange={pageNumber => console.log(pageNumber)}
    rangeSize={3}
  >
    <Pagination.Controls>
      <Pagination.StepToPreviousButton aria-label="Previous" />
      <Pagination.PageList>
        {({state}) =>
          state.range.map(pageNumber => (
            <Pagination.PageListItem key={pageNumber}>
              <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
            </Pagination.PageListItem>
          ))
        }
      </Pagination.PageList>
      <Pagination.StepToNextButton aria-label="Next" />
    </Pagination.Controls>
    <Pagination.AdditionalDetails shouldHideDetails>
      {({state}) => `${state.rangeMin}-${state.rangeMax} of ${state.lastPage} results`}
    </Pagination.AdditionalDetails>
  </Pagination>
);

export const JumpControls = () => (
  <Pagination
    onPageChange={pageNumber => console.log(pageNumber)}
    aria-label="Pagination"
    lastPage={100}
  >
    <Pagination.Controls>
      <Pagination.JumpToFirstButton aria-label="First" />
      <Pagination.StepToPreviousButton aria-label="Previous" />
      <Pagination.PageList>
        {({state}) =>
          state.range.map(pageNumber => (
            <Pagination.PageListItem key={pageNumber}>
              <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
            </Pagination.PageListItem>
          ))
        }
      </Pagination.PageList>
      <Pagination.StepToNextButton aria-label="Next" />
      <Pagination.JumpToLastButton aria-label="Last" />
    </Pagination.Controls>
    <Pagination.AdditionalDetails shouldHideDetails>
      {({state}) => `${state.rangeMin}-${state.rangeMax} of ${state.lastPage} results`}
    </Pagination.AdditionalDetails>
  </Pagination>
);

export const GoToForm = () => (
  <Pagination
    onPageChange={pageNumber => console.log(pageNumber)}
    aria-label="Pagination"
    lastPage={100}
  >
    <Pagination.Controls>
      <Pagination.JumpToFirstButton aria-label="First" />
      <Pagination.StepToPreviousButton aria-label="Previous" />
      <Pagination.PageList>
        {({state}) =>
          state.range.map(pageNumber => (
            <Pagination.PageListItem key={pageNumber}>
              <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
            </Pagination.PageListItem>
          ))
        }
      </Pagination.PageList>
      <Pagination.StepToNextButton aria-label="Next" />
      <Pagination.JumpToLastButton aria-label="Last" />
      <Pagination.GoToForm>
        <Pagination.GoToTextInput />
        <Pagination.GoToLabel>{({state}) => `of ${state.lastPage} results`}</Pagination.GoToLabel>
      </Pagination.GoToForm>
    </Pagination.Controls>
    <Pagination.AdditionalDetails shouldHideDetails>
      {({state}) => `${state.rangeMin}-${state.rangeMax} of ${state.lastPage} results`}
    </Pagination.AdditionalDetails>
  </Pagination>
);

export const ShowAdditionalDetails = () => (
  <Pagination
    onPageChange={pageNumber => console.log(pageNumber)}
    aria-label="Pagination"
    lastPage={100}
    rangeSize={3}
    initialCurrentPage={3}
  >
    <Pagination.Controls>
      <Pagination.JumpToFirstButton aria-label="First" />
      <Pagination.StepToPreviousButton aria-label="Previous" />
      <Pagination.PageList>
        {({state}) =>
          state.range.map(pageNumber => (
            <Pagination.PageListItem key={pageNumber}>
              <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
            </Pagination.PageListItem>
          ))
        }
      </Pagination.PageList>
      <Pagination.StepToNextButton aria-label="Next" />
      <Pagination.JumpToLastButton aria-label="Last" />
      <Pagination.GoToForm>
        <Pagination.GoToTextInput />
        <Pagination.GoToLabel>{({state}) => `of ${state.lastPage} results`}</Pagination.GoToLabel>
      </Pagination.GoToForm>
    </Pagination.Controls>
    <Pagination.AdditionalDetails>
      {({state}) => `${state.rangeMin}-${state.rangeMax} of ${state.lastPage} results`}
    </Pagination.AdditionalDetails>
  </Pagination>
);

export const ExternalModel = () => {
  const model = usePaginationModel({
    lastPage: 100,
    onPageChange: number => console.log(number),
  });
  return (
    <Pagination aria-label="Pagination" model={model}>
      <Pagination.Controls>
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({state}) => `${state.rangeMin}-${state.rangeMax} of ${state.lastPage} results`}
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};

export const RTL = () => {
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Pagination aria-label="Pagination" lastPage={100}>
        <Pagination.Controls>
          <Pagination.JumpToFirstButton aria-label="First" />
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
          <Pagination.JumpToLastButton aria-label="Last" />
          <Pagination.GoToForm>
            <Pagination.GoToTextInput />
            <Pagination.GoToLabel>{({state}) => `من 100 صفحات`}</Pagination.GoToLabel>
          </Pagination.GoToForm>
        </Pagination.Controls>
        <Pagination.AdditionalDetails>
          {({state}) => `${state.rangeMax}-${state.rangeMin} من 100 صفحات`}
        </Pagination.AdditionalDetails>
      </Pagination>
    </CanvasProvider>
  );
};

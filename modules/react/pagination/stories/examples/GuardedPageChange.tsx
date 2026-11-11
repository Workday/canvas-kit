import * as React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Pagination} from '@workday/canvas-kit-react/pagination';

export const GuardedPageChange = () => {
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(true);

  return (
    <>
      <FormField orientation="horizontalStart">
        <Checkbox
          checked={hasUnsavedChanges}
          onChange={event => setHasUnsavedChanges(event.target.checked)}
        />
        <FormField.Label>Has unsaved changes (blocks page changes)</FormField.Label>
      </FormField>
      <Pagination
        aria-label="Pagination"
        lastPage={10}
        shouldPageChange={() => !hasUnsavedChanges}
        onPageChange={pageNumber => console.log(pageNumber)}
      >
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
      </Pagination>
    </>
  );
};

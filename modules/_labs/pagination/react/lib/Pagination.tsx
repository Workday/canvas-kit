import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas, {borderRadius} from '@workday/canvas-kit-react-core';
import TextInput from '@workday/canvas-kit-react-text-input';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import _ from 'lodash';
import * as React from 'react';

export interface PaginationLabelProps {
  from?: number;
  to?: number;
  total?: number;
  itemLabel: string;
}
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: PaginationLabelProps;
}

const Label = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...type.small,
  color: canvas.typeColors.hint,
});

const Container = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: canvas.spacing.xs,
  '& > * ': {
    margin: `${0} ${canvas.spacing.xxxs}`,
  },
  '&:first-child': {
    marginLeft: 0,
  },
  '&:last-child': {
    marginRight: 0,
  },
});

const GoTo: React.FC<{
  onSubmit: (page: number, e: React.SyntheticEvent) => void;
  max: number;
}> = props => {
  const {onSubmit, max} = props;
  const [value, setValue] = React.useState('');

  const validatePage = (text: string) => {
    const textAsInteger = parseInt(text, 10);
    if (textAsInteger < 1) {
      return 0;
    }
    if (textAsInteger > max) {
      return 0;
    }
    return textAsInteger;
  };
  return (
    <>
      <GoToWrapper>
        <GoToLabel>Go To</GoToLabel>
        <InputWrapper>
          <TextInput
            width={60}
            min={1}
            max={max}
            value={value}
            type="number"
            onChange={e => {
              setValue(e.target.value);
            }}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                const page = validatePage(value);
                if (page) {
                  onSubmit(page, e);
                }
              }
            }}
          />
        </InputWrapper>
      </GoToWrapper>
    </>
  );
};

const GoToLabel = styled('div')({
  margin: 'auto',
  paddingRight: '10px',
  ...type.body2,
});

const GoToWrapper = styled('div')({
  display: 'flex',
});

const InputWrapper = styled('div')({
  minWidth: '10px',
  maxWidth: '45px',
});

const ActivePage = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  fontWeight: 700,
  height: 32,
  width: 32,
  backgroundColor: canvas.colors.blueberry400,
  color: canvas.colors.frenchVanilla100,
  borderRadius: borderRadius.m,
});

const PAGES_TO_SHOW = 5;

const Pages: React.FC<{
  numPages: number;
  currentPage: number;
  clickHandler: (page: number, e: React.MouseEvent<HTMLButtonElement>) => void;
}> = props => {
  // Create an array [1,..., numPages]
  const {numPages, currentPage, clickHandler} = props;

  const MAX_PAGES = numPages === PAGES_TO_SHOW + 1 ? PAGES_TO_SHOW + 1 : PAGES_TO_SHOW;
  const pageToStart =
    currentPage + MAX_PAGES > numPages
      ? Math.max(currentPage - 1, 0)
      : Math.max(currentPage - 3, 0);
  const start = Math.floor(pageToStart / MAX_PAGES) * MAX_PAGES + 1;
  const end = Math.min(start + MAX_PAGES, numPages + 1);
  const pages = _.range(start, end);

  return (
    <React.Fragment>
      {pages.map(page => {
        const active = page === currentPage;
        const more = page === end - 1 && page < numPages;
        const less = page === start && end === numPages + 1 && numPages > MAX_PAGES;

        return (
          <>
            {less && (
              <>
                <IconButton
                  key={1}
                  aria-label={`Goto page 1`}
                  variant={IconButton.Variant.Square}
                  size={IconButton.Size.Small}
                  onClick={e => clickHandler(1, e)}
                >
                  {1}
                </IconButton>
                <span>...</span>
              </>
            )}

            {active ? (
              <ActivePage key={page} aria-current={true} aria-label={`Current page, page ${page}`}>
                {page}
              </ActivePage>
            ) : (
              <IconButton
                key={page}
                aria-label={`Goto page ${page}`}
                variant={IconButton.Variant.Square}
                size={IconButton.Size.Small}
                onClick={e => clickHandler(page, e)}
              >
                {page}
              </IconButton>
            )}

            {more && (
              <>
                <span>...</span>
                <IconButton
                  key={numPages}
                  aria-label={`Goto page ${numPages}`}
                  variant={IconButton.Variant.Square}
                  size={IconButton.Size.Small}
                  onClick={e => clickHandler(numPages, e)}
                >
                  {numPages}
                </IconButton>
              </>
            )}
          </>
        );
      })}
    </React.Fragment>
  );
};

const Pagination: React.FC<PaginationProps> = props => {
  const {total, pageSize, currentPage, onPageChange, label, ...elemProps} = props;

  const numPages = Math.ceil(total / pageSize);

  const labelFrom = (label && label.from) || (currentPage - 1) * pageSize + 1;
  const labelTo =
    (label && label.to) || currentPage * pageSize >= total ? total : currentPage * pageSize;
  const labelItems = (label && label.total) || total;
  const item = `${(label && label.itemLabel) || 'item'}${total > 1 ? 's' : ''}`;

  const itemLabel = `${labelFrom.toLocaleString()}\u2013${labelTo.toLocaleString()} of ${labelItems.toLocaleString()} ${item}`;

  return (
    <>
      <Container aria-label={`Pagination Navigation`} {...elemProps}>
        <IconButton
          disabled={currentPage - 1 <= 0}
          aria-disabled={currentPage - 1 <= 0}
          aria-label={'Goto previous page'}
          variant={IconButton.Variant.Square}
          size={IconButton.Size.Small}
          icon={chevronLeftSmallIcon}
          onClick={e => onPageChange(currentPage - 1, e)}
        />
        <Pages numPages={numPages} currentPage={currentPage} clickHandler={onPageChange} />
        <IconButton
          disabled={currentPage + 1 > numPages}
          aria-disabled={currentPage + 1 > numPages}
          aria-label={'Goto next page'}
          variant={IconButton.Variant.Square}
          size={IconButton.Size.Small}
          icon={chevronRightSmallIcon}
          onClick={e => onPageChange(currentPage + 1, e)}
        />
        <GoTo onSubmit={onPageChange} max={numPages} />
      </Container>
      <Label>{itemLabel}</Label>
    </>
  );
};

export default Pagination;

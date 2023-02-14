import * as React from 'react';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {ExtractProps} from '@workday/canvas-kit-react/common';

import {PaginationModel} from './types';
import {usePaginationModel, UsePaginationModelConfig} from './usePaginationModel';

import {PaginationNav, PaginationNavProps} from './Nav';
import {
  JumpToFirstButton,
  StepToPreviousButton,
  StepToNextButton,
  JumpToLastButton,
  Controls,
  ControlsProps,
} from './Controls';

import {PageList, PageListItem} from './PageList';
import {PageButton} from './PageButton';
import {GoTo} from './GoTo';
import {AdditionalDetails} from './AdditionalDetails';

export const PaginationContext = React.createContext({} as PaginationModel);

export type PaginationConfigurationProps = PaginationNavProps & {
  lastPage: number;
  firstPage?: number;
  initialCurrentPage?: number;
  rangeSize?: number;
  model?: never;
  onPageChange?: (pageNumber: number) => void;
};

export type PaginationModelProps = PaginationNavProps & {
  lastPage?: never;
  firstPage?: never;
  initialCurrentPage?: never;
  rangeSize?: never;
  model: PaginationModel;
  onPageChange?: never;
};

function useDefaultModel<T, C>(model: T | undefined, config: C, fn: (config: C) => T) {
  return model || fn(config);
}

export type PaginationProps = PaginationConfigurationProps | PaginationModelProps;

export const Pagination = (props: PaginationProps) => {
  const model = useDefaultModel(props.model, props as UsePaginationModelConfig, usePaginationModel);

  const {
    children,
    lastPage,
    firstPage,
    initialCurrentPage,
    rangeSize,
    onPageChange,
    ...restProps
  } = props;

  return (
    <PaginationContext.Provider value={model}>
      <PaginationNav {...restProps}>{children}</PaginationNav>
    </PaginationContext.Provider>
  );
};

Pagination.Controls = (props: ControlsProps) => {
  return <Controls {...props} />;
};

Pagination.JumpToFirstButton = (props: ExtractProps<typeof TertiaryButton>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <JumpToFirstButton model={model} {...props} />;
};

Pagination.StepToPreviousButton = (props: ExtractProps<typeof TertiaryButton>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <StepToPreviousButton model={model} {...props} />;
};

Pagination.StepToNextButton = (props: ExtractProps<typeof TertiaryButton>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <StepToNextButton model={model} {...props} />;
};

Pagination.JumpToLastButton = (props: ExtractProps<typeof TertiaryButton>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <JumpToLastButton model={model} {...props} />;
};

Pagination.PageList = (props: Omit<ExtractProps<typeof PageList>, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <PageList model={model} {...props} />;
};

Pagination.PageListItem = (props: ExtractProps<typeof PageListItem>) => {
  return <PageListItem {...props} />;
};

Pagination.PageButton = (props: Omit<ExtractProps<typeof PageButton>, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <PageButton model={model} {...props} />;
};

Pagination.AdditionalDetails = (props: Omit<ExtractProps<typeof AdditionalDetails>, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <AdditionalDetails model={model} {...props} />;
};

Pagination.GoToForm = ({children}: ExtractProps<typeof GoTo.Form>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return (
    <GoTo model={model}>
      <GoTo.Form>{children}</GoTo.Form>
    </GoTo>
  );
};

Pagination.GoToTextInput = (props: ExtractProps<typeof GoTo.TextInput>) => {
  return <GoTo.TextInput {...props} />;
};

Pagination.GoToLabel = (props: Omit<ExtractProps<typeof GoTo.Label>, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);

  return <GoTo.Label model={model} {...props} />;
};

import * as React from 'react';
import {IconButtonProps} from '@workday/canvas-kit-react/button';

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

import {PageList, PageListProps, PageListItem, PageListItemProps} from './PageList';
import {PageButton, PageButtonProps} from './PageButton';

import {GoTo} from './GoTo';
import {GoToFormProps} from './GoTo/Form';
import {GoToLabelProps} from './GoTo/Label';
import {GoToTextInputProps} from './GoTo/TextInput';

import {AdditionalDetails, AdditionalDetailsProps} from './AdditionalDetails';

export const PaginationContext = React.createContext({} as PaginationModel);

type PaginationConfigurationProps = PaginationNavProps & {
  lastPage: number;
  firstPage?: number;
  initialCurrentPage?: number;
  rangeSize?: number;
  model?: never;
  onPageChange?: (pageNumber: number) => void;
};

type PaginationModelProps = PaginationNavProps & {
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
    'aria-label': ariaLabel,
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
      <PaginationNav aria-label={ariaLabel} {...restProps}>
        {children}
      </PaginationNav>
    </PaginationContext.Provider>
  );
};

Pagination.Controls = (props: ControlsProps) => {
  return <Controls {...props} />;
};

Pagination.JumpToFirstButton = (props: IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <JumpToFirstButton model={model} {...props} />;
};

Pagination.StepToPreviousButton = (props: IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <StepToPreviousButton model={model} {...props} />;
};

Pagination.StepToNextButton = (props: IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <StepToNextButton model={model} {...props} />;
};

Pagination.JumpToLastButton = (props: IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <JumpToLastButton model={model} {...props} />;
};

Pagination.PageList = (props: Omit<PageListProps, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <PageList model={model} {...props} />;
};

Pagination.PageListItem = (props: PageListItemProps) => {
  return <PageListItem {...props} />;
};

Pagination.PageButton = ({
  'aria-label': ariaLabel,
  ...elemProps
}: Omit<PageButtonProps, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <PageButton aria-label={ariaLabel} model={model} {...elemProps} />;
};

Pagination.AdditionalDetails = (props: Omit<AdditionalDetailsProps, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return <AdditionalDetails model={model} {...props} />;
};

Pagination.GoToForm = ({children}: GoToFormProps) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);
  return (
    <GoTo model={model}>
      <GoTo.Form>{children}</GoTo.Form>
    </GoTo>
  );
};

Pagination.GoToTextInput = (props: GoToTextInputProps) => {
  return <GoTo.TextInput {...props} />;
};

Pagination.GoToLabel = (props: Omit<GoToLabelProps, 'model'>) => {
  // The linter doesn't recognize the dot syntax, so we're disabling the rule
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const model = React.useContext(PaginationContext);

  return <GoTo.Label model={model} {...props} />;
};

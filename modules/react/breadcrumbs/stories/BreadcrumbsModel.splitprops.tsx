import React from 'react';
import {useBreadcrumbsModel} from '@workday/canvas-kit-react/breadcrumbs';

type BreadcrumbsModelConfig = Partial<typeof useBreadcrumbsModel.defaultConfig> &
  typeof useBreadcrumbsModel.requiredConfig;
type Model = ReturnType<typeof useBreadcrumbsModel>;

export const BreadcrumbsModelConfigComponent = (_: BreadcrumbsModelConfig) => <div />;
export const BreadcrumbsStateComponent = (_: Model['state']) => <div />;
export const BreadcrumbsEventsComponent = (_: Model['events']) => <div />;

import React from 'react';
import {ExtractProps, useDefaultModel} from '../../common';
import {Stack} from '../../layout';
import {ListModel, useListModel} from './useListModel';

export interface ListBoxProps<T extends unknown>
  extends Partial<ExtractProps<typeof Stack, never>> {
  children: React.ReactNode;
  model?: ListModel<T>;
}

export const ListBox = createComponent('div')({
  displayName: 'ListBox',
  Component({model, ...elemProps}, ref, Element) {
    const value = useDefaultModel(model, config, useListModel);
  },
});

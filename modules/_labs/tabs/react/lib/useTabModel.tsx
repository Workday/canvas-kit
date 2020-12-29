import React from 'react';
import {assign} from '@workday/canvas-kit-labs-xstate-fsm';
import {generateUniqueId} from '@workday/canvas-kit-react-common';

import {createUseModel} from './machine';
import {getFirst, getLast, getNext, getPrevious, Item, registerItem, unregisterItem} from './list';

const createEvent = <K extends string, T extends {type: K}>(input: T): T => {
  return input;
};

export const useTabModel = createUseModel({
  context: {
    /** Identifier for the tab group. All internal ids are derived from this id */
    id: generateUniqueId(),
    initialTab: '',
    activeTab: '',
    intentTab: '',
    items: [] as Item[],
    panels: [] as Item[],
    /** Used for tracking programmatic focus changes vs user focus changes */
    programmaticFocus: false,
  },
  schema: {
    /** foobar */
    active: {},
  },
  events: {
    activateTab(tab: string) {
      return createEvent({
        type: 'activateTab',
        tab,
      });
    },
    registerTab(item: {id?: Item['id']; element: Item['element']}) {
      return createEvent({
        type: 'registerTab',
        item,
      });
    },
    unregisterTab(tab: string) {
      return createEvent({
        type: 'unregisterTab',
        tab,
      });
    },
    registerPanel(item: {id?: Item['id']; element: Item['element']}) {
      return createEvent({
        type: 'registerPanel',
        item,
      });
    },
    unregisterPanel(tab: string) {
      return createEvent({
        type: 'unregisterPanel',
        tab,
      });
    },
    setIntentTab(value: 'previous' | 'next' | 'first' | 'last') {
      return createEvent({
        type: 'setIntentTab',
        value,
      });
    },
    initializeTab(tab?: string) {
      return createEvent({
        type: 'initializeTab',
        tab,
      });
    },
    resetIntentTab() {
      return createEvent({type: 'resetIntentTab'});
    },
    resetProgrammaticFocus() {
      return createEvent({type: 'resetProgrammaticFocus'});
    },
    initialize(items: Item[], activeTab: string) {
      return createEvent({
        type: 'initialize',
        items,
        activeTab,
      });
    },
  },
  guards: {
    /**
     * Fires before a tab gets activated
     */
    shouldActivateTab: 'activateTab',
    shouldSetIntentTab: 'setIntentTab',
  },
  actions: {
    onActivateTab: 'activateTab',
    onSetIntentTab: 'setIntentTab',
  },
})({
  initial: 'active',
  states: {
    active: {
      on: {
        activateTab: {
          target: 'active',
          actions: [
            assign({activeTab: (ctx, event) => event.tab, intentTab: (ctx, event) => event.tab}),
            'onActivateTab',
          ],
          cond: 'shouldActivateTab',
        },
        registerTab: {
          target: 'active',
          actions: [
            assign({
              items: (ctx, event) => registerItem(event.item, ctx.items),
            }),
          ],
        },
        unregisterTab: {
          target: 'active',
          actions: [assign({items: (ctx, event) => unregisterItem(event.tab, ctx.items)})],
        },
        registerPanel: {
          target: 'active',
          actions: [
            assign({
              panels: (ctx, event) => registerItem(event.item, ctx.panels),
            }),
          ],
        },
        unregisterPanel: {
          target: 'active',
          actions: [assign({panels: (ctx, event) => unregisterItem(event.tab, ctx.panels)})],
        },
        setIntentTab: {
          target: 'active',
          actions: [
            assign({
              programmaticFocus: ctx => true,
              intentTab: (ctx, event) => {
                switch (event.value) {
                  case 'previous':
                    return getPrevious(ctx.intentTab, ctx.items).id;
                  case 'next':
                    return getNext(ctx.intentTab, ctx.items).id;
                  case 'first':
                    return getFirst(ctx.items).id;
                  case 'last':
                    return getLast(ctx.items).id;
                  default:
                    return '';
                }
              },
            }),
            'onSetIntentTab',
          ],
          cond: 'shouldSetIntentTab',
        },
        initializeTab: {
          target: 'active',
          actions: [
            assign({
              intentTab: (ctx, event) => {
                return event.tab || ctx.items[0]?.id || '';
              },
              activeTab: (ctx, event) => {
                return event.tab || ctx.items[0]?.id || '';
              },
            }),
          ],
        },
        resetIntentTab: {
          target: 'active',
          actions: [
            assign({
              intentTab: ctx => (ctx.programmaticFocus ? ctx.intentTab : ctx.activeTab),
            }),
          ],
        },
        resetProgrammaticFocus: {
          target: 'active',

          actions: [assign({programmaticFocus: ctx => false})],
        },
      },
    },
  },
});

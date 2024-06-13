import React from 'react';
import {createContainer, createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

export type Visibility = 'hidden' | 'visible';

// First we define a model using out createModelHook
const useDisclosureModel = createModelHook({
  // This becomes the default values on the model
  defaultConfig: {
    /** ID reference of the list. Children ids can be derived from this id */
    id: '',
    /**
     * The initial visibility of the disclosed content
     * @default 'hidden'
     */
    initialVisibility: 'hidden' as Visibility,
  },
})(config => {
  const id = useUniqueId(config.id);
  const [visibility, setVisibility] = React.useState(config.initialVisibility || 'hidden');
  //  Set the default internal state for your model.
  const state = {
    /** ID reference of the list. Children ids can be derived from this id */
    id,
    /**
     * Visibility state of the disclosed content. Models are allowed to extend the states to fit
     * their needs, so if you need to consistently determine "not hidden", use `visibility !==
     * 'hidden'` rather than `visibility === 'visible'`
     */
    visibility,
  };
  // Sets events that can be used across subcomponents
  const events = {
    /**
     * Start showing the disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    show(event?: Event | React.SyntheticEvent) {
      setVisibility('visible');
    },
    /**
     * Start hiding this disclosed content. If a DOM event triggered this event, the event data will
     * be passed along. This data can be used by guards and callbacks.
     */
    hide(event?: Event | React.SyntheticEvent) {
      setVisibility('hidden');
    },
  };

  return {state, events};
});

// Disclosure Container Component
interface DisclosureProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const Disclosure = createContainer('button')({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {},
})<DisclosureProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      onClick={() =>
        model.state.visibility === 'visible' ? model.events.hide() : model.events.show()
      }
      {...elemProps}
    >
      {model.state.visibility === 'visible' ? 'close' : 'open'}
    </Element>
  );
});

export const CreateContainer = () => {
  return <Disclosure />;
};

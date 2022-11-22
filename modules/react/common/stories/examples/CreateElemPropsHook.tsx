import React from 'react';
import {
  createContainer,
  createModelHook,
  createSubcomponent,
  createElemPropsHook,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {PrimaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

type Visibility = 'hidden' | 'visible';

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
  // Sets events that be used across sub components
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

// Disclose Target
interface DisclosureTargetProps extends PrimaryButtonProps {}

// Use createElemPropsHook to define an onClick prop  using the model state and events
// This will be merged into the rest of the elemProps of the component
const useDisclosureTarget = createElemPropsHook(useDisclosureModel)(({state, events}) => {
  return {
    onClick: (event: React.MouseEvent) => {
      if (state.visibility !== 'hidden') {
        events.hide(event);
      } else {
        events.show(event);
      }
    },
  };
});

const DisclosureTarget = createSubcomponent('button')({
  modelHook: useDisclosureModel,
  elemPropsHook: useDisclosureTarget,
})<DisclosureTargetProps>(({children, ...elemProps}, Element, model) => {
  return (
    <PrimaryButton as={Element} {...elemProps}>
      {children}
    </PrimaryButton>
  );
});

// Disclosure Content
interface DisclosureContentProps extends BoxProps {}
const useDisclosureContent = createElemPropsHook(useDisclosureModel)(({state}) => {
  return {
    style: state.visibility !== 'hidden' ? {} : {display: 'none'},
    id: state.id,
  };
});

const DisclosureContent = createSubcomponent('div')({
  modelHook: useDisclosureModel,
  // attached our elemPropsHook to the component
  elemPropsHook: useDisclosureContent,
})<DisclosureContentProps>(({children, ...elementProps}, Element) => {
  return (
    <Box as={Element} {...elementProps}>
      {children}
    </Box>
  );
});

// Disclosure Container Component
interface DisclosureProps {}

const Disclosure = createContainer()({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {
    Target: DisclosureTarget,
    Content: DisclosureContent,
  },
})<DisclosureProps>(({children}, Element, model) => {
  return <>{children}</>;
});

export const CreateElemPropsHook = () => {
  return (
    <Disclosure>
      <Disclosure.Target>Open</Disclosure.Target>
      <Disclosure.Content>Content</Disclosure.Content>
    </Disclosure>
  );
};

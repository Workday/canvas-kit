type StoryDetails = {
  title: string;
  component?: React.ReactNode;
  decorators?: any[];
  parameters?: {
    [key: string]: any;
  };
};

type StoryFn = {
  (): JSX.Element;
  story?: {
    parameters?: {
      chromatic?: {};
    };
  };
};

/**
 * A function to enable chromatic snapshots for a single story or a set of stories.
 * To apply to all stories in a file, wrap the default export of a CSF story file.
 * To apply to a single story, wrap the story fn.
 *
 * TODO: Clean up after optional chaining is enabled
 */
export const withSnapshotsEnabled: {
  (story: StoryFn): void;
  (story: StoryDetails): StoryDetails;
} = (x: StoryFn | StoryDetails) => {
  if (typeof x === 'function') {
    const storyFn = x as StoryFn;
    (x as StoryFn).story = {
      ...storyFn.story,
      parameters: {
        ...(storyFn.story && storyFn.story.parameters),
        chromatic: {
          ...(storyFn.story && storyFn.story.parameters && storyFn.story.parameters.chromatic),
          disable: false,
        },
      },
    };
  }

  const details = x as StoryDetails;
  return {
    ...details,
    parameters: {
      ...details.parameters,
      chromatic: {
        ...(details.parameters && details.parameters.chromatic),
        disable: false,
      },
    },
  };
};

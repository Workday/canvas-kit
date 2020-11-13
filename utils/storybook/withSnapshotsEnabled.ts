type StorybookParameters = {
  chromatic?: {
    disable?: boolean;
    pauseAnimationAtEnd?: boolean;
  };
  [key: string]: any;
};

type StoriesDefaultExport = {
  title: string;
  component?: React.ReactNode;
  decorators?: any[];
  parameters?: StorybookParameters;
};

export type Story = {
  (): React.ReactNode;
  storyName?: string;
  decorators?: any[];
  parameters?: StorybookParameters;
};

interface SnapshotFn {
  (x: Story): Story;
  (x: StoriesDefaultExport): StoriesDefaultExport;
}

/**
 * A function to enable chromatic snapshots for a single story or a set of stories.
 * To apply to all stories in a file, wrap the default export of a CSF story file.
 * To apply to a single story, wrap the story function.
 */
export const withSnapshotsEnabled: SnapshotFn = (x: Story | StoriesDefaultExport) => {
  if (typeof x === 'function') {
    const Story = x as Story;
    // Story.parameters?.chromatic?.disable = false;
    Story.parameters = {
      parameters: {
        ...Story.parameters,
        chromatic: {
          ...Story.parameters?.chromatic,
          disable: false,
        },
      },
    };
    return Story;
  }

  const defaultExport = x as StoriesDefaultExport;
  return {
    ...defaultExport,
    parameters: {
      ...defaultExport.parameters,
      chromatic: {
        ...defaultExport.parameters?.chromatic,
        disable: false,
      },
    },
  };
};

type StorybookParameters = {
  chromatic?: {
    delay?: number;
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

type Story = {
  (): React.ReactNode;
  storyName?: string;
  decorators?: any[];
  parameters?: StorybookParameters;
};

/**
 * A function to enable chromatic snapshots for a single story or a set of stories.
 * To apply to all stories in a file, wrap the default export of a CSF story file.
 * To apply to a single story, wrap the story function.
 */
export const withSnapshotsEnabled = <T extends Story | StoriesDefaultExport>(x: T): T => {
  x.parameters = {
    ...x.parameters,
    chromatic: {
      ...x.parameters?.chromatic,
      disable: false,
    },
  };
  return x;
};

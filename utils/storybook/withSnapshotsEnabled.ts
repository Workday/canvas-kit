type StoryDetails = {
  title: string;
  component?: React.ReactNode;
  decorators?: any[];
  parameters?: {
    [key: string]: any;
  };
};

// TODO: Clean up after optional chaining is enabled
export const withSnapshotsEnabled = (details: StoryDetails) => ({
  ...details,
  parameters: {
    ...details.parameters,
    chromatic: {
      ...(details.parameters && details.parameters.chromatic),
      disable: false,
    },
  },
});

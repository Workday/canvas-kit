const enableSnapshots = (options = {}) => ({
  chromatic: {
    disable: false,
    ...options,
  },
});

export default enableSnapshots;

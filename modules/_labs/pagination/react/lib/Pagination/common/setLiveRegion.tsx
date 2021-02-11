type SetLiveRegionConfig = {
  'aria-atomic'?: React.AriaAttributes['aria-atomic'];
  'aria-live'?: 'polite' | 'assertive';
  'aria-relevant'?: React.AriaAttributes['aria-relevant'];
  role?: 'status' | 'alert' | 'log';
};

export function setLiveRegion(config = {} as SetLiveRegionConfig) {
  return {
    'aria-atomic': true,
    'aria-live': 'polite',
    'aria-relevant': true,
    role: 'status',
    ...config,
  } as SetLiveRegionConfig;
}

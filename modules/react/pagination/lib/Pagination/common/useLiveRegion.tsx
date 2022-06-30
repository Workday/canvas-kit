type UseLiveRegionConfig = {
  'aria-atomic'?: React.AriaAttributes['aria-atomic'];
  'aria-live'?: 'polite' | 'assertive';
  role?: 'status' | 'alert' | 'log';
  shouldAnnounceToScreenReader?: boolean;
};

export function useLiveRegion(config = {} as UseLiveRegionConfig) {
  const {shouldAnnounceToScreenReader = true, ...restConfig} = config;
  if (shouldAnnounceToScreenReader) {
    return {
      'aria-atomic': true,
      'aria-live': 'polite',
      role: 'status',
      ...restConfig,
    } as UseLiveRegionConfig;
  }
  return {};
}

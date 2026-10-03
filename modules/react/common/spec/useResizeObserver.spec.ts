beforeEach(() => {
  vi.resetModules();
});

afterEach(() => {
  vi.doUnmock('use-resize-observer');
});

describe('useResizeObserver', () => {
  it.each(['default', 'useResizeObserver'])('should support the %s export', async exportName => {
    const result = {ref: vi.fn(), width: 100, height: 50};
    const hook = vi.fn(() => result);
    vi.doMock('use-resize-observer', () => ({
      default: undefined,
      useResizeObserver: undefined,
      [exportName]: hook,
    }));

    const {useResizeObserver} = await import('../lib/utils/useResizeObserver');
    const options = {box: 'border-box' as const, round: Math.floor, onResize: vi.fn()};

    expect(useResizeObserver<HTMLDivElement>(options)).toBe(result);
    expect(hook).toHaveBeenCalledWith(options);
  });

  it('should prefer the named export when both are present', async () => {
    const namedHook = vi.fn(() => ({ref: vi.fn(), width: 0, height: 0}));
    const defaultHook = vi.fn();
    vi.doMock('use-resize-observer', () => ({
      useResizeObserver: namedHook,
      default: defaultHook,
    }));

    const {useResizeObserver} = await import('../lib/utils/useResizeObserver');

    expect(useResizeObserver().width).toBe(0);
    expect(namedHook).toHaveBeenCalledOnce();
    expect(defaultHook).not.toHaveBeenCalled();
  });
});

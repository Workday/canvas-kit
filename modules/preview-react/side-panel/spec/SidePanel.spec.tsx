import {renderHook, act} from '@testing-library/react-hooks';
import {useSidePanel, UseSidePanelProps} from '../lib/hooks';

describe('useSidePanel Hook', () => {
  describe('when calling the useSidePanel hook with no arguments', () => {
    const {result} = renderHook<UseSidePanelProps, ReturnType<typeof useSidePanel>>(() =>
      useSidePanel()
    );

    it('should return an expanded prop equal to the default initialExpanded value (true)', () => {
      expect(result.current.expanded).toBe(true);
    });

    it(`should return an 'aria-expanded' value in controlProps equal to the default initialExpanded value (true)`, () => {
      expect(result.current.controlProps['aria-expanded']).toBe(true);
    });

    it(`should return an 'aria-controls' value in controlProps equal to the id in panelProps`, () => {
      const ariaControlsResult = result.current.controlProps['aria-controls'];
      const panelId = result.current.panelProps.id;
      expect(ariaControlsResult).toEqual(panelId);
    });

    it(`should return an 'aria-labelledby' prop in panelProps equal to the labelId on the labelProps`, () => {
      const labelledById = result.current.panelProps['aria-labelledby'];
      expect(labelledById).toBe(result.current.labelProps.id);
    });

    it(`should return an 'aria-labelledby' prop in controlProps equal to the labelId on the labelProps`, () => {
      const labelledById = result.current.controlProps['aria-labelledby'];
      expect(labelledById).toBe(result.current.labelProps.id);
    });

    describe('when calling the setExpanded function', () => {
      it('should set expanded to false', () => {
        const {result} = renderHook<UseSidePanelProps, ReturnType<typeof useSidePanel>>(() =>
          useSidePanel()
        );
        act(() => {
          result.current.setExpanded(false);
        });
        expect(result.current.expanded).toBe(false);
      });
    });
  });

  describe('when calling the useSidePanel hook with a config object', () => {
    const {result} = renderHook<UseSidePanelProps, ReturnType<typeof useSidePanel>>(() =>
      useSidePanel({
        initialExpanded: false,
        panelId: 'panel-id',
        labelId: 'label-id',
      })
    );

    it('should return an expanded prop equal to the initialExpanded config value', () => {
      expect(result.current.expanded).toBe(false);
    });

    it(`should return an 'aria-controls' value in controlProps equal to the id in panelProps`, () => {
      const ariaControlsResult = result.current.controlProps['aria-controls'];
      const panelId = result.current.panelProps.id;
      expect(ariaControlsResult).toEqual(panelId);
    });

    it(`should return an 'aria-labelledby' prop in panelProps equal to the labelId on the labelProps`, () => {
      const labelledById = result.current.panelProps['aria-labelledby'];
      expect(labelledById).toBe(result.current.labelProps.id);
    });

    it(`should return an 'aria-labelledby' prop in controlProps equal to the labelId on the labelProps`, () => {
      const labelledById = result.current.controlProps['aria-labelledby'];
      expect(labelledById).toBe(result.current.labelProps.id);
    });

    describe('when calling the setExpanded function', () => {
      it('should set expanded to true', () => {
        const {result} = renderHook<UseSidePanelProps, ReturnType<typeof useSidePanel>>(() =>
          useSidePanel()
        );
        act(() => {
          result.current.setExpanded(true);
        });
        expect(result.current.expanded).toBe(true);
      });
    });
  });
});

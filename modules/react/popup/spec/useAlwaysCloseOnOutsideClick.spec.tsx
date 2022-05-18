import {renderHook} from '@testing-library/react-hooks';
import {useAlwaysCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('useAlwaysCloseOnOutsideClick', () => {
  it('should add "data-behavior-click-outside-close=topmost" attribute', () => {
    const {result} = renderHook(() => {
      const model = usePopupModel({initialVisibility: 'visible'});
      (model.state.stackRef as React.MutableRefObject<
        HTMLDivElement
      >).current = document.createElement('div');
      useAlwaysCloseOnOutsideClick(model);

      return model;
    });

    expect(result.current.state.stackRef.current).toHaveAttribute(
      'data-behavior-click-outside-close',
      'always'
    );
  });
});

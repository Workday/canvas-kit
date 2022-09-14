import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {DeprecatedSegmentedControl} from '../lib/SegmentedControl';
import {listViewIcon, worksheetsIcon} from '@workday/canvas-system-icons-web';

describe('Segmented Control', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render two buttons', () => {
      const {getAllByRole} = render(
        <DeprecatedSegmentedControl>
          <DeprecatedSegmentedControl.Button
            value="list-view"
            icon={listViewIcon}
            aria-label="List View"
          />
          <DeprecatedSegmentedControl.Button
            value="table-view"
            icon={worksheetsIcon}
            aria-label="Table View"
          />
        </DeprecatedSegmentedControl>
      );
      expect(getAllByRole('button').length).toEqual(2);
    });
  });

  // ensure random elements don't break anything
  describe('when clicked', () => {
    it('should call DeprecatedSegmentedControl onChange callback', () => {
      const {getAllByRole} = render(
        <DeprecatedSegmentedControl onChange={cb}>
          <DeprecatedSegmentedControl.Button
            icon={listViewIcon}
            value="list-view"
            aria-label="List View"
          />
          <DeprecatedSegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
          />
          <span />
        </DeprecatedSegmentedControl>
      );
      fireEvent.click(getAllByRole('button')[1]);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][0]).toBe('table-view');
    });

    it('should preserve existing button onClick callbacks', () => {
      const existingCb = jest.fn();
      const {getAllByRole} = render(
        <DeprecatedSegmentedControl onChange={cb}>
          <DeprecatedSegmentedControl.Button
            icon={listViewIcon}
            value="list-view"
            aria-label="List View"
          />
          <DeprecatedSegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
            onClick={existingCb}
          />
        </DeprecatedSegmentedControl>
      );

      fireEvent.click(getAllByRole('button')[1]);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(existingCb).toHaveBeenCalledTimes(1);
    });

    it('disabled buttons should trigger callback', () => {
      const {getAllByRole} = render(
        <DeprecatedSegmentedControl onChange={cb}>
          <DeprecatedSegmentedControl.Button
            icon={listViewIcon}
            value="list-view"
            aria-label="List View"
            disabled={true}
          />
          <DeprecatedSegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
          />
        </DeprecatedSegmentedControl>
      );
      fireEvent.click(getAllByRole('button')[0]);

      expect(cb).toHaveBeenCalledTimes(0);

      fireEvent.click(getAllByRole('button')[1]);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][0]).toBe('table-view');
    });
  });

  describe('when clicked without value', () => {
    it('should call callback with index', () => {
      const {getAllByRole} = render(
        <DeprecatedSegmentedControl onChange={cb}>
          <DeprecatedSegmentedControl.Button
            value="list-view"
            icon={listViewIcon}
            aria-label="List View"
          />
          <DeprecatedSegmentedControl.Button icon={worksheetsIcon} aria-label="Table View" />
        </DeprecatedSegmentedControl>
      );

      fireEvent.click(getAllByRole('button')[1]);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][0]).toBe(1);
    });
  });
});

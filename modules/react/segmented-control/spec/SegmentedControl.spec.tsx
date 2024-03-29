import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {SegmentedControl} from '../lib/SegmentedControl';
import {listViewIcon, worksheetsIcon} from '@workday/canvas-system-icons-web';

describe('Segmented Control', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render two buttons', () => {
      const {getAllByRole} = render(
        <SegmentedControl>
          <SegmentedControl.Button value="list-view" icon={listViewIcon} aria-label="List View" />
          <SegmentedControl.Button
            value="table-view"
            icon={worksheetsIcon}
            aria-label="Table View"
          />
        </SegmentedControl>
      );
      expect(getAllByRole('button').length).toEqual(2);
    });
  });

  // ensure random elements don't break anything
  describe('when clicked', () => {
    it('should call SegmentedControl onChange callback', () => {
      const {getAllByRole} = render(
        <SegmentedControl onChange={cb}>
          <SegmentedControl.Button icon={listViewIcon} value="list-view" aria-label="List View" />
          <SegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
          />
          <span />
        </SegmentedControl>
      );
      fireEvent.click(getAllByRole('button')[1]);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][0]).toBe('table-view');
    });

    it('should preserve existing button onClick callbacks', () => {
      const existingCb = jest.fn();
      const {getAllByRole} = render(
        <SegmentedControl onChange={cb}>
          <SegmentedControl.Button icon={listViewIcon} value="list-view" aria-label="List View" />
          <SegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
            onClick={existingCb}
          />
        </SegmentedControl>
      );

      fireEvent.click(getAllByRole('button')[1]);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(existingCb).toHaveBeenCalledTimes(1);
    });

    it('disabled buttons should trigger callback', () => {
      const {getAllByRole} = render(
        <SegmentedControl onChange={cb}>
          <SegmentedControl.Button
            icon={listViewIcon}
            value="list-view"
            aria-label="List View"
            disabled={true}
          />
          <SegmentedControl.Button
            icon={worksheetsIcon}
            value="table-view"
            aria-label="Table View"
          />
        </SegmentedControl>
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
        <SegmentedControl onChange={cb}>
          <SegmentedControl.Button value="list-view" icon={listViewIcon} aria-label="List View" />
          <SegmentedControl.Button icon={worksheetsIcon} aria-label="Table View" />
        </SegmentedControl>
      );

      fireEvent.click(getAllByRole('button')[1]);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb.mock.calls[0][0]).toBe(1);
    });
  });
});

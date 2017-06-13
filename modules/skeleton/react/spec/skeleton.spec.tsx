import * as React from 'react';
import {mount} from 'enzyme';
import Skeleton from '../lib/skeleton';

describe('Skeleton', () => {
  it('should render', () => {
    const subject = mount(
      <Skeleton>
        <span> Hello </span>
      </Skeleton>
    );

    expect(subject).toHaveLength(1);
    subject.unmount();
  });

  describe('Accessibility', () => {
    it('should add aria-hidden to all of the children', () => {
      const subject = mount(
        <Skeleton>
          <span> Hello </span>
        </Skeleton>
      );

      expect(
        subject
          .find('div')
          .at(2)
          .getDOMNode()
          .getAttribute('aria-hidden')
      ).toEqual('true');
      subject.unmount();
    });
    it('should have role status', () => {
      const subject = mount(
        <Skeleton>
          <span> Hello </span>
        </Skeleton>
      );

      expect(
        subject
          .first()
          .getDOMNode()
          .getAttribute('role')
      ).toEqual('status');
      subject.unmount();
    });
    it('should have aria-live polite', () => {
      const subject = mount(
        <Skeleton>
          <span> Hello </span>
        </Skeleton>
      );

      expect(
        subject
          .first()
          .getDOMNode()
          .getAttribute('aria-live')
      ).toEqual('polite');
      subject.unmount();
    });
    it('should have aria-label loading', () => {
      const subject = mount(
        <Skeleton>
          <span> Hello </span>
        </Skeleton>
      );

      expect(
        subject
          .first()
          .getDOMNode()
          .getAttribute('aria-label')
      ).toEqual('Loading');
      subject.unmount();
    });
  });
});

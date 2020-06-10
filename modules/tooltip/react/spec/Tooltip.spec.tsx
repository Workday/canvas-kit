/// <reference types="@testing-library/jest-dom/extend-expect" />

import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Tooltip} from '..';

describe('Tooltip', () => {
  describe('when "type" is "label"', () => {
    it('should render an aria-label', () => {
      const {getByText} = render(
        <Tooltip title="Add">
          <span>Test Text</span>
        </Tooltip>
      );

      expect(getByText('Test Text')).toHaveAttribute('aria-label', 'Add');
    });
  });

  describe('when "type" is "describe"', () => {
    it('should render aria-describedby', () => {
      const {getByText, getByRole} = render(
        <Tooltip type="describe" title="This is an extra description">
          <span>Test Text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(getByText('Test Text')); // triggers the tooltip

      expect(getByText('Test Text')).toHaveAttribute('aria-describedby');

      const id = getByText('Test Text').getAttribute('aria-describedby');
      expect(getByRole('tooltip')).toHaveAttribute('id', id);
    });
  });

  ['onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onClick', 'onMouseOver'].forEach(key => {
    it(`should call the ${key} callback functions provided to the wrapped component`, () => {
      const fn = jest.fn();
      const {getByText} = render(
        <Tooltip title="test">
          <span {...{[key]: fn}}>Test</span>
        </Tooltip>
      );

      // convert from `onMouseEnter` to `mouseEnter`, etc
      const action = key.replace(
        /^on([A-Z])([a-z]+)/,
        (_, first, rest) => first.toLowerCase() + rest
      );

      fireEvent[action](getByText('Test'));

      expect(fn).toBeCalled();
    });
  });
});

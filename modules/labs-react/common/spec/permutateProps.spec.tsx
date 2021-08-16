import {permutateProps} from '../lib/storybook-utils/permutateProps';
import {ErrorType} from '@workday/canvas-kit-react/common';

describe('Component States Table', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when permutateProps function is called', () => {
    it('should return the expected permutations', () => {
      const propDeclaration = {
        className: [
          {label: 'Default', value: ''},
          {label: 'Hover', value: 'hover'},
          {label: 'Focus', value: 'focus'},
          {label: 'Active', value: 'active'},
        ],
        disabled: [
          {label: '', value: false},
          {label: 'Disabled', value: true},
        ],
      };

      const results = [
        {label: 'Default ', props: {className: '', disabled: false}},
        {label: 'Default Disabled', props: {className: '', disabled: true}},
        {label: 'Hover ', props: {className: 'hover', disabled: false}},
        {label: 'Hover Disabled', props: {className: 'hover', disabled: true}},
        {label: 'Focus ', props: {className: 'focus', disabled: false}},
        {label: 'Focus Disabled', props: {className: 'focus', disabled: true}},
        {label: 'Active ', props: {className: 'active', disabled: false}},
        {label: 'Active Disabled', props: {className: 'active', disabled: true}},
      ];

      expect(permutateProps(propDeclaration)).toEqual(results);
    });
  });

  describe('when permutateProps function is called with a filter', () => {
    it('should return the expected filtered permutations', () => {
      const propDeclaration = {
        checked: [
          {value: true, label: 'Checked'},
          {value: false, label: 'Unchecked'},
        ],
        indeterminate: [
          {value: true, label: 'Indeterminate'},
          {value: false, label: ''},
        ],
        error: [
          {value: undefined, label: ''},
          {value: ErrorType.Alert, label: 'Alert'},
          {value: ErrorType.Error, label: 'Error'},
        ],
      };
      const filterFn = (props: any) => {
        if (props.indeterminate && !props.checked) {
          return false;
        }
        return true;
      };

      const results = [
        {label: 'Checked Indeterminate ', props: {checked: true, indeterminate: true}},
        {
          label: 'Checked Indeterminate Alert',
          props: {checked: true, indeterminate: true, error: ErrorType.Alert},
        },
        {
          label: 'Checked Indeterminate Error',
          props: {checked: true, indeterminate: true, error: ErrorType.Error},
        },
        {label: 'Checked  ', props: {checked: true, indeterminate: false}},
        {
          label: 'Checked  Alert',
          props: {checked: true, indeterminate: false, error: ErrorType.Alert},
        },
        {
          label: 'Checked  Error',
          props: {checked: true, indeterminate: false, error: ErrorType.Error},
        },
        {label: 'Unchecked  ', props: {checked: false, indeterminate: false}},
        {
          label: 'Unchecked  Alert',
          props: {checked: false, indeterminate: false, error: ErrorType.Alert},
        },
        {
          label: 'Unchecked  Error',
          props: {checked: false, indeterminate: false, error: ErrorType.Error},
        },
      ];

      expect(permutateProps(propDeclaration, filterFn)).toEqual(results);
    });
  });
});

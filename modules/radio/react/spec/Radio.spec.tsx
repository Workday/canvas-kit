import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Radio from '../lib/Radio';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '../../../form-field/react';

const label = 'Test Radio';

describe('Radio Input', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  fdescribe('when rendered', () => {
    describe('with an id', () => {
      test('should render a radio input with id', () => {
        const id = 'myRadio';
        const {getByLabelText} = render(<Radio id={id} onChange={cb} label={label}></Radio>);
        expect(getByLabelText(label)).toHaveAttribute('id', id);
      });
    });
    describe('with a value', () => {
      test('should render a radio input with value', () => {
        const value = 'myRadio';
        const {getByDisplayValue} = render(<Radio value={value} onChange={cb} />);
        expect(getByDisplayValue(value)).toBeDefined();
      });
    });
    describe('with checked=true', () => {
      test('should render a checked radio input', () => {
        const value = 'myRadio';
        const {getByLabelText} = render(
          <Radio checked={true} value={value} onChange={cb} label={label} />
        );
        expect(getByLabelText(label)).toBeChecked();
      });
    });
    describe('with disabled attribute', () => {
      test('should render a disabled radio input', () => {
        const {getByLabelText} = render(<Radio disabled={true} onChange={cb} label={label} />);
        expect(getByLabelText(label)).toBeDisabled();
      });
    });
  });

  //   test('render an radio input with id', () => {
  //     const component = mount(<Radio id="myRadio" onChange={cb} />);
  //     expect(component.find('input').props().id).toBe('myRadio');
  //     component.unmount();
  //   });

  //   test('render an radio input with name', () => {
  //     const component = mount(<Radio name="myRadio" onChange={cb} />);
  //     expect(component.find('input').props().name).toBe('myRadio');
  //     component.unmount();
  //   });

  //   test('render an radio input with value', () => {
  //     const component = mount(<Radio value="myRadio" onChange={cb} />);
  //     expect(component.find('input').props().value).toBe('myRadio');
  //     component.unmount();
  //   });

  //   test('render an checked radio input', () => {
  //     const component = mount(<Radio checked={true} onChange={cb} />);
  //     expect(component.find('input').props().checked).toBe(true);
  //     component.unmount();
  //   });

  //   test('render an disabled radio input', () => {
  //     const component = mount(<Radio disabled={true} onChange={cb} />);
  //     expect(component.find('input').props().disabled).toBe(true);
  //     component.unmount();
  //   });

  //   test('should call a callback function', () => {
  //     const component = mount(<Radio onChange={cb} />);
  //     const input = component.find('input');
  //     input.simulate('change');

  //     expect(cb.mock.calls.length).toBe(1);
  //     component.unmount();
  //   });

  //   test('Radio input should spread extra props', () => {
  //     const component = mount(<Radio data-propspread="test" onChange={jest.fn()} />);
  //     const input = component
  //       .find('input') // TODO: Standardize on prop spread location (see #150)
  //       .getDOMNode();
  //     expect(input.getAttribute('data-propspread')).toBe('test');
  //     component.unmount();
  //   });

  //   test('Radio creates a unique id for each instance', async () => {
  //     const fragment = mount(
  //       <form>
  //         <Radio checked={true} onChange={jest.fn()} disabled={false} />;
  //         <Radio onChange={jest.fn()} disabled={false} />;
  //       </form>
  //     );

  //     const id1 = fragment
  //       .find('input')
  //       .at(0)
  //       .getDOMNode()
  //       .getAttribute('id');

  //     const id2 = fragment
  //       .find('input')
  //       .at(1)
  //       .getDOMNode()
  //       .getAttribute('id');

  //     expect(id1).not.toEqual(id2);
  //     fragment.unmount();
  //   });
  // });

  // describe('Radio Accessibility', () => {
  //   test('Radio should pass axe DOM accessibility guidelines', async () => {
  //     const html = ReactDOMServer.renderToString(
  //       <Radio id={'123'} label={'Label'} onChange={jest.fn()} />
  //     );
  //     expect(await axe(html)).toHaveNoViolations();
  //   });

  //   test('Radio without a defined id should pass axe DOM accessibility guidelines', async () => {
  //     const html = ReactDOMServer.renderToString(<Radio label={'Label'} onChange={jest.fn()} />);
  //     expect(await axe(html)).toHaveNoViolations();
  //   });

  //   test('Radio using FormField should pass axe DOM accessibility guidelines', async () => {
  //     const html = ReactDOMServer.renderToString(
  //       <FormField label="My Field" inputId="my-radio-field">
  //         <Radio disabled={false} checked={true} id="my-radio-field" onChange={jest.fn()} />
  //       </FormField>
  //     );
  //     expect(await axe(html)).toHaveNoViolations();
  //   });
});

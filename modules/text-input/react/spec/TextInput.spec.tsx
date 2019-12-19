import * as React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from '../lib/TextInput';

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<TextInput/>);
  expect(asFragment()).toMatchSnapshot();
})


// describe('TextInput', () => {
//   // test('TextInput should spread extra props', () => {
//   //   const component = mount(<TextInput data-propspread="test" onChange={jest.fn()} />);
//   //   const input = component
//   //     .find('input') // TODO: Standardize on prop spread location (see #150)
//   //     .getDOMNode();
//   //   expect(input.getAttribute('data-propspread')).toBe('test');
//   //   component.unmount();
//   // });

//   test('TextInput should grow', () => {
//     // const component = mount(<TextInput grow={true} onChange={jest.fn()} />);
//     // const input = component
//     //   .find('input');
//     //   expect(getComputedStyle(input.getDOMNode()).getPropertyValue('width')).toBe('100%');
//     // component.unmount();

//     const {container} = render(
//       <TextInput grow={true} onChange={jest.fn()} />
//     );

//     const style = 

//     expect(container.firstChild).toHaveAttribute('width', '100%');

//   });
// });



// describe('Text Input Accessibility', () => {
//   test('Text Input in a FormField should pass axe DOM accessibility guidelines', async () => {
//     const html = ReactDOMServer.renderToString(
//       <FormField
//         label="My Field"
//         inputId="my-input-field"
//         hintText="Helpful text to resolve error"
//         hintId="my-input-field-error"
//         error={FormField.ErrorType.Error}
//       >
//         <TextInput placeholder="Placeholder" value={'Hello'} onChange={jest.fn()} />;
//       </FormField>
//     );
//     expect(await axe(html)).toHaveNoViolations();
//   });

//   test('Text Input with `aria-labelledby` should pass axe DOM accessibility guidelines', async () => {
//     const html = ReactDOMServer.renderToString(
//       <>
//         <label id="123">Label</label>
//         <TextInput
//           placeholder="Placeholder"
//           value={'Hello'}
//           aria-labelledby="123"
//           onChange={jest.fn()}
//         />
//         ;
//       </>
//     );
//     expect(await axe(html)).toHaveNoViolations();
//   });
// });

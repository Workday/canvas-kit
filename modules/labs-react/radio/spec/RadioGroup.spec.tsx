// import * as React from 'react';
// import {render, fireEvent} from '@testing-library/react';
// import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';
// import {RadioButton} from '../lib/Radio.Button';

// describe('Radio Group', () => {
//   const cb = jest.fn();
//   afterEach(() => {
//     cb.mockReset();
//   });

//   describe('when rendered rendered with a name', () => {
//     test('should render a radio group with a name', () => {
//       const {getByTestId} = render(
//         <RadioGroup name="contact" data-testid="radiogroup">
//           <RadioGroup.Button id="1">
//             <RadioGroup.Input value="email"></RadioGroup.Input>
//             <RadioGroup.Label>E-mail</RadioGroup.Label>
//           </RadioGroup.Button>
//           <RadioGroup.Button id="2">
//             <RadioGroup.Input value="phone"></RadioGroup.Input>
//             <RadioGroup.Label>Phone</RadioGroup.Label>
//           </RadioGroup.Button>
//         </RadioGroup>
//       );
//       expect(getByTestId('radiogroup')).toHaveAttribute('name');
//     });
//   });
//   describe('when rendered with a value', () => {
//     test('should render a selected radio that matches that value of a string', async () => {
//       const {getByLabelText} = render(
//         <RadioGroup name="contact" data-testid="radiogroup">
//           <RadioGroup.Button id="1">
//             <RadioGroup.Input value="email"></RadioGroup.Input>
//             <RadioGroup.Label>E-mail</RadioGroup.Label>
//           </RadioGroup.Button>
//           <RadioGroup.Button id="2">
//             <RadioGroup.Input value="phone"></RadioGroup.Input>
//             <RadioGroup.Label>Phone</RadioGroup.Label>
//           </RadioGroup.Button>
//         </RadioGroup>
//       );

//       const phoneRadio = await getByLabelText('Phone');
//       expect(phoneRadio).toHaveProperty('checked', true);
//     });
//     test('should render a selected radio that matches that value of a index', async () => {
//       const {getByLabelText} = render(
//         <RadioGroup name="contact" data-testid="radiogroup">
//           <RadioGroup.Button id="1">
//             <RadioGroup.Input value="email"></RadioGroup.Input>
//             <RadioGroup.Label>E-mail</RadioGroup.Label>
//           </RadioGroup.Button>
//           <RadioGroup.Button id="2">
//             <RadioGroup.Input value="phone"></RadioGroup.Input>
//             <RadioGroup.Label>Phone</RadioGroup.Label>
//           </RadioGroup.Button>
//         </RadioGroup>
//       );

//       const phoneRadio = await getByLabelText('Phone');
//       expect(phoneRadio).toHaveProperty('checked', true);
//     });
//   });
//   describe('when rendered with extra, arbitrary props', () => {
//     it('should spread extra props onto the radio group', () => {
//       const attr = 'test';
//       const {getByTestId} = render(
//         <RadioGroup data-propspread={attr} name="contact" data-testid="radiogroup">
//           <RadioGroup.Button id="1">
//             <RadioGroup.Input value="email"></RadioGroup.Input>
//             <RadioGroup.Label>E-mail</RadioGroup.Label>
//           </RadioGroup.Button>
//           <RadioGroup.Button id="2">
//             <RadioGroup.Input value="phone"></RadioGroup.Input>
//             <RadioGroup.Label>Phone</RadioGroup.Label>
//           </RadioGroup.Button>
//         </RadioGroup>
//       );
//       expect(getByTestId('radiogroup')).toHaveAttribute('data-propspread', attr);
//     });
//   });
//   describe('when clicked', () => {
//     it('should call a  callback function', () => {
//       const {getByLabelText} = render(
//         <RadioGroup name="contact" data-testid="radiogroup" onChange={cb}>
//           <RadioGroup.Button id="1">
//             <RadioGroup.Input value="email"></RadioGroup.Input>
//             <RadioGroup.Label>E-mail</RadioGroup.Label>
//           </RadioGroup.Button>
//           <RadioGroup.Button id="2">
//             <RadioGroup.Input value="phone"></RadioGroup.Input>
//             <RadioGroup.Label>Phone</RadioGroup.Label>
//           </RadioGroup.Button>
//         </RadioGroup>
//       );

//       fireEvent.click(getByLabelText('Phone'));

//       expect(cb).toHaveBeenCalledWith('phone');
//     });
//   });
// });

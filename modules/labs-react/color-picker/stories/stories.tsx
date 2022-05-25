/// <reference path="../../../../typings.d.ts" />
import React from 'react';

import {ColorPicker, useColorPickerModel} from '@workday/canvas-kit-labs-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';

export default {
  title: 'Labs/Color Picker/React',

  component: ColorPicker,
};

const defaultColorSet = [
  {id: colors.blueberry600},
  {id: colors.grapeSoda600},
  {id: colors.pomegranate600},
  {id: colors.cinnamon600},
  {id: colors.cantaloupe600},
  {id: colors.sourLemon600},
  {id: colors.greenApple600},
  {id: colors.jewel600},
  {id: colors.blueberry500},
  {id: colors.grapeSoda500},
  {id: colors.pomegranate500},
  {id: colors.cinnamon500},
  {id: colors.cantaloupe500},
  {id: colors.sourLemon500},
  {id: colors.greenApple500},
  {id: colors.jewel500},
  {id: colors.blueberry400},
  {id: colors.grapeSoda400},
  {id: colors.pomegranate400},
  {id: colors.cinnamon400},
  {id: colors.cantaloupe400},
  {id: colors.sourLemon400},
  {id: colors.greenApple400},
  {id: colors.jewel400},
  {id: colors.blueberry300},
  {id: colors.grapeSoda300},
  {id: colors.pomegranate300},
  {id: colors.cinnamon300},
  {id: colors.cantaloupe300},
  {id: colors.sourLemon300},
  {id: colors.greenApple300},
  {id: colors.jewel300},
  {id: colors.blueberry200},
  {id: colors.grapeSoda200},
  {id: colors.pomegranate200},
  {id: colors.cinnamon200},
  {id: colors.cantaloupe200},
  {id: colors.sourLemon200},
  {id: colors.greenApple200},
  {id: colors.jewel200},
  {id: colors.blueberry100},
  {id: colors.grapeSoda100},
  {id: colors.pomegranate100},
  {id: colors.cinnamon100},
  {id: colors.cantaloupe100},
  {id: colors.sourLemon100},
  {id: colors.greenApple100},
  {id: colors.jewel100},
  {id: colors.blackPepper600},
  {id: colors.blackPepper400},
  {id: colors.blackPepper300},
  {id: colors.blackPepper100},
  {id: colors.frenchVanilla500},
  {id: colors.frenchVanilla400},
  {id: colors.frenchVanilla200},
  {id: colors.frenchVanilla100},
];

export const Default = () => {
  const model = useColorPickerModel({items: defaultColorSet});
  console.warn(model.state.columnCount);
  return (
    <>
      <ColorPicker model={model}>
        <ColorPicker.SwatchBook style={{marginBottom: '20px'}}>
          {(color: any) => {
            return (
              <ColorPicker.SwatchButton color={color.id} onClick={() => console.log(color.id)} />
            );
          }}
        </ColorPicker.SwatchBook>
      </ColorPicker>
      <ColorPicker>
        <ColorPicker.Swatch showCheck={false} color={model.state.selectedIds[0]} />
      </ColorPicker>
    </>
  );
};

// export const WithColorInput = () => {
//   const colorPickerModel = useColorPickerModel();
//   return (
//     <>
//       <ColorPicker model={colorPickerModel}>
//         <ColorPicker.SwatchBook style={{marginBottom: '20px'}} colors={defaultColorSet}>
//           {colors => {
//             return colors.map(color => <ColorPicker.SwatchButton key={color} color={color} />);
//           }}
//         </ColorPicker.SwatchBook>
//         <ColorPicker.CustomColorForm label="Custom Color">
//           <ColorPicker.Input />
//           <ColorPicker.SubmitButton aria-label="Submit Custom Color" />
//         </ColorPicker.CustomColorForm>
//       </ColorPicker>

//       <ColorPicker>
//         <ColorPicker.Swatch
//           showCheck={false}
//           color={
//             defaultColorSet[colorPickerModel.state.selectedIds[0]] || colorPickerModel.state.color
//           }
//         />
//       </ColorPicker>
//     </>
//   );
// };

// export const WithCustomColumnCount = () => {
//   const colorPickerModel = useColorPickerModel({columnCount: 5});
//   return (
//     <>
//       <ColorPicker model={colorPickerModel}>
//         <ColorPicker.SwatchBook style={{marginBottom: '20px'}} colors={defaultColorSet}>
//           {colors => {
//             return colors.map(color => <ColorPicker.SwatchButton key={color} color={color} />);
//           }}
//         </ColorPicker.SwatchBook>
//         <ColorPicker.CustomColorForm label="Custom Color">
//           <ColorPicker.Input />
//           <ColorPicker.SubmitButton aria-label="Submit Custom Color" />
//         </ColorPicker.CustomColorForm>
//       </ColorPicker>

//       <ColorPicker>
//         <ColorPicker.Swatch
//           showCheck={false}
//           color={
//             defaultColorSet[colorPickerModel.state.selectedIds[0]] || colorPickerModel.state.color
//           }
//         />
//       </ColorPicker>
//     </>
//   );
// };

// export const WithCustomComponent = () => {
//   const colorPickerModel = useColorPickerModel();
//   const [customColors, setCustomColors] = React.useState([]);
//   const [customColorValue, setCustomColorValue] = React.useState('');
//   const handleCustomColorChange = (e: any) => {
//     setCustomColorValue(e.target.value);
//   };
//   const handleSubmitCustomColor = () => {
//     setCustomColors([...customColors, customColorValue]);
//   };
//   return (
//     <>
//       <ColorPicker model={colorPickerModel}>
//         <ColorPicker.SwatchBook style={{marginBottom: '20px'}} colors={defaultColorSet}>
//           {colors => {
//             return colors.map(color => <ColorPicker.SwatchButton key={color} color={color} />);
//           }}
//         </ColorPicker.SwatchBook>

//         <ColorPicker.CustomColorForm label="Custom Color">
//           <ColorPicker.Input onChange={handleCustomColorChange} />
//           <ColorPicker.SubmitButton
//             onClick={handleSubmitCustomColor}
//             aria-label="Submit Custom Color"
//           />
//         </ColorPicker.CustomColorForm>
//         <div>
//           <ColorPicker.SwatchBook colors={customColors}>
//             {customColors => {
//               return customColors.map(color => (
//                 <ColorPicker.SwatchButton aria-label={color} key={color} color={`#${color}`} />
//               ));
//             }}
//           </ColorPicker.SwatchBook>
//         </div>
//       </ColorPicker>
//     </>
//   );
// };

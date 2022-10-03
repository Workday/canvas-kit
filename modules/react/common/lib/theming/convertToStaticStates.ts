// import {CSSProperties} from '@workday/canvas-kit-react/tokens';
// export const convertToStaticStates = (obj?: CSSProperties): CSSProperties | undefined => {
//   if (!obj) {
//     return obj;
//   }

//   return Object.keys(obj).reduce((result, key) => {
//     const newKey = key
//       .replace(/^:/, '&:') // handle shorthand like ":focus"
//       .replace(/,(\s+):/g, ',$1&:') // handle selectors like ":focus, :hover"
//       .replace(/:(focus|hover|active)/g, '.$1');

//     // Remove any selectors that use data-whatinput. Leaving them in would cause focus rings to disappear when the user clicks with a mouse.
//     if (/data-whatinput/.test(key)) {
//       return result;
//     }
//     const value =
//       typeof obj[key] === 'object' ? convertToStaticStates(obj[key] as CSSProperties) : obj[key];
//     const newObj = {...result, [newKey]: value};
//     return newObj;
//   }, {});
// };

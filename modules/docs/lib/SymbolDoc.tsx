export {SymbolDoc} from './widgetUtils';
import './widgets';

// const Value2 = ({
//   value,
//   doc,
// }: {
//   value:
//     | types.Value
//     | ModelHookValue
//     | ModelValue
//     | EnhanceComponentValue
//     | CanvasColorValue
//     | ElemPropsHookValue
//     | ComposedElemPropsHookValue;
//   doc?: types.ExportedSymbol<any>;
// }): JSX.Element => {
//   const parentComponentName = React.useContext(ParentComponentNameContext);
//   const parentComponentJSDoc = React.useContext(ParentComponentJSDocContext);
//   parentComponentJSDoc && console.log('doc', parentComponentJSDoc);
//   const renderContext = React.useContext(RenderContext);
//   const level = React.useContext(IndentLevelContext);
//   switch () {
//     case 'type':
//       return <Value value={value.value} />;
//     case 'canvasColor':
//       return (
//         <ColorPicker
//           style={{width: 170}}
//           colorSet={Object.values(colors)}
//           onColorChange={() => {}}
//         />
//       );
//   }
// };

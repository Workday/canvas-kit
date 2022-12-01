const fs = require('fs/promises');
const getComponentPropMap = require('./get-component-prop-map');

async function main() {
  const propMap = await getComponentPropMap();

  await fs.writeFile('props.json', JSON.stringify(propMap, null, '  '));
}

main();

// /**
//  * Build props for files in react module and create a props file for lookups
//  */
// srcFolders.forEach(folder => {
//   const srcFolder = path.join(__dirname, '../../', folder);

//   glob(srcFolder + '/**/*.tsx', {}, (err, files) => {
//     files.forEach((destFile, index) => {
//       const sourceMdx = files[index];
//       const storiesDir = path.dirname(sourceMdx);
//       const sourceExamplesDir = path.join(storiesDir, 'examples');
//       const destDir = path.dirname(destFile);

//       fs.mkdirSync(destDir, {recursive: true});
//       sanitizeMdxFile(sourceMdx, destFile);

//       // Copy examples if they exist
//       if (fs.existsSync(sourceExamplesDir)) {
//         const destExamplesDir = path.join(destDir, 'examples');
//         fse.copySync(sourceExamplesDir, destExamplesDir);

//         // Change exports from named to default
//         glob(destExamplesDir + '/**/*.@(js|jsx|ts|tsx)', {}, (err, examples) => {
//           examples.forEach(example => {
//             // Only convert examples - not splitprops files
//             if (!path.basename(example).includes('.splitprops')) {
//               fs.readFile(example, 'utf8', (err, data) => {
//                 fs.writeFileSync(
//                   example,
//                   data.replace(/export const (\w)* =/g, 'export default'), // Convert named export to default export
//                   'utf8'
//                 );
//               });
//             }
//           });
//         });
//       }

//       // Copy files that split the props of a Compound Component model.
//       glob(storiesDir + '/*.splitprops.tsx', {}, (err, files) =>
//         files.forEach(file => fse.copySync(file, path.join(destDir, path.basename(file))))
//       );
//     });
//   });
// });

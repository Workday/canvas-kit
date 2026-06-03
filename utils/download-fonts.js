import fs from 'node:fs';
import https from 'node:https';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fontBaseUrl = 'https://design.workdaycdn.com/beta/assets/fonts@1.0.0/roboto/ttf/';
const fontsToDownload = [
  'Roboto-Light.ttf',
  'Roboto-Regular.ttf',
  'Roboto-Medium.ttf',
  'Roboto-Bold.ttf',
  'RobotoMono-Regular.ttf',
];

const sanaFontBaseUrl = 'https://design.workdaycdn.com/assets/fonts/Sana-Sans/';
const sanaFontsToDownload = ['SanaSans-Variable.woff2'];

async function download(url, filePath) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${url} to ${filePath}`);
    const file = fs.createWriteStream(filePath);
    let fileInfo = null;

    const request = https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }

      fileInfo = {
        mime: response.headers['content-type'],
        size: parseInt(response.headers['content-length'], 10),
      };

      response.pipe(file);
    });

    // The destination stream is ended by the time it's called
    file.on('finish', () => resolve(fileInfo));

    request.on('error', err => {
      fs.unlink(filePath, () => reject(err));
    });

    file.on('error', err => {
      fs.unlink(filePath, () => reject(err));
    });

    request.end();
  });
}

async function main() {
  // Download all webfonts locally to avoid CDN and font-loading issues
  if (!fs.existsSync(resolve(__dirname, '../public'))) {
    fs.mkdirSync(resolve(__dirname, '../public'));
  }

  // Serve type CSS from public/ so Storybook head <link> tags work without bundler resolution
  fs.copyFileSync(
    resolve(__dirname, '../.storybook/updated-type.css'),
    resolve(__dirname, '../public/updated-type.css')
  );

  await Promise.all(
    fontsToDownload.map(fileName => {
      return download(fontBaseUrl + fileName, resolve(__dirname, '../public', fileName));
    })
  );
  await Promise.all(
    sanaFontsToDownload.map(fileName => {
      return download(sanaFontBaseUrl + fileName, resolve(__dirname, '../public', fileName));
    })
  );
}

main();

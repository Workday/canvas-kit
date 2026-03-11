import fs from 'node:fs';
import https from 'node:https';
import {dirname, resolve, parse} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fontsToDownload = [
  'https://design.workdaycdn.com/assets/fonts/Inter/Inter.ttf',
  'https://design.workdaycdn.com/assets/fonts/Inter/Inter-Italic.ttf',
  'https://design.workdaycdn.com/assets/fonts/Roboto/Roboto-Mono.ttf'
];

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
  await Promise.all(
    fontsToDownload.map(filePath => {
      const {base} = parse(filePath);
      return download(filePath, resolve(__dirname, '../public', base));
    })
  );
}

main();

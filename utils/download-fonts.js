/* eslint-disable compat/compat */
const https = require('https');
const fs = require('fs');
const path = require('path');

const fontBaseUrl = 'https://design.workdaycdn.com/beta/assets/fonts@1.0.0/roboto/ttf/';
const fontsToDownload = [
  'Roboto-Light.ttf',
  'Roboto-Regular.ttf',
  'Roboto-Medium.ttf',
  'Roboto-Bold.ttf',
  'RobotoMono-Regular.ttf',
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
  if (!fs.existsSync(path.resolve(__dirname, '../public'))) {
    fs.mkdirSync(path.resolve(__dirname, '../public'));
  }
  await Promise.all(
    fontsToDownload.map(fileName => {
      download(fontBaseUrl + fileName, path.resolve(__dirname, '../public', fileName));
    })
  );
}

main();

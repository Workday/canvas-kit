#!/bin/bash

cat << EOM
This utility will walk you through creating a new canvas-kit module.

Press ^C at any time to quit.

EOM

# Colors
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Get module name
read -p "Module/component name (@workday/canvas-kit-<TARGET>-<NAME>): " name

path="./modules/$name"
reactPath="$path/react"
wantsCss=false

if [ -d "$path" ]; then
  echo -e "${RED}Module with name '$name' already exists."
  exit 1
fi

# Get module info
read -p "Module description: " description
upperName="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"


# Create module directory
echo -e "\nCreating ${CYAN}$path${NC}"
mkdir $path
mkdir $reactPath

# Create package.json
packageJson="$reactPath/package.json"
echo -e "Creating ${CYAN}$packageJson${NC}"
cat > $packageJson << EOF
{
  "name": "@workday/canvas-kit-react-$name",
  "version": "0.0.0",
  "description": "$description",
  "author": "Workday, Inc. (https://www.workday.com)",
  "license": "Apache-2.0",
  "main": "dist/commonjs/index.js",
  "module": "dist/es6/index.js",
  "sideEffects": false,
  "types": "dist/es6/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://github.com/Workday/canvas-kit/tree/master/modules/$name/react"
  },
  "files": [
    "dist/",
    "lib/",
    "index.ts"
  ],
  "scripts": {
    "watch": "yarn build:es6 -w",
    "clean": "rimraf dist && rimraf .build-info && mkdirp dist",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:es6": "tsc -p tsconfig.es6.json",
    "build:rebuild": "npm-run-all clean build",
    "build": "npm-run-all --parallel build:cjs build:es6"
  },
  "keywords": [
    "canvas",
    "canvas-kit",
    "react",
    "components",
    "workday",
    "$name"
  ],
  "peerDependencies": {
    "react": ">= 16.8 < 17"
  }
}
EOF

# Create lib/MyComponent.tsx
mkdir "$reactPath/lib"
componentTsx="$reactPath/lib/MyComponent.tsx"
echo -e "Creating ${CYAN}$componentTsx${NC}"
cat > $componentTsx << EOF
import * as React from 'react'

export default class MyComponent extends React.Component {
  public render() {
    return (
      <div>
        MyComponent
      </div>
    )
  }
}

EOF

# Create index.ts
indexTs="$reactPath/index.ts"
echo -e "Creating ${CYAN}$indexTs${NC}"
cat > $indexTs << EOF
import MyComponent from './lib/MyComponent';

export default MyComponent;
export {MyComponent};
export * from './lib/MyComponent';

EOF

# Create stories.tsx
mkdir "$reactPath/stories"
storiesJs="$reactPath/stories/stories.tsx"
echo -e "Creating ${CYAN}$storiesJs${NC}"
cat > $storiesJs << EOF
/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import MyComponent from '../index';
import README from '../README.md';

storiesOf('Canvas Kit/$upperName', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <MyComponent />
    </div>
  ));

EOF

# Create README.md
readme="$reactPath/README.md"
echo -e "Creating ${CYAN}$readme${NC}"
cat > $readme << EOF
# Canvas Kit $upperName
EOF

# Create tsconfig.json
tsconfig="$reactPath/tsconfig.json"
echo -e "Creating ${CYAN}$tsconfig${NC}"
cat > $tsconfig << EOF
{
  "extends": "../../../tsconfig.json",
  "exclude": ["node_modules", "ts-tmp", "dist", "spec", "stories"]
}
EOF

# Create tsconfig.cjs.json
tsconfig="$reactPath/tsconfig.cjs.json"
echo -e "Creating ${CYAN}$tsconfig${NC}"
cat > $tsconfig << EOF
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "module": "commonjs",
    "outDir": "dist/commonjs",
    "skipLibCheck": true,
    "tsBuildInfoFile": "./.build-info/tsconfig.cjs.tsbuildinfo"
  }
}
EOF

# Create tsconfig.es6.json
tsconfig="$reactPath/tsconfig.es6.json"
echo -e "Creating ${CYAN}$tsconfig${NC}"
cat > $tsconfig << EOF
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "outDir": "dist/es6",
    "tsBuildInfoFile": "./.build-info/tsconfig.es6.tsbuildinfo"
  }
}
EOF

### CSS

echo
read -p "Would you like to create a css module as well? [Y/n] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then

wantsCss=true
cssPath="$path/css"
mkdir $cssPath

# Create css package.json
packageJson="$cssPath/package.json"
echo -e "Creating ${CYAN}$packageJson${NC}"
cat > $packageJson << EOF
{
	"name": "@workday/canvas-kit-css-$name",
	"version": "0.0.0",
	"description": "$description",
	"author": "Workday, Inc. (https://www.workday.com)",
	"license": "Apache-2.0",
  "files": [
    "dist",
    "lib",
    "index.scss"
  ],
  "style": "dist/canvas-kit-css-$name.min.css",
  "main": "dist/canvas-kit-css-$name.min.css",
	"repository": {
		"type": "git",
		"url": "https://github.com/Workday/canvas-kit/tree/master/modules/$name/css"
	},
	"scripts": {},
	"keywords": [
		"canvas",
		"canvas-kit",
		"css",
		"components",
		"workday",
		"$name"
	]
}
EOF

# Create lib/<NAME>.scss
moduleCss="$cssPath/lib/$name.scss"
echo -e "Creating ${CYAN}$moduleCss${NC}"
mkdir -p "$cssPath/lib"
touch $moduleCss

# Create index.scss
indexCss="$cssPath/index.scss"
echo -e "Creating ${CYAN}$indexCss${NC}"
cat > $indexCss << EOF
@import "@workday/canvas-kit-css-core/index.scss";
@import "./lib/$name.scss";
EOF

# Create stories.js
storiesJs="$cssPath/stories.tsx"
echo -e "Creating ${CYAN}$storiesJs${NC}"
cat > $storiesJs << EOF
import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import README from './README.md'
import './index.scss'

storiesOf('CSS/$upperName', module)
	.addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">$upperName</h1>
    </div>
  ))

EOF

# Create README.md
readme="$cssPath/README.md"
echo -e "Creating ${CYAN}$readme${NC}"
cat > $readme << EOF
# Canvas Kit CSS $upperName
EOF

fi

# Copy LICENSE
echo -e "Adding License file to ${CYAN}$reactPath{NC}"
cp LICENSE $reactPath

# Install deps using Yarn workspaces (instead of Lerna bootstrap)
echo -e "\nInstalling dependencies\n"
yarn

# We always add the React module as dependency and set up export
echo -e 'Adding module as dependency and adding export to index'
node "utils/create-module.js" "$name" "react";

if [ "$wantsCss" = true ] ; then
  echo -e 'Adding module as CSS dependency and adding Sass module import'
  node "utils/create-module.js" "$name" "css";
fi

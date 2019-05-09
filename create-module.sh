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
read -p "Module name (@workday/canvas-kit-react-<NAME>): " name

path="./modules/canvas-kit-react-$name"

if [ -d "$path" ]; then
  echo -e "${RED}Module with name 'canvas-kit-react-$name' already exists."
  exit 1
fi

# Get module info
read -p "Module description: " description
read -p "Author: " author
upperName="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"

# Create module directory
echo -e "\nCreating ${CYAN}$path${NC}"
mkdir $path

# Create package.json
packageJson="$path/package.json"
echo -e "Creating ${CYAN}$packageJson${NC}"
cat > $packageJson << EOF
{
  "name": "@workday/canvas-kit-react-$name",
  "version": "0.0.0",
  "description": "$description",
  "homepage": "https://workdaydesign.com",
  "author": "$author",
  "license": "Apache-2.0",
  "main": "dist/commonjs/index.js",
  "module": "dist/es6/index.js",
  "sideEffects": false,
  "types": "dist/es6/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://ghe.megaleo.com/design/canvas-kit-react/tree/master/modules/canvas-kit-react-$name"
  },
  "files": [
    "dist/",
    "lib/",
    "index.ts"
  ],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "rimraf dist && mkdirp dist",
    "build:cjs": "tsc --outDir dist/commonjs --module commonjs --declaration",
    "build:es6": "tsc --outDir dist/es6 --declaration",
    "build": "npm-run-all clean --parallel build:cjs build:es6"
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
    "react": ">= 15 < 17"
  }
}
EOF

# Create lib/MyComponent.tsx
mkdir "$path/lib"
componentTsx="$path/lib/MyComponent.tsx"
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
indexTs="$path/index.ts"
echo -e "Creating ${CYAN}$indexTs${NC}"
cat > $indexTs << EOF
import MyComponent from './lib/MyComponent';

export default MyComponent;
export {MyComponent};
export * from './lib/MyComponent';

EOF

# Create stories.tsx
storiesJs="$path/stories.tsx"
echo -e "Creating ${CYAN}$storiesJs${NC}"
cat > $storiesJs << EOF
/// <reference path="../../typings.d.ts" />
import * as React from 'react'
import {storiesOf} from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'

import MyComponent from './index' // tslint:disable-line:import-name
import README from './README.md'

storiesOf('Canvas Kit/$upperName', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">$upperName</h1>
      <MyComponent />
    </div>
  ))

EOF

# Create README.md
readme="$path/README.md"
echo -e "Creating ${CYAN}$readme${NC}"
cat > $readme << EOF
# Canvas Kit $upperName
EOF

# Create tsconfig.json
tsconfig="$path/tsconfig.json"
echo -e "Creating ${CYAN}$tsconfig${NC}"
cat > $tsconfig << EOF
{
  "extends": "../../tsconfig.json",
  "exclude": ["node_modules", "ts-tmp", "dist", "spec", "stories.tsx"]
}

EOF
# Create .npmignore
npmignore="$path/.npmignore"
echo -e "Creating ${CYAN}$npmignore${NC}"
cat > $npmignore << EOF
tsconfig.json
yarn.lock

EOF

# Install deps using Yarn workspaces (instead of Lerna bootstrap)
echo -e "\nInstalling dependencies\n"
yarn

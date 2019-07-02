#!/usr/bin/env bash

setup_git() {
  git config --global user.email $GITHUB_EMAIL
  git config --global user.name $GITHUB_USER
}

setup_branch() {
  git checkout $TRAVIS_BRANCH
  git remote rm origin
  git remote add origin https://${GH_RELEASE_TOKEN}:github.com/workday/canvas-kit.git > /dev/null 2>&1
}

lerna_publish() {
  npm config set //registry.npmjs.org/:_authToken=$NPM_PUBLISH_TOKEN
  yarn lerna publish --no-changelog --pre-dist-tag prerelease
}

setup_git
setup_branch
lerna_publish

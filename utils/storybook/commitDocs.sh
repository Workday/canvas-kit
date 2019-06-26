#!/usr/bin/env bash
git add $TRAVIS_BUILD_DIR/docs
git diff $TRAVIS_BUILD_DIR --quiet && git diff $TRAVIS_BUILD_DIR --staged --quiet || git commit -m "docs(storybook): Build Storybook [ci skip]"
git push

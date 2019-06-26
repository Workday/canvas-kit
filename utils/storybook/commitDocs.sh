#!/usr/bin/env bash
git add $TRAVIS_BUILD_DIR/docs
git diff --quiet && git diff --staged --quiet || git commit -m "docs(storybook): Build Storybook [ci skip]"
git push origin master

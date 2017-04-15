#!/bin/bash

git checkout deploy
git rebase master
ng build
git add -f dist
git commit --amend --no-edit
git push -f origin deploy
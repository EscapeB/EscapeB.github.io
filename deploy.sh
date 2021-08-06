# build static file
yarn run build

# add git files
git add ./

# add commit 
git commit -m 'docs:update profile';

# subtree push to master branch

git push origin `git subtree split --prefix dist master`:master
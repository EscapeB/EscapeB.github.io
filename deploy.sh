# build static file
yarn run build

# add git files
git add ./

# add commit 
git commit -m 'docs:update profile';

# subtree push to master branch

git subtree push --prefix=dist origin master
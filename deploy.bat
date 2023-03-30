@echo off

echo Cloning repository...
git clone --depth=1 --branch=gh-pages git@github.com:code-reading-lab/redis-reading.git gh-pages

echo Copying build files...
xcopy /E /Y /I build\* gh-pages\

echo Committing changes...
cd gh-pages
git config user.name henrytien
git config user.email tianhangyu8886@gmail.com
git add -A
git commit -m "Update build files"

echo Pushing changes...
git push origin gh-pages

echo Cleaning up...
cd ..
rmdir /S /Q gh-pages
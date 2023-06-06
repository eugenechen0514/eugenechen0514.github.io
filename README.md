

# init 
```shell
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout master
```

# deploy
```shell
cd public
git push --force origin gh-pages

```


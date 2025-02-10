## This Is a Basic Implementation of Github Actions over a React App
Here We Create and deploy this React App to github pages through automation CI/CD Github Action  

### For this you only need to create a yaml file like deploy.yaml file and place it in .git/workflows directory

**Then through this yaml file**
1. Install Dependencies
2. Create a Build or an Artifact
3. Deploy over github pages or any hosting platform of your choice

**Example**
```yaml
name: CI/CD for React app

on:
    push:
        branches: [main]
    workflow_dispatch:
permissions: 
    contents: write

jobs:
    build_and_deploy:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout repository
            uses: actions/checkout@v3

          - name: Nodejs setup
            uses: actions/setup-node@v3
            with:
                node-version: 18
          - name: Install Dependencies
            run: npm install

          - name: Build Project
            run: npm run build
          
          - name: Deploy to github pages
            uses: JamesIves/github-pages-deploy-action@4.1.0
            with:
                branch: gh-pages
                folder: build
```

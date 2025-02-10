## This Is a Basic Implementation of Github Actions over a React App
Here We Create and deploy this React App to github pages through automation CI/CD Github Action  

### To Write these acttions

**You need to create yaml file like eg. "deploy.yaml" file and place them in .git/workflows directory**

**Then through this yaml file here i am**
1. Installing Dependencies
2. Creating a Build or an Artifact
3. Deploying it over github pages or any hosting platform of your choice

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

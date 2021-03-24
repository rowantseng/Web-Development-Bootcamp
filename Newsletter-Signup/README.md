# Newsletter Signup

## JS Package Manager Initialization

```
npm init
npm install express request body-parser

nodemon app.js
```

## Deployment

### Procfile Preparation

Tell Heroku how to execute the project.

```
web: node app.js
```

### Preliminary Works and Deployment

```
# Check version of node greater than 10
node --version

# Check existence
npm --version

# Check existence
git --version

# Version control
cd /path/to/project
git init
git add .
git commit -m "first commit"

# Deploy
heroku create
git push heroku master
```

Go to https://infinite-hamlet-22534.herokuapp.com/ and see how it works!
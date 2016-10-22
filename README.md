## INSTRUCTIONS ##
1. Run npm init
2. Configure the config.json file with your database details with your own mysql database.
3. Remove the git folder for the project with rm -rf .git
4. Remove the git remote to my repo with git remote rm origin
5. Initialize your own git repo with git init
6. Connect your local git repo to your remote git repo with git remote add origin your-github-repo-ssh-key-goes-here
7. Configure the package.json with your own information.
8. Run the server with npm start or node server.js. Navigate to localhost:3000

## Need to know ##
1. The public folder contains all public assets such as client side javascript files, css, and images.
2. The controller folder contains all server side controllers and routes. Api and html routes and separated into separate files.
3. home.js and testApi.js are files which contain functions which we will use as callbacks in our routes files.
4. We have a partial folder in our views folder for any partial templates.

## Sequelize
Our database is a global object. No need to require and export the the instance of our Sequelize connection (db). Access any of your models from anywhere in your project like so:

db.User.create({name: username, password: password});

or

db.User.findOne({where: {name: username, password: password}});

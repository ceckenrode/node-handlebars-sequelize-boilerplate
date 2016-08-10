## INSTRUCTIONS ##
1. Run npm init
2. Configure the config.json file with your database details with your own mysql database.
3. Create a new file, name it '.env' inside save details to your production JAWSDB like so: JAWSDB_URL= yourJAWSDBURLHere
4. Remove the git folder for the project with rm -rf .git
5. Remove the git remote to my repo with git remote rm origin
6. Initialize your own git repo with git init
7. Connect your local git repo to your remote git repo with git remote add origin your-github-repo-ssh-key-goes-here
8. Configure the package.json with your own information.
9. Run the server with npm start or node server.js


## Need to know ##
1. The public folder contains all public assets such as client side javascript files, css, and images.
2. The controller folder contains all server side controllers and routes. Api and html routes and separated into separate files.
3. home.js and testApi.js are files which contain functions which we will use as callbacks in our routes files.
4. We have a partial folder in our views folder for any partial templates.

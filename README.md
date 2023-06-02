# be-team-2-angular

Environment settings
1. Download and install node js
2. Install the file package.json
             npm init -y
3. Create app.js file in root directory
4. Go to the package.json file and change main to "main": "app.js"
5. Install nodemon (a tool to help node applications be automatically restarted when there are changes)
     npm i -g nodemon
     npm i --save-dev nodemon
6. Install express . library
             npm i express
7. Install babel
             npm i --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0
8. Create a .babelrc file in the root directory and add the code below
             { "presets": ["env","stage-0"] }
9. Go to the package.json file and reset the start command
     "scripts": {
         "start": "nodemon app.js --exec babel-node -e js"
     },
     case start error: npm i -g babel-cli
Setup mongodb & Robo3T
1.Download MongoDB Community https://www.mongodb.com/try/download/community
2.Download the Robo3T GUI (not Studio Robo3T) https://robomongo.org/


JWT
Install JWT: npm i jsonwebtoken
Install express-jwt to use express middleware: npm i express-jwt

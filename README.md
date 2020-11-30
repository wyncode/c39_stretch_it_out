# C39 - Final Stretch It Out

Hello, Welcome to Stretch It Out!

# What?

StretchItOut.com is an app that allows users to get stretch tutorials and keep track of the stretches they've done. It's meant to be a tool that encourages people to add stretching to their daily routines.

# Features:

- Users can track their daily stretches completed and how many days they've achieved their stretching goal.
- Users can personalize their accounts and filter stretches that are suited to their needs. Any account preferences can be changed at anytime to adapt to changing fitness levels.
- Users can add to a list of their favorite stretches so they can easily return to the ones they like.

# Status

This project has a status of complete. However, there is room for expansion.

# Who

- Eric Anderson : [Click to see my Github](https://github.com/ericshuanders)

- Laurel Galaty : [Click to see my Github](https://github.com/ljgalaty)

- Love James : [Click to see my Github](https://github.com/Lovj-web)

- Marlon Angulo : [Click to see my Github](https://github.com/junior033)

# How

## Building Blocks

The stack we used for this project is MERN:

MongoDB as the database to store data
Express for the servers
React for the front-end
Node.js as our JavaScript run-time
Within our Database we had 2 models

Users: the account of the User of the application
Stretches: one of many stretches we have stored in our database that users can access, interact with, and save to their accounts

- Dependencies:
  - "axios": "^0.21.0",
  - "bcryptjs": "^2.4.3",
  - "bootstrap": "^4.5.3",
  - "cloudinary": "^1.23.0",
  - "concurrently": "^5.3.0",
  - "cookie-parser": "^1.4.5",
  - "express": "^4.17.1",
  - "express-fileupload": "^1.2.0",
  - "jsonwebtoken": "^8.5.1",
  - "mongodb": "^3.6.2",
  - "mongoose": "^5.10.9",
  - "passport": "^0.4.1",
  - "passport-jwt": "^4.0.0",
  - "react-circular-progressbar": "^2.0.3",
  - "sweetalert": "^2.1.2"

## installation

- Clone the Repo
- git clone

- Run yarn to install the dependencies
- yarn install
- yarn && cd client && yarn

- Start your server
- yarn dev will start up both your server-side and client-side servers
- yarn server && yarn client will run your server-side and client-side respectively

## To deploy

**NOTE** Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

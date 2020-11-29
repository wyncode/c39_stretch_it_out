# C39 - Final

    Hello, Welcome to Stretch It Out!

# What?

    StretchItOut.com is an app focused on providing a new intuitive, meaningful, and accesible way for people of all skill types to implement healthy life choices by creating customized stretching routines cartered to the user's specific needs and comfortability.

# Status

    This project has a status of complete. However, there is room for expansion.

# Demo

# Why

    This project was developed with the busy individual in mind who feels that they have little-to-no-time to get in better shape. As developers we know from personal experience how working on a computer all day can cause many physical ailments such as poor posture, mobility and overall health.  We built this app because we are passionate about our health and personal growth. We know that success in our health is the driving factor to be successful in our careers and personal lives.

# Who

Eric Anderson : https://github.com/ericshuanders

Laurel Galaty : https://github.com/ljgalaty

Love James : https://github.com/Lovj-web

Marlon Angulo : https://github.com/junior033

# How

    Dependencies:
    "axios": "^0.21.0",
    "bcryptjs": "^2.4.3",
    "bootstrap": "^4.5.3",
    "cloudinary": "^1.23.0",
    "concurrently": "^5.3.0",
    "cookie-parser": "^1.4.5",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^3.6.2",
    "mongoose": "^5.10.9",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "react-circular-progressbar": "^2.0.3",
    "sweetalert": "^2.1.2"

    -install

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

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

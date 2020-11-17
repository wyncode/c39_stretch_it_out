require('./db/config');
const cookieParser = require('cookie-parser');

const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  passport = require('./middleware/authentication/index'),
  fileUpload = require('express-fileupload');
const app = express();

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use('/api', openRoutes);
app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
app.use('/api/*', passport.authenticate('jwt', { session: false }));
app.use('/api/users', userRouter);
// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
    //this is a bug--it's saving all the images onto our computer!
  })
);
module.exports = app;

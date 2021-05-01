import express from 'express';
import React from 'react';
import Profile from '../../components/Profile';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import passport from 'passport';
const router = express.Router();

router.get('/', isLoggedIn, (req, res, next) => {
  const lay = renderToString(
    <StaticRouter>
       <Profile />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Вход</title>
                <link rel="stylesheet" type="text/css" href="main.css">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src='bundle.js' defer></script>
                      </head>
                    <body>
                   <div id="app">
                 ${lay}
              </div>
            </body>
        </html>`
  )

});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  }
  res.redirect('/enter');
}


export default router;

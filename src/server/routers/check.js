import React from 'react';
import express from 'express';
import User from '../models/user.js';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Congrats from '../../components/Congrats';
import OneMoreTime from '../../components/OneMoreTime';

const router = express.Router();

  router.post('/', (req, res) => {
    const { manualCode, mail } = req.body;
    User.findOne({email: mail}, function(err, user) {
      if (err) {
        return done(err);
      }
      if(user) {
        if(user.code == manualCode) {
          const congrats = renderToString(
            <StaticRouter>
               <Congrats />
            </StaticRouter>
          )
          res.send(
            `<!DOCTYPE html>
                <html>
                    <head>
                      <title>Проверка кода</title>
                           <link rel="stylesheet" type="text/css" href="main.css">
                             <meta name="viewport" content="width=device-width, initial-scale=1">
                               <script src='bundle.js' defer></script>
                               </head>
                             <body>
                           <div id="app">
                         ${congrats}
                      </div>
                    </body>
                </html>`
              )
          }
          else {
              const failed = renderToString(
                <StaticRouter>
                   <OneMoreTime />
                </StaticRouter>
              )
              res.send(
                `<!DOCTYPE html>
                    <html>
                        <head>
                          <title>Проверка кода</title>
                               <link rel="stylesheet" type="text/css" href="main.css">
                                 <meta name="viewport" content="width=device-width, initial-scale=1">
                                   <script src='bundle.js' defer></script>
                                   </head>
                                 <body>
                               <div id="app">
                             ${failed}
                          </div>
                        </body>
                    </html>`
              );
          }
      }
    });
  });

export default router;

import React from 'react';
import passport from 'passport';
import mongoose from 'mongoose';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import User from '../models/user.js';
import Code from '../../components/Code';
import Registration from '../../components/Registration';

const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

require('dotenv/config');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/', (req, res, done) => {

  var { name, email, telephone, password } = req.body;

  req.checkBody('name', "Поле 'имя' должно быть заполнено").notEmpty();
  req.checkBody('email', 'Неправильный Email').isEmail();
  req.checkBody('telephone', 'Неверный телефонный номер').isLength({min: 11});
  req.checkBody('password', 'Минимально число символов - 5').isLength({min: 5});
  req.checkBody('confirm', 'Поля должны совпадать').equals(password);

  var errors = req.validationErrors();

  if(errors) {
    console.log(errors);
     var err = errors.map(error => error.msg);
     return res.send(err);
  }

  User.findOne({email: email}, function(err, user) {
  if (err) {
    return done(err);
  }
  if(user) {
    const errors = [{'msg': 'Такой Email уже используется'}];
    const cond = req.isAuthenticated();
    res.send(errors[0].msg);
    return done(null, false);
  }



// интеграция twilio <--//

const count = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function getRandom(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)
}
let arr = [];
while(arr.length < 6) {
  arr.push(count[getRandom(0, 35)]);
}
const message = arr.join('');
console.log(message);
/*
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
client.messages.create({
  to: '+420775650705',
  from: '+447588664528',
  body: message
}).then((message) => console.log(message.sid));
//import client from 'twilio'(authToken, accountSid);
*/
var newUser = new User({
  name: name,
  email: email,
  telephone: telephone,
  password: password,
  code: message
});

User.createUser(newUser, function(err, user) {
    if (err) throw err;
    console.log(user);
});

    //res.send(message);
    const lay = renderToString(
      <StaticRouter>
         <Code />
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
                           <script>window.__INITIAL_STATE__ = ${serialize(email)}</script>
                         </head>
                       <body>
                     <div id="app">
                   ${lay}
                </div>
              </body>
          </html>`
        )
  });
});

passport.use('local.signin', new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
 function(req, email, password, done) {

  User.findOne({email: email}, function (err, user) {
    if (err) {
      console.log(err);
      return done(err);
    }

      if (!user) {   // --> вызывает get запрос данной url
       req.flash('errors', 'Не найдено пользователей. Возможно вы еще не зарегистрированы в нашем сервисе?');
       return done(null, false);
     }

     if(user.code !== 'true') {
       req.flash('wrongCode', 'Ваш аккаунт не был подтвержден смс, пожалуйста обратитеьс в службуподдержки');
       return done(null, false);
     }

    User.comparePassword(password, user.password, function(err, isMatch) {
      if (err) throw err;
      if(isMatch) {
        return done(null, user);
      }
      else {
        req.flash('error', 'Неверный пароль');
        return done(null, false)
      }
    })
  });

}));

router.post('/signin',
    passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/enter',
    passReqToCallback: true
 })
);

function notLoggedIn(req, res) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

export default router;

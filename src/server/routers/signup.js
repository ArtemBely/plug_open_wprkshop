import React from 'react';
import passport from 'passport';
import mongoose from 'mongoose';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import User from '../models/user.js';

/*
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: '+420775650705',
  from: '+447588664528',
  body: 'SUCCESS!'
}).then((message) => console.log(message.sid));
//import client from 'twilio'(authToken, accountSid);
*/

const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/', (req, res, done) => {

  var { name, email, city, telephone, password } = req.body;

  req.checkBody('name', "Поле 'имя' должно быть заполнено").notEmpty();
  req.checkBody('email', 'Неправильный Email').isEmail();
  req.checkBody('city', "Поле 'имя' должно быть заполнено").notEmpty();
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

var newUser = new User({
  name: name,
  email: email,
  city: city,
  telephone: telephone,
  password: password
});

User.createUser(newUser, function(err, user) {
    if (err) throw err;
    console.log(user);
});
    const success = true;
    const cond = req.isAuthenticated();
    const indicate = 'Вы успешно зарегестрировались и теперь можете войти в личный кабинет!';
    res.send('success!');
  });
});

export default router;

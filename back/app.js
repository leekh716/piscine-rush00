const express = require('express');
const { sequelize } = require('./models/index');
const accountRouter = require('./routes/account');
const postRouter = require('./routes/post');
const replyRouter = require('./routes/reply');

const app = express();
const port = 4242;

const badRequest = { msg: 'Bad Request' };
const NotFound = { msg: 'Not Found' };

sequelize.sync();

app
  .use(express.json())
  .use((err, req, res, next) => {
    if (err) res.status(400).send(badRequest);
    else next();
  })
  .use('/account', accountRouter)
  .use('/post', postRouter)
  .use('/reply', replyRouter)
  .use('*', (req, res) => {
    res.status(404).send(NotFound);
  });

app.listen(port);

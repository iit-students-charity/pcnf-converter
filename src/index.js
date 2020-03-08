const express = require('express');
const pug = require('pug');
const url = require('url');

const convert = require('./logicRunner')

const app = express();
const port = 3000;

app.use(express.urlencoded())

app.get('/request', (req, res) => {
  res.send(pug.renderFile('src/views/form.pug', {}));
});

app.post('/request', (req, res) => {
  const result = convert(req.body.code)
  res.redirect(url.format({
    pathname: '/result',
    query: {
      'result': result
    }
  }));
});

app.get('/result', (req, res) => {
  res.send(pug.renderFile('src/views/result.pug', {
    result: req.query.result
  }));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

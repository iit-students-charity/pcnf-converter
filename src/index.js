const express = require('express');
const pug = require('pug');
const url = require('url');

const runScript = require('./logicRunner')

const app = express();
const port = 3000;

app.use(express.urlencoded())

app.get('/request', (req, res) => {
  res.send(pug.renderFile('src/views/form.pug', {}));
});

app.post('/request', (req, res) => {
  const result = runScript(req.body.code)
  res.redirect(url.format({
    pathname: '/result',
    query: {
      'result': result.output
    }
  }));
});

app.get('/result', (req, res) => {
  res.send(pug.renderFile('src/views/result.pug', {
    result: req.query.result
  }));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

const express = require('express');
const pug = require('pug');
const url = require('url');

const convert = require('./logicRunner')

const app = express();
const port = 3000;

function serialize(table) {
  result = '';
  table.forEach((value, key) => {
    result += key + ': ' + value.toString() + '<br>';
  })
  return result;
}

app.use(express.urlencoded())

app.get('/request', (req, res) => {
  res.send(pug.renderFile('src/views/form.pug', {}));
});

app.post('/request', (req, res) => {
  const result = convert(req.body.code)
  res.redirect(url.format({
    pathname: '/result',
    query: {
      'result': result.pcnf,
      'table': serialize(result.table)
    }
  }));
});

app.get('/result', (req, res) => {
  res.send(pug.renderFile('src/views/result.pug', {
    result: req.query.result,
    table: req.query.table
  }));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
